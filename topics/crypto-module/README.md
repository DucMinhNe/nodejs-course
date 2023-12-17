# crypto module

Hashing, HMAC, encryption, secure random.

## Key points

- `crypto.createHash('sha256')` for hashing
- `crypto.createHmac` for keyed MACs
- `crypto.randomBytes(n)` for crypto-strength random
- `scrypt` / `pbkdf2` for password hashing (or use bcrypt/argon2)

## Examples

See `examples/` for runnable demos.

## Exercise

Hash a password with scrypt and verify it.
