console.log(5 === 5);     // true
console.log(5 === '5');   // false (different types)
console.log(5 == '5');    // true  (coerced)
console.log(5 !== '5');   // true

console.log('apple' < 'banana'); // true (alphabetical)
console.log('10' < '9');         // true (string compare!)
console.log(10 < 9);             // false (number compare)

console.log({} === {});   // false (different refs)
const o = {}; console.log(o === o); // true (same ref)
