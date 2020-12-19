// ENV variables:
const { PRIVATE_KEY, CERTIFICATE, PORT} = process.env;
// Imports
const fs = require('fs');
const path = require('path');
const https = require('https');
const cert = fs.readFileSync( path.join(__dirname, '_secrets', CERTIFICATE), 'utf-8');
const key = fs.readFileSync( path.join(__dirname, '_secrets', PRIVATE_KEY), 'utf-8');

const server = https.createServer({cert, key}, /* Add the Express app here */);

server.listen(PORT);