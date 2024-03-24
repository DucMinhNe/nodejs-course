# PostgreSQL with pg

Native node-postgres driver.

## Key points

- use a Pool — never new Client per query
- parameterised queries with `$1, $2, ...` — never string concat
- transactions with `pool.connect()` + BEGIN / COMMIT / ROLLBACK
- wrap results in a service layer

## Examples

See `examples/` for runnable demos.

## Exercise

Build a transactional money transfer.
