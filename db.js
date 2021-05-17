const knexfile = require('./knexfile');
const knexConfig = knexfile['test'];
const { Model } = require('objection');
const db = require('knex')(knexConfig);
Model.knex(db);
module.exports = db;