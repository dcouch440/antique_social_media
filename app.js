const express = require('express');
const app = express();
const db = require('./db');
const cookieParser = require('cookie-parser');
const router = require('./src/router/index');
const cors = require('cors');
const { notFound, handleError } = require('./middleware/exceptions');

db;
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use(router);
app.use(notFound);
app.use(handleError);

module.exports = app;