const user = {
  name: 'Minh',
  age: 30,
  greet() { return `Hi, I'm ${this.name}`; },
};

console.log(user.name);       // dot access
console.log(user['age']);     // bracket access
console.log(user.greet());

// add / update / delete
user.email = 'a@b.com';
user.age = 31;
delete user.email;

// shorthand + computed keys
const name = 'An';
const key = 'dynamic';
const obj = { name, [key]: 123 };
console.log(obj); // { name: 'An', dynamic: 123 }
