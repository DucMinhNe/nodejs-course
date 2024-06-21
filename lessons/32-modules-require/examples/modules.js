// math.js
function add(a, b) { return a + b; }
function mul(a, b) { return a * b; }
module.exports = { add, mul };

// --- index.js ---
const { add, mul } = require('./math');
console.log(add(2, 3), mul(2, 3));

// single export
// logger.js
module.exports = function log(msg) { console.log('[log]', msg); };
// const log = require('./logger');

// core + npm modules
const path = require('path');       // built-in
// const express = require('express'); // npm package
