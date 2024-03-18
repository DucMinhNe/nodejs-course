const session = require('express-session');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, secure: true, sameSite: 'lax', maxAge: 24*3600*1000 },
}));

app.post('/login', (req, res) => {
  // ... validate creds
  req.session.regenerate((err) => {
    if (err) return res.status(500).end();
    req.session.userId = 42;
    res.json({ ok: true });
  });
});

app.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.json({ ok: true });
  });
});

app.listen(3000);
