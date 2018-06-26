const express = require('express');
const app = express();
const config = require('./config');
const path = require('path');

app.use(express.static(path.join(__dirname, config.serveStatic)));

app.get('/', (req, res) => {
    res.end('test');
});

module.exports = app;
