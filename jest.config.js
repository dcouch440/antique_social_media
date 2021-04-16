// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

  globalSetup: './db/test/test-setup.js',

  globalTeardown: './db/test/test-teardown.js',

  testEnvironment: 'node',

};
