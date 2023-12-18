// to string
console.log(String(42));     // '42'
console.log((42).toString()); // '42'
console.log(`${42}`);        // '42'

// to number
console.log(Number('42'));   // 42
console.log(+'42');          // 42
console.log(parseInt('42px', 10)); // 42

// to boolean
console.log(Boolean(1));     // true
console.log(!!0);            // false

// implicit coercion (be careful)
console.log('5' * 2);        // 10
console.log(1 + '2');        // '12'
console.log('5' - 1);        // 4
