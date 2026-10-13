const fs = require('fs');
const Parser = require('rss-parser');
const parser = new Parser();

(async () => {
  try {
    const feed = await parser.parseURL('https://fuquan99666.github.io/index.xml');

    const items = (feed.items || []).slice(0, 20).map(item => ({
      friend: 'zzz~',
      avatar: 'https://fuquan99666.github.io/avatar.png',
      friendLink: 'https://fuquan99666.github.io',
      title: item.title || 'Untitled',
      url: item.link || '#',
      date: (item.pubDate || '').slice(0, 10)
    }));

    fs.writeFileSync(
      'data/friend_posts.json',
      JSON.stringify(items, null, 2),
      'utf8'
    );

    console.log('Saved', items.length, 'posts');
  } catch (err) {
    console.error('Fetch failed:', err.message);
    process.exit(1);
  }
})();
