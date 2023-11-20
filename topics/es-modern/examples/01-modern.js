const n = 1_000_000;
console.log(n);

const arr = [10, 20, 30];
console.log(arr.at(-1)); // 30

const clone = structuredClone({ nested: { a: 1 } });
console.log(clone);

// optional chaining call
const maybeFn = null;
const x = maybeFn?.(); // undefined, no throw

// Object.hasOwn (es2022)
const o = { a: 1 };
console.log(Object.hasOwn(o, 'a'));      // true
console.log(Object.hasOwn(o, 'toString')); // false

// numeric separators
const big = 1_000_000_000n;
console.log(big);
