# Variables & Types

JavaScript has 8 data types: 7 primitives + Object.

## Key points

- `var`, `let`, `const` — only `let`/`const` are block-scoped
- primitives: string, number, bigint, boolean, undefined, null, symbol
- use `typeof` to inspect a value's type (returns string)
- `null` is a value but `typeof null === 'object'` (historical quirk)

## Examples

See `examples/` for runnable demos.

## Exercise

Write a `realTypeOf(v)` that returns 'array', 'null', etc.
