# WebSockets with `ws`

Persistent bidirectional connections.

## Key points

- lighter than socket.io for raw use
- broadcast = loop over clients
- consider heartbeat + auth handshake
- for prod, run behind nginx with proxy_pass + upgrade headers

## Examples

See `examples/` for runnable demos.

## Exercise

Build a tiny chat server.
