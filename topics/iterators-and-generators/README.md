# Iterators & Generators

Symbol.iterator + generator functions enable custom iteration.

## Key points

- any object with `[Symbol.iterator]()` is iterable
- generators (`function*`) implement iterables with `yield`
- yield* delegates to another iterable
- for await…of for async iterables

## Examples

See `examples/` for runnable demos.

## Exercise

Build a `range(start, end, step)` generator.
