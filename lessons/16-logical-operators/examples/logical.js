console.log(true && 'yes');   // 'yes'
console.log(false && 'yes');  // false
console.log(false || 'fallback'); // 'fallback'
console.log('x' || 'y');      // 'x'
console.log(!true);           // false

// short-circuit guard
const user = { name: 'Minh' };
user && console.log(user.name); // only logs if user is truthy

// default value
function greet(name) {
  name = name || 'guest';
  console.log('Hi', name);
}
greet();        // Hi guest
greet('Minh');  // Hi Minh
