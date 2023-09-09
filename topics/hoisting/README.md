# Hoisting & TDZ

Variable and function declarations are hoisted to the top of their scope.

## Key points

- `var` is hoisted as `undefined`
- function declarations are fully hoisted
- `let` / `const` are hoisted but in the Temporal Dead Zone
- TDZ throws `ReferenceError` on access before declaration

## Examples

See `examples/` for runnable demos.

## Exercise

Predict the output of three hoisting traps.

See `exercise.js` for the starter.
