# package.json scripts

Lifecycle scripts + custom scripts in package.json.

## Key points

- lifecycle: prepublish, preinstall, postinstall, preversion, version
- `npm run <name>` runs custom scripts; `pre<name>` / `post<name>` chain
- `npx` runs binaries from node_modules without globals
- use `npm-run-all` to run scripts in series/parallel

## Examples

See `examples/` for runnable demos.

## Exercise

Add `dev`, `build`, `lint`, `test`, `start` scripts.
