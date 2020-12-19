// Packages
const express = require('express');
const subdomain = require('express-subdomain');
// Apps
const apiApp = require('./api/app');
const ircApp = require('./irc/app');
const websiteApp = require('./website/app');

const app = express();
app.use(subdomain('api', apiApp));
app.use(subdomain('app', ircApp));
app.use(websiteApp);

module.exports = app;