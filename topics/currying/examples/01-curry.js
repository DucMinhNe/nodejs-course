// currying
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...more) => curried(...args, ...more);
  };
};

const add3 = curry((a, b, c) => a + b + c);
console.log(add3(1)(2)(3));  // 6
console.log(add3(1, 2)(3));  // 6
console.log(add3(1, 2, 3));  // 6
