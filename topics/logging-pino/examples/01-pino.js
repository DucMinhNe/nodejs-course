const pino = require('pino');

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  redact: ['req.headers.authorization', 'password', '*.password'],
  transport: process.env.NODE_ENV !== 'production' ? {
    target: 'pino-pretty',
    options: { translateTime: 'SYS:standard', colorize: true },
  } : undefined,
});

logger.info({ user: { id: 1 } }, 'user logged in');
logger.warn({ retry: 3 }, 'retrying');
logger.error({ err: new Error('boom') }, 'failed');

// child loggers for request-scoped context
function handler(req) {
  const log = logger.child({ reqId: req.id });
  log.info('handling');
}
