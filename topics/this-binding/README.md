# `this` Binding

`this` depends on how a function is called, not where it is defined — except arrow functions.

## Key points

- default binding: `this` = global (or undefined in strict)
- implicit binding: `obj.fn()` → `this = obj`

## Examples

See `examples/` for runnable demos.

## Exercise

Refactor an event handler so `this` refers to the component, not the DOM element.

See `exercise.js` for the starter.
