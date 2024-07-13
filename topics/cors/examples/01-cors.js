const express = require('express');
const cors = require('cors');
const app = express();

const WHITELIST = ['https://app.example.com', 'https://admin.example.com'];

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || WHITELIST.includes(origin)) cb(null, true);
    else cb(new Error('blocked by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.get('/api/me', (req, res) => res.json({ ok: true }));
app.listen(3000);
