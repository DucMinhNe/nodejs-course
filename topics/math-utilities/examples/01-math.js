console.log(Math.PI, Math.E, Math.LN2);
console.log(Math.floor(2.9), Math.ceil(2.1), Math.round(2.5));
console.log(Math.trunc(-2.9));   // -2  (toward zero)
console.log(Math.abs(-7));
console.log(Math.pow(2, 10), 2 ** 10);
console.log(Math.sqrt(144));
console.log(Math.min(3, 1, 2), Math.max(3, 1, 2));
console.log(Math.max(...[3, 1, 2]));

const randInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randInt(1, 6)); // dice roll

// crypto random
const { randomInt } = require('crypto');
console.log(randomInt(1, 100)); // [1, 100)
