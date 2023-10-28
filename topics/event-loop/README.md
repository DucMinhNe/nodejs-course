# The Event Loop

Node's event loop drives async work. Understanding microtasks vs macrotasks matters.

## Key points

- microtasks (Promise, queueMicrotask, process.nextTick) run between every phase
- macrotasks (setTimeout, setImmediate, I/O) run by phase
- process.nextTick beats Promise.then
- blocking the loop blocks all I/O

## Examples

See `examples/` for runnable demos.

## Exercise

Predict the order of 6 mixed setTimeout / setImmediate / Promise / nextTick logs.

See `exercise.js` for the starter.
