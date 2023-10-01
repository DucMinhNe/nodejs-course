const obj = { a: 1, b: undefined, c: () => 1, d: new Date() };
console.log(JSON.stringify(obj));
// {"a":1,"d":"2024-01-01T..."}  -- b and c dropped, Date is string

console.log(JSON.stringify(obj, null, 2));

// replacer to omit fields
const out = JSON.stringify({ secret: 'x', name: 'Minh' }, (k, v) =>
  k === 'secret' ? undefined : v);
console.log(out); // {"name":"Minh"}

// reviver to transform on parse
const parsed = JSON.parse('{"date":"2024-01-01"}', (k, v) =>
  k === 'date' ? new Date(v) : v);
console.log(parsed.date instanceof Date); // true
