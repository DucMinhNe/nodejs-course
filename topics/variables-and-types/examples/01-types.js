// the 7 primitives + object
console.log(typeof 'hi');      // string
console.log(typeof 42);        // number
console.log(typeof 42n);       // bigint
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object  <-- bug
console.log(typeof Symbol());  // symbol
console.log(typeof {});        // object

const x = 1;
// x = 2; // TypeError: Assignment to constant
let y = 2; y = 3; // ok
