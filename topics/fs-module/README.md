# File System (`fs`)

Three flavours: sync, callback, and Promise-based (`fs/promises`).

## Key points

- prefer `fs/promises` in modern code
- always handle errors (file might not exist, permissions...)
- use streams for large files
- watch out for race conditions on concurrent writes

## Examples

See `examples/` for runnable demos.

## Exercise

Build a recursive directory walker returning all `.js` files.

See `exercise.js` for the starter.
