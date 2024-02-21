# Rate limiting

express-rate-limit limits requests per IP per window.

## Key points

- pick a store (memory default; Redis in prod)
- different limits for /login, /api, /search
- respond with 429 + retry-after header
- consider IP spoofing if behind proxies — trust proxy first

## Examples

See `examples/` for runnable demos.

## Exercise

Add a 5-attempts-per-15-min limit to /login.
