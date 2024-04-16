# MySQL with mysql2

mysql2 supports both promise + callback API.

## Key points

- use a pool
- promise API: `mysql.createPool(...).promise()`
- parameter binding with `?` — never concatenate strings
- transactions via getConnection + beginTransaction

## Examples

See `examples/` for runnable demos.

## Exercise

Migrate a callback-style query to the promise API.
