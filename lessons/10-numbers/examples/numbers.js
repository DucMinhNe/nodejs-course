console.log(0.1 + 0.2);            // 0.30000000000000004
console.log((0.1 + 0.2).toFixed(2)); // '0.30'

console.log(10 / 0);    // Infinity
console.log(0 / 0);     // NaN
console.log(Number.isNaN(NaN));   // true

console.log(parseInt('42px', 10)); // 42
console.log(parseFloat('3.14abc'));// 3.14
console.log(Number('  10  '));     // 10
console.log(Number('10px'));       // NaN

console.log((1234.5678).toFixed(2)); // '1234.57'
console.log(Number.MAX_SAFE_INTEGER);
const big = 9007199254740993n;     // bigint
