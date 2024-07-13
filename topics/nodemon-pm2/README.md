# nodemon (dev) + pm2 (prod)

Process supervisors for development and production.

## Key points

- nodemon restarts on file change — never use in prod
- pm2 manages clusters, log rotation, auto-restart, watchdog
- pm2 ecosystem.config.js for declarative config
- alternatives: systemd, foreman, Docker + restart=always

## Examples

See `examples/` for runnable demos.

## Exercise

Write an ecosystem.config.js for a 4-process cluster.
