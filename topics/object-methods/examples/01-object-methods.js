const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));    // ['a','b','c']
console.log(Object.values(obj));  // [1,2,3]
console.log(Object.entries(obj)); // [['a',1],['b',2],['c',3]]

const doubled = Object.fromEntries(
  Object.entries(obj).map(([k, v]) => [k, v * 2])
);
console.log(doubled); // { a: 2, b: 4, c: 6 }

const frozen = Object.freeze({ x: 1 });
frozen.x = 99; // silently ignored (TypeError in strict mode)
console.log(frozen.x); // 1

const merged = Object.assign({}, { a: 1 }, { b: 2 });
const merged2 = { ...{ a: 1 }, ...{ b: 2 } }; // preferred
