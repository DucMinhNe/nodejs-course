const express = require('express');
const path = require('path');
const app = express();

app.get('/json', (req, res) => res.json({ ok: true }));
app.get('/status', (req, res) => res.status(201).json({ created: true }));
app.get('/text', (req, res) => res.type('text/plain').send('hello'));
app.get('/redirect', (req, res) => res.redirect(301, '/'));
app.get('/file', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'README.md'));
});
app.get('/download', (req, res) => {
  res.download(path.resolve(__dirname, 'README.md'), 'readme.md');
});

app.listen(3000);
