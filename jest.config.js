module.exports = {
  verbose: true,
  setupFiles: ['<rootDir>/jest.setup.js'],
  projects: [
    {
      testEnvironment: '<rootDir>/environment.js',
    }
  ]
};
