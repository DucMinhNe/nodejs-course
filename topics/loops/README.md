# Loops

for, for…of, for…in, while, do-while, forEach.

## Key points

- `for…of` iterates values; `for…in` iterates keys (including inherited)
- `forEach` can't break — use `for…of` if you need early exit
- `for await…of` for async iterables
- watch out: `for…in` on arrays yields strings, not numbers

## Examples

See `examples/` for runnable demos.

## Exercise

Re-implement Array#every using a `for` loop.
