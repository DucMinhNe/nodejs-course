require('dotenv').config();
const { z } = require('zod');

const EnvSchema = z.object({
  PORT: z.string().transform(Number).default('3000'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
});

const env = EnvSchema.parse(process.env);
console.log('boot env:', { ...env, JWT_SECRET: '[redacted]' });

module.exports = env;
