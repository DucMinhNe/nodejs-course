# Lesson 30: Callbacks

Functions passed to other functions, called later.

## What you'll learn

- a callback is just a function argument
- Node's classic pattern is error-first: `(err, result) => ...`
- nested callbacks lead to 'callback hell' — promises fix that
- always handle the error argument

## Example

See `examples/`.

## Exercise

Write a `mapAsync(arr, cb)` using error-first callbacks.
