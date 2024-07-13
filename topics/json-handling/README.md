# JSON

Serialize / parse with JSON.stringify and JSON.parse.

## Key points

- JSON has no functions, no `undefined`, no `Date` — they vanish or become strings
- circular references throw on stringify — use a replacer
- 2nd arg (replacer) lets you filter or transform
- 3rd arg (spaces) controls indentation

## Examples

See `examples/` for runnable demos.

## Exercise

Write a `safeStringify` that survives circular refs.
