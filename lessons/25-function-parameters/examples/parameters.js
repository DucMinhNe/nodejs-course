// defaults
function greet(name = 'guest', lang = 'en') {
  console.log(`[${lang}] Hi ${name}`);
}
greet();             // [en] Hi guest
greet('Minh', 'vi'); // [vi] Hi Minh

// rest
function sum(...nums) {
  return nums.reduce((s, n) => s + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// destructured options object
function createServer({ port = 3000, host = 'localhost' } = {}) {
  console.log(`serving ${host}:${port}`);
}
createServer({ port: 8080 });
createServer();
