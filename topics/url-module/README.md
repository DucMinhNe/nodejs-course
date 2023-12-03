# url module

WHATWG URL class + legacy url.parse.

## Key points

- `new URL(input, base)` — modern API
- searchParams is a URLSearchParams object
- `URL` throws on invalid input — wrap in try/catch
- legacy `url.parse` is deprecated

## Examples

See `examples/` for runnable demos.

## Exercise

Parse a request URL and validate the redirect target is on the same host.
