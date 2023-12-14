# Modules: CommonJS vs ESM

Node supports both module systems. Mixing them needs care.

## Key points

- CommonJS: synchronous, `require` / `module.exports`
- ESM: asynchronous, `import` / `export`, requires `"type": "module"` or `.mjs`
- can't `require` an ESM module directly (use dynamic `import()`)

## Examples

See `examples/` for runnable demos.

## Exercise

Migrate a small CommonJS package to ESM.

See `exercise.js` for the starter.
