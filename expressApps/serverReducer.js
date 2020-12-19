// Packages
const express = require('express');
const subdomain = require('express-subdomain');
// Apps
const apiApp = require('./quelea-p2p-server-api/index');
const ircApp = require('./quelea-p2p-server-irc/index');
const websiteApp = require('./quelea-p2p-server-website/index');

const app = express();
app.use(subdomain('api', apiApp));
app.use(subdomain('app', ircApp));
app.use(websiteApp);

module.exports = app;