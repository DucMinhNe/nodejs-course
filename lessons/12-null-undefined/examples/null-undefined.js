let a;
console.log(a);               // undefined (not assigned)

const obj = { name: 'Minh' };
console.log(obj.age);         // undefined (missing prop)

function noReturn() {}
console.log(noReturn());      // undefined

let b = null;                 // intentionally empty
console.log(b);               // null

console.log(null == undefined);  // true
console.log(null === undefined); // false

console.log(a ?? 'default');  // 'default'
console.log(b ?? 'default');  // 'default'
