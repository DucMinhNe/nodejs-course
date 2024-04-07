const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);

async function getCached(key, loader, ttl = 60) {
  const hit = await redis.get(key);
  if (hit) return JSON.parse(hit);
  const value = await loader();
  await redis.set(key, JSON.stringify(value), 'EX', ttl);
  return value;
}

// invalidate on write
async function updateUser(id, fields) {
  // await db.users.update(id, fields);
  await redis.del(`user:${id}`);
}
