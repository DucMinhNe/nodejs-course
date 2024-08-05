# Express Middleware

Middleware are functions `(req, res, next) => ...` that run in order.

## Key points

- global middleware via `app.use`
- per-route middleware
- error middleware uses 4 args: `(err, req, res, next)`
- common middleware: helmet, cors, morgan, express-rate-limit

## Examples

See `examples/` for runnable demos.

## Exercise

Write a request-logger middleware that times each request.

See `exercise.js` for the starter.
