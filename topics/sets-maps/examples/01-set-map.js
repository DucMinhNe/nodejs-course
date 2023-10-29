const s = new Set([1, 2, 2, 3]);
console.log([...s]); // [1, 2, 3]
s.add(4); s.delete(1);
console.log(s.has(2), s.size);

const m = new Map();
m.set('name', 'Minh');
const k = { id: 1 };
m.set(k, 'object-key');
console.log(m.get(k));
console.log(m.size);

for (const [key, val] of m) console.log(key, val);

// dedupe array
const dedupe = (arr) => [...new Set(arr)];
console.log(dedupe([1, 2, 2, 3, 3, 3])); // [1, 2, 3]
