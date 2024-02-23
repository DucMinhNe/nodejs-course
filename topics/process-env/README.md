# Process & Environment

`process` exposes runtime info, env vars, stdio, and lifecycle hooks.

## Key points

- read `process.env.X`
- handle signals (`SIGTERM`, `SIGINT`) for graceful shutdown
- log to `stdout` / `stderr` separately

## Examples

See `examples/` for runnable demos.

## Exercise

Implement graceful shutdown for an Express app on `SIGTERM`.

See `exercise.js` for the starter.
