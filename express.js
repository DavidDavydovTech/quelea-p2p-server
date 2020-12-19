// Packages
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');

const app = express();
app.use([cookieParser, cors, compression]);

module.exports = app;