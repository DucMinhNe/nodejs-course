// implicit return
const add = (a, b) => a + b;
const square = x => x * x;
console.log(add(2, 3), square(4));

// block body needs return
const classify = (n) => {
  if (n > 0) return 'positive';
  if (n < 0) return 'negative';
  return 'zero';
};

// returning an object literal — wrap in parens
const makeUser = (name) => ({ name, createdAt: Date.now() });
console.log(makeUser('Minh'));

// great with array methods
console.log([1, 2, 3].map(n => n * 10));
