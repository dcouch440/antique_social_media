
module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  projects: [
    {
      testEnvironment: '<rootDir>/environment.js',
    }
  ]
};
