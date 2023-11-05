# Symbols

Symbols are unique primitive values used as obj keys or well-known protocols.

## Key points

- Symbol('desc') creates a unique value — never `==` another symbol
- well-known: Symbol.iterator, Symbol.asyncIterator, Symbol.toPrimitive
- Symbol.for / Symbol.keyFor work with a shared registry
- symbol-keyed props aren't enumerated by Object.keys

## Examples

See `examples/` for runnable demos.

## Exercise

Implement Symbol.toPrimitive on a class.
