// array
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest); // 1 2 [3,4,5]

// skip
const [, , third] = [10, 20, 30];
console.log(third); // 30

// object
const { name, age } = { name: 'Minh', age: 30 };

// rename + default
const { city: c = 'HN' } = { city: undefined };
console.log(c); // HN

// nested
const { user: { id } } = { user: { id: 99 } };

// function params
function greet({ name, lang = 'en' } = {}) {
  console.log(name, lang);
}
greet({ name: 'Minh' });
