const t = setTimeout(() => console.log('after 100ms'), 100);
t.unref(); // process can exit before this fires

const id = setInterval(() => console.log('tick'), 1000);
setTimeout(() => clearInterval(id), 3500);

setImmediate(() => console.log('immediate'));
process.nextTick(() => console.log('nextTick'));

// promise-based delay
const delay = (ms) => new Promise(r => setTimeout(r, ms));
(async () => { await delay(500); console.log('done waiting'); })();

// non-drifting interval
function interval(fn, ms) {
  const tick = () => { fn(); setTimeout(tick, ms); };
  setTimeout(tick, ms);
}
