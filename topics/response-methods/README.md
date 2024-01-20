# Express response methods

How to send data back from a route.

## Key points

- `res.json(obj)` sets Content-Type and stringifies
- `res.status(n).json(...)` to set status code

## Examples

See `examples/` for runnable demos.

## Exercise

Write a `/download/:id` route streaming a file with a custom name.
