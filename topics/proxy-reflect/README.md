# Proxy & Reflect

Intercept fundamental object operations.

## Key points

- traps: get, set, has, deleteProperty, apply, construct, etc.
- Reflect mirrors trap signatures for delegation
- useful for: validation, logging, defaults, virtualisation
- performance overhead — don't proxy hot paths

## Examples

See `examples/` for runnable demos.

## Exercise

Build a defaultsTo(obj, defaults) using Proxy.
