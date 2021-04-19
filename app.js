const express = require('express');
const app = express();
const db = require('./db');
const router = require('./src/router/index');
const { notFound, handleError } = require('./middleware/exceptions');
const { Model } = require('objection');
// const fileupload = require('express-fileupload');

Model.knex(db)

// app.use(fileupload({useTempFiles: true}))
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(router);
app.use(notFound);
app.use(handleError);

module.exports = app;