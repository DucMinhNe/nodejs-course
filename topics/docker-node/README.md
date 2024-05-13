# Dockerizing Node apps

Multi-stage builds for small, secure production images.

## Key points

- use official `node:20-alpine` (slim)
- multi-stage: build with full image, copy artefacts into slim image
- run as non-root user
- .dockerignore must include node_modules + .git

## Examples

See `examples/` for runnable demos.

## Exercise

Write a multi-stage Dockerfile + .dockerignore.
