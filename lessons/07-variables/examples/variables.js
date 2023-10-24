const PI = 3.14159;   // never reassigned
let count = 0;        // will change
count = count + 1;

// const object can still be mutated
const user = { name: 'Minh' };
user.name = 'An';     // OK — we mutated, didn't reassign
// user = {};         // ERROR — reassignment

// var is function-scoped (avoid)
function demo() {
  if (true) { var leaked = 1; }
  console.log(leaked); // 1 — var leaks out of the block!
}
