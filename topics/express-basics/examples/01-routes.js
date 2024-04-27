const express = require('express');
const app = express();

app.use(express.json());

app.get('/users/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'demo' });
});

app.post('/users', (req, res) => {
  res.status(201).json({ ...req.body, id: Date.now() });
});

app.listen(3000);
