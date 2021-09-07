const express = require('express');
const app = express();
const path = require('path');
require('./db');
const cors = require('cors');
const api = require('./src/api');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const exceptions = require('./middleware/exceptions');

app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(cors({ credentials: true, origin: 'http://localhost:3001' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use('/api', api);
app.use(exceptions);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

module.exports = app;
