const crypto = require('crypto');

const h = crypto.createHash('sha256').update('hello').digest('hex');
console.log(h);

const hmac = crypto.createHmac('sha256', 'secret').update('msg').digest('hex');
console.log(hmac);

console.log(crypto.randomBytes(16).toString('hex'));
console.log(crypto.randomInt(1000));
console.log(crypto.randomUUID()); // RFC 4122 v4

// password hash w/ scrypt
const pw = 'correct horse battery staple';
const salt = crypto.randomBytes(16);
const hash = crypto.scryptSync(pw, salt, 64);
console.log(hash.toString('hex'));
