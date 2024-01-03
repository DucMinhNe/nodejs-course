console.log('plain');
console.info('info');
console.warn('warn');
console.error('error');

console.time('build');
// ... work ...
console.timeEnd('build');

console.table([
  { name: 'Minh', age: 30 },
  { name: 'An',   age: 25 },
]);

console.group('user');
console.log('name: Minh');
console.log('role: admin');
console.groupEnd();

console.trace('reached here');
