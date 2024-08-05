// hoisting: var declarations are hoisted to top of function scope
console.log(x); // undefined  (not ReferenceError)
var x = 5;

// function declarations are fully hoisted
greet();
function greet() {
  console.log('hi');
}

// let/const are hoisted but in temporal dead zone
try {
  console.log(y);
} catch (e) {
  console.log(e.message); // Cannot access 'y' before initialization
}
let y = 10;
