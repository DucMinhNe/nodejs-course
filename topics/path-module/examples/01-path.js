const path = require('path');

console.log(path.join('users', 'minh', 'docs')); // 'users/minh/docs'
console.log(path.resolve('a', 'b'));            // absolute from cwd
console.log(path.basename('/a/b/c.txt'));       // 'c.txt'
console.log(path.dirname('/a/b/c.txt'));        // '/a/b'
console.log(path.extname('img.tar.gz'));        // '.gz'
console.log(path.parse('/a/b/c.txt'));
// { root: '/', dir: '/a/b', base: 'c.txt', ext: '.txt', name: 'c' }

const base = path.resolve('/safe/dir');
const target = path.resolve(base, '../etc/passwd');
console.log(target.startsWith(base + path.sep)); // false — escaped!
