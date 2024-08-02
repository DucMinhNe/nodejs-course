// declaration
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// no return -> undefined
function log(msg) {
  console.log('[LOG]', msg);
}

// functions are values
const ops = { add, sub: (a, b) => a - b };
console.log(ops.add(5, 2), ops.sub(5, 2));

// passing a function as argument
[1, 2, 3].forEach(add.bind(null, 10)); // not printed, but valid
