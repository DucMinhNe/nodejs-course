# OWASP top 10 (Node-flavour)

Top web vulnerabilities and how to mitigate in Node.

## Key points

- Injection: parameterise queries; never eval user input
- Broken auth: bcrypt/argon2, JWT short TTL, session rotation
- XSS: escape output; CSP
- Sensitive data exposure: TLS + secrets in vault
- SSRF: never fetch arbitrary URLs from user input

## Examples

See `examples/` for runnable demos.

## Exercise

Audit a sample app against the list.
