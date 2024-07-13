const cfg = { db: null, port: 0 };

console.log(cfg.db || 'default-db');  // 'default-db'
console.log(cfg.db ?? 'default-db');  // 'default-db'
console.log(cfg.port || 3000);        // 3000  (0 is falsy)
console.log(cfg.port ?? 3000);        // 0

const user = { name: 'Minh', profile: { city: undefined } };
console.log(user?.profile?.city ?? 'unknown'); // 'unknown'
console.log(user?.address?.zip);              // undefined (no error)

let a = null;
a ??= 'set';   // a is now 'set'
let b = 'x';
b ||= 'y';     // b stays 'x'
