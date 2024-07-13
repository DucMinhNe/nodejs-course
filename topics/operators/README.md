# Operators

Arithmetic, logical, ternary, nullish coalescing, optional chaining.

## Key points

- nullish coalescing `??` falls back only on `null` / `undefined`
- `||` falls back on any falsy value
- optional chaining `?.` safely reads through possibly-null refs
- logical assignment: `a ||= b`, `a ??= b`, `a &&= b`

## Examples

See `examples/` for runnable demos.

## Exercise

Refactor 5 deeply-nested null checks using `?.` and `??`.
