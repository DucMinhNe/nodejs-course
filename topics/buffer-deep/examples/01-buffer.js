const buf = Buffer.from('hello', 'utf8');
console.log(buf);              // <Buffer 68 65 6c 6c 6f>
console.log(buf.length);       // 5
console.log(buf.toString('hex'));    // '68656c6c6f'
console.log(buf.toString('base64')); // 'aGVsbG8='

const a = Buffer.from('a');
const b = Buffer.from('b');
console.log(Buffer.concat([a, b]).toString());

// allocUnsafe doesn't zero — faster but you must overwrite
const u = Buffer.allocUnsafe(4);
u.fill(0);
console.log(u);

const json = JSON.parse(Buffer.from('{"k":1}').toString());
console.log(json);
