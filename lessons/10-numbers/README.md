# Lesson 10: Numbers

All numbers are 64-bit floats (IEEE 754). bigint for huge integers.

## What you'll learn

- no separate int type — `1` and `1.0` are the same
- `NaN` = Not a Number; `NaN !== NaN`
- `Infinity` and `-Infinity` exist
- floating point is imprecise: `0.1 + 0.2 !== 0.3`
- parse with `Number()`, `parseInt()`, `parseFloat()`

## Example

See `examples/`.

## Exercise

Write `round2(n)` returning a number rounded to 2 decimals.
