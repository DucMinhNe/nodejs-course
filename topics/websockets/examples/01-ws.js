const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

function broadcast(data, except) {
  for (const c of wss.clients) {
    if (c !== except && c.readyState === WebSocket.OPEN) c.send(data);
  }
}

wss.on('connection', (ws) => {
  ws.send('welcome');
  ws.on('message', (msg) => broadcast(msg.toString(), ws));
  ws.on('close', () => console.log('client left'));
});

// heartbeat
setInterval(() => {
  for (const c of wss.clients) {
    if (!c.isAlive) return c.terminate();
    c.isAlive = false;
    c.ping();
  }
}, 30000);
