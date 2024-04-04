# Cluster Mode

Fork the master process to use multiple CPU cores.

## Key points

- one master + N workers (typically `os.cpus().length`)
- the master handles the listening socket and distributes connections

## Examples

See `examples/` for runnable demos.

## Exercise

Add a `/load` endpoint that does heavy work and confirm cluster spreads requests.

See `exercise.js` for the starter.
