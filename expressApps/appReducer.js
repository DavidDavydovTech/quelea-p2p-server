// Packages
const express = require('express');
const subdomain = require('express-subdomain');
// Apps
const apiApp = require('./api/app');

const app = express();
app.use(subdomain('api', apiApp));

module.exports = app;