# Errors

throw / try / catch / finally + custom Error classes.

## Key points

- always throw Error subclasses, never strings
- use `instanceof` to discriminate in `catch`
- finally runs always (even on `return` inside try)
- async errors: only rejected promises are caught with try/await

## Examples

See `examples/` for runnable demos.

## Exercise

Create AppError + ValidationError classes with status codes.
