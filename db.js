const environment = process.env.NODE_ENV || 'development';
// database config.
const knexfile = require('./knexfile');
// the current knex config that fits the environment
const knexConfig = knexfile[environment];
// handles ORM style relations.
const { Model } = require('objection');
// db setup.
const db = require('knex')(knexConfig);
// sets up ORM style relations.
Model.knex(db);

module.exports = db;
