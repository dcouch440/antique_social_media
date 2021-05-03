const express = require('express');
const app = express();
require('./db');
const cors = require('cors');
const router = require('./src/router/index');
const cookieParser = require('cookie-parser');
const { notFound, handleError } = require('./middleware/exceptions');

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use(router);
app.use(notFound);
app.use(handleError);

module.exports = app;