const fruits = ['apple', 'banana'];
console.log(fruits[0]);     // 'apple'
console.log(fruits.length); // 2

fruits.push('cherry');      // add to end
fruits.unshift('mango');    // add to start
console.log(fruits);        // ['mango','apple','banana','cherry']

const last = fruits.pop();  // remove from end
const first = fruits.shift();// remove from start
console.log(first, last);

console.log(Array.isArray(fruits)); // true
console.log(fruits.indexOf('banana'));
console.log(fruits.includes('apple'));
