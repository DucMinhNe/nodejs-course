# console module

Beyond console.log: log, info, warn, error, group, time, trace, dir, table.

## Key points

- `console.error` writes to stderr (separate stream)
- `console.time / timeEnd` for quick timing
- `console.table(rows)` prints aligned rows
- `new console.Console(stdout, stderr)` builds a custom logger

## Examples

See `examples/` for runnable demos.

## Exercise

Use console.table to format an array of users.
