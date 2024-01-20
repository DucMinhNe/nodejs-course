# Buffer

Node's binary data buffer (fixed-length, like Uint8Array).

## Key points

- `Buffer.from(...)`, `Buffer.alloc(n)`, `Buffer.allocUnsafe(n)`
- convert with `.toString('utf8' | 'hex' | 'base64')`
- Buffer is a subclass of Uint8Array
- concat with `Buffer.concat([...])`

## Examples

See `examples/` for runnable demos.

## Exercise

Read a file into a Buffer and print its hex digest.
