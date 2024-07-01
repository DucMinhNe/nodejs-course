# Lesson 33: Command-line arguments

Read args passed to your script.

## What you'll learn

- `process.argv` is an array: [node, script, ...args]
- slice off the first two: `process.argv.slice(2)`
- parse flags manually or with a library (yargs, commander)
- `process.exit(code)` to end with a status

## Example

See `examples/`.

## Exercise

Build a CLI greeter that reads a --name flag.
