# Helmet — security headers

Helmet sets ~15 secure HTTP response headers by default.

## Key points

- `Content-Security-Policy` mitigates XSS
- `Strict-Transport-Security` forces HTTPS
- `X-Content-Type-Options: nosniff` blocks MIME-sniff
- tune the CSP per app — defaults block inline scripts

## Examples

See `examples/` for runnable demos.

## Exercise

Configure CSP to allow a specific CDN.
