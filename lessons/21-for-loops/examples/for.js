// classic
for (let i = 0; i < 3; i++) console.log('i =', i);

// for...of (values)
const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) console.log(fruit);

// for...of with index
for (const [i, fruit] of fruits.entries()) console.log(i, fruit);

// for...in (object keys)
const user = { name: 'Minh', age: 30 };
for (const key in user) console.log(key, user[key]);
