# Type Coercion & Equality

JS coerces values when comparing or operating across types.

## Key points

- `==` performs type coercion, `===` does not — prefer `===`
- falsy values: 0, '', null, undefined, NaN, false
- everything else is truthy (including `[]` and `{}`!)
- `+` triggers string concat when either operand is a string

## Examples

See `examples/` for runnable demos.

## Exercise

Predict the output of 5 `==` traps.
