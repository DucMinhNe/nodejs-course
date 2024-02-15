# CORS

Cross-Origin Resource Sharing for browser clients.

## Key points

- enable with `cors()` middleware
- use a whitelist function for origin instead of `*` in prod
- credentials (cookies) require `credentials: true` + specific origin
- preflight is OPTIONS — handled automatically

## Examples

See `examples/` for runnable demos.

## Exercise

Restrict CORS to two domains + allow credentials.
