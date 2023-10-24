console.log(typeof 'hello');     // string
console.log(typeof 42);          // number
console.log(typeof 42n);         // bigint
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // 'object' (a famous bug)
console.log(typeof Symbol('s')); // symbol
console.log(typeof {});          // object
console.log(typeof []);          // object (use Array.isArray)
console.log(typeof function(){});// function

// by value vs by reference
let a = 1; let b = a; b = 2; console.log(a); // 1
let o1 = {n:1}; let o2 = o1; o2.n = 2; console.log(o1.n); // 2
