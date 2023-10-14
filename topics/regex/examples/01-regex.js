const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const m = '2024-03-15'.match(re);
console.log(m.groups); // { year: '2024', month: '03', day: '15' }

console.log(/hello/i.test('Hello World')); // true

// matchAll
const all = [...'a1 b2 c3'.matchAll(/([a-z])(\d)/g)];
console.log(all.map(x => x[2])); // ['1', '2', '3']

// replace with function
console.log('a1 b2'.replace(/\d/g, d => String(Number(d) * 10)));
// 'a10 b20'

// lookahead — match digits not followed by px
console.log('10px 20em 30 40px'.match(/\d+(?!px)/g));
