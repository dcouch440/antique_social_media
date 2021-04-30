const express = require('express');
const app = express();
const db = require('./db');
const cookieParser = require('cookie-parser');
const router = require('./src/router/index');
const cors = require('cors');
const { notFound, handleError } = require('./middleware/exceptions');
const { Model } = require('objection');
// const fileupload = require('express-fileupload');

Model.knex(db);

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use(router);
app.use(notFound);
app.use(handleError);
// app.use(fileupload({useTempFiles: true}))

module.exports = app;