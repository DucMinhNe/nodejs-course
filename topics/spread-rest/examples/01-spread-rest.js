// spread arrays
const a = [1, 2, 3];
const b = [0, ...a, 4]; // [0,1,2,3,4]
console.log(Math.max(...a));

// spread objects (shallow)
const u = { name: 'Minh' };
const u2 = { ...u, age: 30 };
console.log(u2);

// rest params
function sum(...nums) { return nums.reduce((s, n) => s + n, 0); }
console.log(sum(1, 2, 3, 4)); // 10

// careful: spread is shallow
const nested = { inner: { x: 1 } };
const copy = { ...nested };
copy.inner.x = 99;
console.log(nested.inner.x); // 99 — same ref
