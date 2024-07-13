# Debugging Node

Beyond `console.log`.

## Key points

- `node --inspect` + Chrome DevTools (breakpoints, profiles)
- `debug` package: namespaced logging toggled by env var
- VSCode launch.json: 'launch' or 'attach'
- `process.on('unhandledRejection')` to log lost promise errors

## Examples

See `examples/` for runnable demos.

## Exercise

Set up VSCode launch config + a debug namespace.
