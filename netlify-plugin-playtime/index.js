module.exports = {
  onBuild: async ({ utils: { build, status, cache, run, git } }) => {
    await run.command('npm run client-install');
    await run.command('npm run client-build')
  }
};