// synchronous callback
function repeat(n, cb) {
  for (let i = 0; i < n; i++) cb(i);
}
repeat(3, (i) => console.log('tick', i));

// error-first async callback (Node convention)
const fs = require('fs');
fs.readFile('config.json', 'utf8', (err, data) => {
  if (err) return console.error('failed:', err.message);
  console.log('contents:', data);
});

// callback hell (why we moved to promises)
// doA(() => doB(() => doC(() => done())));
