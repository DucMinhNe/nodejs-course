# Environment variables with dotenv

Twelve-factor config: read from env, fall back to defaults.

## Key points

- load .env early: `require('dotenv').config()` at top of entry file
- never commit .env — only commit .env.example

## Examples

See `examples/` for runnable demos.

## Exercise

Validate required env vars at startup.
