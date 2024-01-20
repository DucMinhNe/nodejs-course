const https = require('https');

https.get('https://api.github.com/users/octocat', { headers: { 'User-Agent': 'demo' } }, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => console.log(JSON.parse(body)));
});
