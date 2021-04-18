afterEach(async () => {
  try
  {
    await global.knex.raw('TRUNCATE TABLE "user" CASCADE');
    await global.knex.raw('TRUNCATE TABLE antique CASCADE');
  }
  catch (err)
  {
    console.error(err);
  }
})