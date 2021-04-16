const db = require('../db');

const addToTable = async ({table , obj}) => parseInt(
  await db(table).insert(obj).returning('id')
);

module.exports = addToTable;