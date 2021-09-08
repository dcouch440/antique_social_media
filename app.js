const express = require('express');
const app = express();
const path = require('path');
require('./db');
const cors = require('cors');
const api = require('./src/api');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const exceptions = require('./middleware/exceptions');

// serves static files such as images, CSS files, and JavaScript files.
app.use(express.static(path.resolve(__dirname, './client/build')));
// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(cors({ credentials: true, origin: 'http://localhost:3001' }));
// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json({ limit: '10mb' }));
// This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ limit: '10mb', extended: true }));
// Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.
app.use(cookieParser());
// writes request logs to the consol.
app.use(morgan('dev'));
// connection to src - must come before exceptions.
app.use('/api', api);
// throws exceptions if there is an error in API.
app.use(exceptions);

// catch all to send request to react.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

module.exports = app;
