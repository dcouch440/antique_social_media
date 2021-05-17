module.exports = {
  onPostBuild: async ({ utils: { build, status, cache, run, git } }) => {
    await run.command('cd client && npm install');
    await run.command('cd client && npm run build');
  }
};