# Profiling Node apps

Find bottlenecks with built-in and external tools.

## Key points

- `node --prof` produces a V8 prof log
- `clinic.js doctor` diagnoses common issues
- `--inspect` for Chrome DevTools
- log-based: pino + p99 latencies

## Examples

See `examples/` for runnable demos.

## Exercise

Profile a CPU-bound route and find the hot function.
