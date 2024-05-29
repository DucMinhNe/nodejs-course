# Profiling notes

## V8 built-in profiler

```bash
node --prof app.js
# run load against the app
# generates isolate-*.log
node --prof-process isolate-*.log > processed.txt
```

## clinic.js

```bash
npm i -g clinic autocannon
clinic doctor -- node app.js
autocannon http://localhost:3000
# then ctrl-c the server, opens diagnostic in browser
```

## Chrome DevTools

```bash
node --inspect app.js
# open chrome://inspect, click 'inspect'
```

## What to look for

- event-loop lag > 50ms → blocking work on main thread
- GC pause > 100ms → heap pressure, possible leak
- CPU > 80% with low throughput → unoptimised hot path
