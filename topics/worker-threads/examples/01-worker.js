const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  const w = new Worker(__filename, { workerData: { n: 1_000_000 } });
  w.on('message', (sum) => console.log('sum =', sum));
} else {
  let s = 0;
  for (let i = 0; i < workerData.n; i++) s += i;
  parentPort.postMessage(s);
}
