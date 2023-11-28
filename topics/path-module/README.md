# path module

Cross-platform path manipulation.

## Key points

- `path.join` vs `path.resolve` (relative vs absolute)
- `path.sep` differs on Windows (`\`) and POSIX (`/`)
- `path.basename`, `path.dirname`, `path.extname`
- always avoid string concat for paths

## Examples

See `examples/` for runnable demos.

## Exercise

Normalise a list of user-supplied paths and reject ones that escape a base dir.
