# util module

Utilities: promisify, callbackify, types, inspect.

## Key points

- `util.promisify(fn)` converts callback-style to Promise
- `util.inspect(obj)` for pretty debug output
- `util.types.isPromise(x)` and friends
- `util.format('%s %d', ...)` like printf

## Examples

See `examples/` for runnable demos.

## Exercise

Promisify an old callback-based DB driver.
