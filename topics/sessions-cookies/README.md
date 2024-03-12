# Sessions & Cookies

Session-based auth using express-session and signed cookies.

## Key points

- always set cookies with httpOnly + secure + sameSite=lax/strict
- session store must be persistent in prod (Redis, Mongo)

## Examples

See `examples/` for runnable demos.

## Exercise

Add a session-based auth + logout.
