const db = require('../db');

module.exports = async ({table , obj}) => parseInt(
  await db(table).insert(obj).returning('id')
);
