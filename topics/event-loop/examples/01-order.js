// event loop ordering: microtasks beat macrotasks
console.log('start');

setTimeout(() => console.log('timeout'), 0);   // macrotask

Promise.resolve().then(() => console.log('microtask')); // microtask

queueMicrotask(() => console.log('queueMicrotask'));

console.log('end');

// output: start, end, microtask, queueMicrotask, timeout
