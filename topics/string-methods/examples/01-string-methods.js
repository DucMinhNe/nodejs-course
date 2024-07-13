const s = '  Hello World!  ';

console.log(s.trim().toLowerCase());         // 'hello world!'
console.log(s.length);                       // 16
console.log(s.includes('World'));            // true
console.log(s.startsWith('  H'));            // true
console.log(s.slice(2, 7));                  // 'Hello'
console.log(s.replace('Hello', 'Hi'));       // '  Hi World!  '
console.log('a-b-c'.split('-'));             // ['a','b','c']
console.log('5'.padStart(3, '0'));           // '005'
console.log('ha'.repeat(3));                 // 'hahaha'
console.log(`template ${1 + 2}`);            // 'template 3'
