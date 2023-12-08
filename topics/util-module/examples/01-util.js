const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);
(async () => {
  const data = await readFile(__filename, 'utf8');
  console.log(data.length);
})();

console.log(util.inspect({ a: { b: { c: 1 } } }, { depth: null, colors: true }));
console.log(util.format('user=%s age=%d', 'Minh', 30));

console.log(util.types.isPromise(Promise.resolve())); // true
console.log(util.types.isDate(new Date()));            // true
