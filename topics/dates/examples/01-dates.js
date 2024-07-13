const now = new Date();

console.log(now.getFullYear(), now.getMonth() + 1, now.getDate());
console.log(now.getHours(), now.getMinutes(), now.getSeconds());
console.log(now.toISOString());        // UTC
console.log(now.toLocaleString('vi-VN'));

const pad = (n) => String(n).padStart(2, '0');
const fmt = (d) => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
console.log(fmt(now));

// arithmetic by ms
const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);

// duration
const start = Date.now();
// ... work ...
console.log('elapsed', Date.now() - start, 'ms');
