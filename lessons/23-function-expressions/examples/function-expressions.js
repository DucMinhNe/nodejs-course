// declaration — hoisted
sayHi(); // works
function sayHi() { console.log('hi'); }

// expression — NOT hoisted
// sayBye(); // TypeError: sayBye is not a function
const sayBye = function () { console.log('bye'); };
sayBye();

// named function expression
const fact = function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
};
console.log(fact(5)); // 120

// IIFE
(function () { console.log('runs immediately'); })();
