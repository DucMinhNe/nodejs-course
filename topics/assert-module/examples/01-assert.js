const assert = require('node:assert/strict');

assert.equal(1 + 1, 2);
assert.deepEqual([1, 2, 3], [1, 2, 3]);
assert.deepStrictEqual({ a: 1 }, { a: 1 });
assert.notEqual(1, 2);
assert.ok(true);

assert.throws(() => { JSON.parse('{'); }, SyntaxError);

assert.rejects(async () => { throw new Error('x'); }, { message: 'x' });
