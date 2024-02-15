const helmet = require('helmet');
const express = require('express');
const app = express();

app.use(helmet());

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'https://cdn.jsdelivr.net'],
    imgSrc: ["'self'", 'data:', 'https:'],
  },
}));

app.listen(3000);
