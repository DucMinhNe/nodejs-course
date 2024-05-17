const express = require('express');
const app = express();

// logging middleware
app.use((req, _res, next) => {
  console.log(req.method, req.url);
  next();
});

// auth middleware
function requireAuth(req, res, next) {
  if (!req.headers.authorization) return res.status(401).end();
  next();
}

app.get('/secret', requireAuth, (req, res) => res.json({ ok: true }));

// error middleware (4 args!)
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

app.listen(3000);
