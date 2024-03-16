# child_process

Spawn external commands.

## Key points

- `spawn` for streaming long-running processes
- `exec` for short commands with buffered output
- NEVER pass user input directly to `exec` (shell injection risk)

## Examples

See `examples/` for runnable demos.

## Exercise

Wrap `git status` and return parsed JSON of changed files.

See `exercise.js` for the starter.
