const s1 = Symbol('x');
const s2 = Symbol('x');
console.log(s1 === s2); // false

const key = Symbol.for('app/global');
console.log(Symbol.for('app/global') === key); // true

class Money {
  constructor(n) { this.n = n; }
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this.n;
    if (hint === 'string') return `$${this.n}`;
    return this.n;
  }
}
const m = new Money(42);
console.log(+m);       // 42
console.log(`${m}`);   // '$42'
