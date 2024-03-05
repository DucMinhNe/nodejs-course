# Input validation

Validate at the boundary — never trust client input.

## Key points

- zod / joi for schema-based validation
- express-validator for chainable checks
- reject with 400 + a friendly error list
- TypeScript types help, but don't replace runtime validation

## Examples

See `examples/` for runnable demos.

## Exercise

Validate a signup body with zod.
