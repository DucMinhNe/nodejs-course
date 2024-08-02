const age = 20;
const status = age >= 18 ? 'adult' : 'minor';
console.log(status);

// in a template literal
const n = 3;
console.log(`You have ${n} item${n === 1 ? '' : 's'}`);

// avoid deep nesting — this is hard to read:
const role = 'admin';
const label = role === 'admin' ? 'A' : role === 'mod' ? 'M' : 'U';
// prefer an object lookup instead
