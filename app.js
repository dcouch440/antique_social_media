const express = require('express');
const app = express();
const db = require('./db');
const router = require('./src/routes/index');
const { notFound, handleError } = require('./middleware/exceptions');
const { Model } = require('objection');
Model.knex(db)


app.use(express.json());
app.use(router);
app.use(notFound)
app.use(handleError)

module.exports = app;