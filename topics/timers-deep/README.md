# Timers in depth

setTimeout, setInterval, setImmediate, process.nextTick.

## Key points

- `setTimeout(fn, 0)` ≠ `setImmediate(fn)` — different event loop phases
- `process.nextTick` runs before any I/O or timers
- `setInterval` drifts under load — prefer recursive setTimeout
- all return ref-able handles; use `.unref()` to allow process exit

## Examples

See `examples/` for runnable demos.

## Exercise

Build a `setTimeoutPromise(ms)` and a `delay(ms)` helper.
