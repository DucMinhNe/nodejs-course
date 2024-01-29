# Serving static files

Express has built-in static middleware.

## Key points

- `express.static('public')` serves /public
- set max-age headers via options for caching
- use a CDN in production; Node-served statics don't scale
- be careful with directory traversal — middleware handles it but be cautious with custom code

## Examples

See `examples/` for runnable demos.

## Exercise

Add cache-control headers to a static-files route.
