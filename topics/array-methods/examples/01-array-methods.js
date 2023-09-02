const a = [1, 2, 3, 4, 5];

console.log(a.map(x => x * 2));            // [2,4,6,8,10]
console.log(a.filter(x => x % 2 === 0));   // [2,4]
console.log(a.reduce((acc, x) => acc + x, 0)); // 15
console.log(a.find(x => x > 3));           // 4
console.log(a.findIndex(x => x > 3));      // 3
console.log(a.every(x => x > 0));          // true
console.log(a.some(x => x > 4));           // true
console.log(a.includes(3));                // true

console.log([1, [2, [3, [4]]]].flat(2));   // [1,2,3,[4]]
console.log([1, 2].flatMap(x => [x, x*10])); // [1,10,2,20]

// careful: sort default is string compare
console.log([10, 1, 2].sort());            // [1, 10, 2]
console.log([10, 1, 2].sort((a, b) => a - b)); // [1, 2, 10]
