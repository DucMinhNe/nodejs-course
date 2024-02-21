const rateLimit = require('express-rate-limit');
const express = require('express');
const app = express();

app.set('trust proxy', 1);

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'too many login attempts' },
});

app.post('/login', loginLimiter, (req, res) => res.json({ ok: true }));
app.listen(3000);
