// What does this print, and in what order?

console.log('a');
setTimeout(() => console.log('b'), 0);
Promise.resolve().then(() => console.log('c'));
process.nextTick(() => console.log('d'));
console.log('e');
