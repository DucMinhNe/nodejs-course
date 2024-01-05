// readable stream
const fs = require('fs');
const stream = fs.createReadStream('./big.txt', { encoding: 'utf8' });

stream.on('data', (chunk) => console.log('chunk len', chunk.length));
stream.on('end', () => console.log('done'));
stream.on('error', (err) => console.error(err));
