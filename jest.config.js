module.exports = {
  // Indicates whether each individual test should be reported during the run. All errors will also still be shown on the bottom after execution. Note that if there is only one test file being run it will default to true.
  verbose: true,
  // This option allows the use of a custom global setup module which exports an async function that is triggered once before all test suites. This function gets Jest's globalConfig object as a parameter.
  globalSetup: './test-setup/setup-test.js',
  // The test environment that will be used for testing. The default environment in Jest is a Node.js environment. If you are building a web app, you can use a browser-like environment through jsdom instead.
  globalTeardown: './test-setup/teardown-test.js',
  testEnvironment: 'node',
};
