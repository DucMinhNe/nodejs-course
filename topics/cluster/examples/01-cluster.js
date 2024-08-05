const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isPrimary) {
  for (let i = 0; i < os.cpus().length; i++) cluster.fork();
  cluster.on('exit', () => cluster.fork());
} else {
  http.createServer((req, res) => res.end(`pid ${process.pid}`)).listen(3000);
}
