const os = require('os');

console.log('platform:', os.platform());
console.log('arch:', os.arch());
console.log('hostname:', os.hostname());
console.log('cores:', os.cpus().length);
console.log('total:', (os.totalmem() / 1024**3).toFixed(1), 'GB');
console.log('free :', (os.freemem() / 1024**3).toFixed(1), 'GB');
console.log('uptime:', os.uptime(), 's');
console.log('tmpdir:', os.tmpdir());
console.log('loadavg:', os.loadavg());
console.log('user:', os.userInfo().username);
