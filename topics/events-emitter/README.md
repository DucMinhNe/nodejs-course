# EventEmitter

Node's pub/sub primitive.

## Key points

- `.on(event, listener)` / `.once` / `.off` / `.emit`
- many built-ins are EventEmitters (server, stream, process)
- by default a warning fires after 10 listeners — `setMaxListeners` to raise
- memory leaks: always `.off` listeners you no longer need

## Examples

See `examples/` for runnable demos.

## Exercise

Subclass EventEmitter to build a tiny job queue.
