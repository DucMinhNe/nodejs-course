# Worker Threads

Run CPU-bound work off the main thread.

## Key points

- each worker has its own V8 instance and event loop
- message-passing with `postMessage` / `parentPort`
- use `SharedArrayBuffer` for shared memory
- avoid for I/O — workers shine for CPU work

## Examples

See `examples/` for runnable demos.

## Exercise

Move a big prime-sieve into a worker and report progress.

See `exercise.js` for the starter.
