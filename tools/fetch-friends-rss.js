// tools/fetch-friends-rss.js
const fs = require('fs');
const path = require('path');
const YAML = require('js-yaml');
const Parser = require('rss-parser');
const parser = new Parser({ timeout: 15000 });

const MAX_PER_FRIEND = 5;
const GLOBAL_MAX = 500; // 合并后最大条数

function guessRssFromWebsite(website){
  if(!website) return [];
  try{
    const u = new URL(website);
    return [
      `${u.origin}/index.xml`,
      `${u.origin}/atom.xml`,
      `${u.origin}/feed.xml`,
      `${u.origin}/feed`,
      `${u.origin}/rss.xml`,
      `${u.origin}/post/index.xml`,
      `${u.origin}/p/index.xml`
    ];
  }catch(e){
    return [];
  }
}

async function tryParseMany(urls){
  for(const url of urls){
    try{
      const feed = await parser.parseURL(url);
      // consider valid if it has items
      if(feed && (feed.items || []).length > 0) return { feed, url };
    }catch(e){
      // ignore
    }
  }
  throw new Error('no feed parsed');
}

function normalizeDate(d){
  if(!d) return null;
  const dt = new Date(d);
  if(isNaN(dt)) return null;
  // YYYY-MM-DD
  return dt.toISOString().slice(0,10);
}

function ensureDir(p){
  const dir = path.dirname(p);
  if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function main(){
  const root = process.cwd();
  const friendsPath = path.join(root, 'data', 'friends.yml');
  if(!fs.existsSync(friendsPath)){ console.error('data/friends.yml not found'); process.exit(1); }
  const raw = fs.readFileSync(friendsPath, 'utf8');
  const friends = YAML.load(raw);

  const outItems = [];
  const seen = new Set();

  for(const f of friends){
    const id = f.id || f.title || f.website || Math.random().toString(36).slice(2,8);
    const displayName = f.title || id;
    const avatar = f.image || f.avatar || '';
    const friendLink = f.website || '';
    const candidate = [];

    if(f.rss) candidate.push(f.rss);
    candidate.push(...guessRssFromWebsite(f.website));

    let parsed = null;
    try{
      const res = await tryParseMany(candidate);
      parsed = res.feed;
      // map items, take up to MAX_PER_FRIEND
      const items = (parsed.items || []).slice(0, MAX_PER_FRIEND).map(it => {
        const url = it.link || it.guid || '';
        const title = it.title || '(no title)';
        const pubDate = normalizeDate(it.pubDate || it.isoDate || it.pubdate);
        return {
          friend: displayName,
          avatar,
          friendLink,
          title,
          url,
          date: pubDate
        };
      }).filter(it => it.url); // require url

      // dedupe per friend
      for(const it of items){
        if(seen.has(it.url)) continue;
        seen.add(it.url);
        outItems.push(it);
      }

      console.log(`fetched ${displayName}: ${items.length} items from ${parsed.link || 'feed'}`);
    }catch(err){
      console.warn(`no feed for ${displayName} (${f.website}): ${err.message}`);
    }
  }

  // sort by date desc (nulls last)
  outItems.sort((a,b)=>{
    const da = a.date || '';
    const db = b.date || '';
    if(da === db) return 0;
    if(!da) return 1;
    if(!db) return -1;
    return db.localeCompare(da);
  });

  const final = outItems.slice(0, GLOBAL_MAX);
  const outPath = path.join(root, 'data', 'friend_posts.json');
  ensureDir(outPath);
  fs.writeFileSync(outPath, JSON.stringify(final, null, 2), 'utf8');
  console.log('Wrote', outPath, 'items:', final.length);
}

main().catch(err=>{
  console.error(err);
  process.exit(1);
});
