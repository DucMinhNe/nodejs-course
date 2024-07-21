// don't:
// - log secrets, tokens, full request bodies
// - use synchronous fs in hot paths
// - swallow errors silently
// - pass user input to child_process.exec directly
// - block the event loop with CPU work — use worker_threads

// do:
// - validate input at the boundary (zod, joi)
// - 12-factor: config in env, logs to stdout
// - graceful shutdown on SIGTERM
// - prefer async fs APIs
// - use a process manager (pm2, systemd, k8s)
