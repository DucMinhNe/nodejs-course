// math.test.js
const { add, mul } = require('./math');

describe('math', () => {
  test('add', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('mul', () => {
    expect(mul(4, 5)).toBe(20);
  });
});
