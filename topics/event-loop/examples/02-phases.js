// Node.js event loop phases (simplified)
// 1. timers       (setTimeout, setInterval callbacks)
// 2. pending      (some system callbacks)
// 3. idle/prepare (internal)
// 4. poll         (I/O callbacks)
// 5. check        (setImmediate)
// 6. close        ('close' events)
//
// process.nextTick + microtasks run between every phase.

setImmediate(() => console.log('immediate'));
setTimeout(() => console.log('timeout 0'), 0);
process.nextTick(() => console.log('nextTick'));
Promise.resolve().then(() => console.log('promise'));

// order varies but nextTick + promise always run before immediate/timeout
