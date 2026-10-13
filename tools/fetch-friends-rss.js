const fs = require('fs');
const path = require('path');
const YAML = require('js-yaml');
const Parser = require('rss-parser');
const parser = new Parser({ timeout: 15000 });

function guessRssFromWebsite(website){
  if(!website) return null;
  try{
    const u = new URL(website);
    // 常见 location: /index.xml, /atom.xml, /feed.xml, /feed
    return [
      `${u.origin}/index.xml`,
      `${u.origin}/atom.xml`,
      `${u.origin}/feed.xml`,
      `${u.origin}/feed`,
      `${u.origin}/rss.xml`
    ];
  }catch(e){ return null; }
}

async function tryParseMany(urls){
  for(const url of urls){
    try{
      const feed = await parser.parseURL(url);
      return { feed, url };
    }catch(e){
      // continue
    }
  }
  throw new Error('no feed parsed');
}

async function main(){
  const root = process.cwd();
  const dataPath = path.join(root, 'data', 'friends.yml');
  if(!fs.existsSync(dataPath)){ console.error('data/friends.yml not found'); process.exit(1); }
  const raw = fs.readFileSync(dataPath, 'utf8');
  const friends = YAML.load(raw);
  const out = {};
  for(const f of friends){
    const candidateUrls = [];
    if(f.rss) candidateUrls.push(f.rss);
    const guesses = guessRssFromWebsite(f.website);
    if(guesses) candidateUrls.push(...guesses);
    try{
      const { feed } = await tryParseMany(candidateUrls);
      const items = (feed.items || []).slice(0,5).map(it=>({
        title: it.title || '(no title)',
        link: it.link || it.guid || '',
        pubDate: it.pubDate || it.isoDate || '',
        contentSnippet: it.contentSnippet || (it.content || '').slice(0,140)
      }));
      out[f.id] = items;
      console.log(`fetched ${f.id}: ${items.length} items`);
    }catch(err){
      console.warn(`failed fetch for ${f.id}: ${err.message}`);
      out[f.id] = [];
    }
  }
  const outPath = path.join(root, 'data', 'friend_posts.json');
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8');
  console.log('wrote', outPath);
}
main().catch(err=>{ console.error(err); process.exit(1); });
