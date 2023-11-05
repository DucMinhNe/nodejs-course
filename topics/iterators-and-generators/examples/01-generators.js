function* range(start, end, step = 1) {
  for (let i = start; i < end; i += step) yield i;
}

console.log([...range(0, 5)]); // [0,1,2,3,4]

for (const n of range(1, 10, 2)) console.log(n);

// custom iterable
const nums = {
  *[Symbol.iterator]() {
    yield 10; yield 20; yield 30;
  },
};
console.log([...nums]);

// generator delegation
function* inner() { yield 'a'; yield 'b'; }
function* outer() { yield 1; yield* inner(); yield 2; }
console.log([...outer()]); // [1, 'a', 'b', 2]
