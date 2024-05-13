# CI with GitHub Actions

Automate test + lint + build on every push.

## Key points

- use actions/checkout + actions/setup-node
- cache node_modules via setup-node cache option
- matrix builds across Node versions
- secrets via GitHub Actions secrets (never in code)

## Examples

See `examples/` for runnable demos.

## Exercise

Add a workflow that runs tests on Node 18, 20, and 22.
