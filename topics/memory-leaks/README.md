# Memory leaks

Common Node memory leaks and how to find them.

## Key points

- heap snapshots: `node --inspect` + Chrome DevTools
- common leaks: unbounded caches, closures, listeners
- monitor: process.memoryUsage().heapUsed over time
- `--max-old-space-size=N` to raise heap; usually a symptom

## Examples

See `examples/` for runnable demos.

## Exercise

Find a leak using two heap snapshots and diffing.
