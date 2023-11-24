// CommonJS
// math.js
function add(a, b) { return a + b; }
function mul(a, b) { return a * b; }
module.exports = { add, mul };

// index.js
const { add } = require('./math');
console.log(add(2, 3));
