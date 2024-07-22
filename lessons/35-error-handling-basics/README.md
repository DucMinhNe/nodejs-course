# Lesson 35: Error handling basics

try / catch / finally and throwing errors.

## What you'll learn

- wrap risky code in `try { } catch (e) { }`
- `throw new Error('message')` to signal a problem
- `finally` always runs (cleanup)
- only async errors from awaited promises are caught

## Example

See `examples/`.

## Exercise

Wrap a file read in try/catch and return a default on failure.
