// classic leak: unbounded cache
const cache = new Map();
async function get(id) {
  if (cache.has(id)) return cache.get(id);
  const value = await db.findById(id);
  cache.set(id, value); // NEVER evicts -- leaks under high cardinality
  return value;
}

// fix with LRU
const { LRUCache } = require('lru-cache');
const lru = new LRUCache({ max: 1000 });

// monitoring
setInterval(() => {
  const m = process.memoryUsage();
  console.log({ heapUsed: m.heapUsed / 1024 ** 2 | 0, rss: m.rss / 1024 ** 2 | 0 });
}, 5000);
