const knexfile = require('./knexfile');
const knexConfig = knexfile[process.env.NODE_ENV];
module.exports = require('knex')(knexConfig);