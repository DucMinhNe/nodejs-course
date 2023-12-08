console.log(Boolean(0));      // false
console.log(Boolean(''));     // false
console.log(Boolean('hi'));   // true
console.log(Boolean([]));     // true  (surprise!)
console.log(Boolean({}));     // true
console.log(!!'0');           // true  (non-empty string)

const items = [];
if (items.length) console.log('has items'); // length 0 is falsy
else console.log('empty');

const name = '';
console.log(name || 'anonymous'); // 'anonymous'
