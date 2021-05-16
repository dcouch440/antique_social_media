const express = require('express');
const app = express();
require('./db');
const path = require('path');
const cors = require('cors');
const router = require('./src/router');
const cookieParser = require('cookie-parser');
const { notFound, handleError } = require('./middleware/exceptions');

app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use('/api', router);
app.use(notFound);
app.use(handleError);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

module.exports = app;