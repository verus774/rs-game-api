const express = require('express');
const app = express();
const config = require('./config');
const path = require('path');
const apiV1 = require('./routes/api-v1');

app.use(express.static(path.join(__dirname, config.serveStatic)));
app.use('/v1', apiV1);

module.exports = app;
