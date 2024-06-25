// debug pkg
const debug = require('debug');
const log = debug('app:server');
const dbLog = debug('app:db');

log('starting up...');
dbLog('connecting to db');

// run with: DEBUG=app:* node app.js
// or: DEBUG=app:db node app.js

// catch lost promises
process.on('unhandledRejection', (reason) => {
  console.error('unhandledRejection:', reason);
  process.exit(1);
});
process.on('uncaughtException', (err) => {
  console.error('uncaughtException:', err);
  process.exit(1);
});
