const knexfile = require('./knexfile');
const knexConfig = knexfile[process.env.NODE_ENV];
const { Model } = require('objection');
const db = require('knex')(knexConfig);
Model.knex(db);
module.exports = db;