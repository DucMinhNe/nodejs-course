// reading env vars + argv
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const [, , ...args] = process.argv;

console.log({ port, env, args });

process.on('SIGTERM', () => {
  console.log('shutting down');
  process.exit(0);
});
