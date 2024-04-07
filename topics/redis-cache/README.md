# Redis caching

Cache-aside pattern: try Redis, fallback to DB, write through.

## Key points

- client: ioredis or node-redis
- set with TTL to bound stale data

## Examples

See `examples/` for runnable demos.

## Exercise

Implement a cached findUser that misses to PG on cold reads.
