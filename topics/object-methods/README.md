# Object Methods

Object utilities: keys, values, entries, freeze, assign, fromEntries.

## Key points

- Object.keys / values / entries — own enumerable string-keyed props
- Object.freeze: shallow immutability; Object.isFrozen to check
- Object.assign for shallow merge (use spread for clarity)
- Object.fromEntries pairs with Object.entries for transforms

## Examples

See `examples/` for runnable demos.

## Exercise

Convert `{a: 1, b: 2}` → `{a: '1', b: '2'}` using Object.fromEntries.
