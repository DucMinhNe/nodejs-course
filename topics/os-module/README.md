# os module

System info: cpu, memory, hostname, platform, network.

## Key points

- `os.cpus()` returns array of CPUs (length = core count)
- `os.freemem()` / `os.totalmem()` in bytes
- `os.platform()` returns 'darwin', 'linux', 'win32'
- `os.tmpdir()` returns OS-specific temp dir

## Examples

See `examples/` for runnable demos.

## Exercise

Log a health summary: hostname, cores, free RAM %.
