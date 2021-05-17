const express = require('express');
const app = express();
const path = require('path');
require('./db');
const cors = require('cors');
const api = require('./src/api');
const cookieParser = require('cookie-parser');
const { notFound, handleError } = require('./middleware/exceptions');

app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use('/api', api);
app.use(notFound);
app.use(handleError);

api.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

module.exports = app;