# JWT Authentication

Stateless auth via signed JSON tokens.

## Key points

- sign with HMAC (HS256) or RSA (RS256)
- never store secrets in code — use env vars

## Examples

See `examples/` for runnable demos.

## Exercise

Add login + protected `/me` endpoint with JWT.

See `exercise.js` for the starter.
