// statement
let total = 0;

// expression (produces a value)
let doubled = total + 10;

// block
if (doubled > 5) {
  console.log('big');
}

// ASI pitfall — this breaks without a semicolon above:
const a = 1
const b = 2
;[a, b].forEach(n => console.log(n)) // leading ; protects the array literal
