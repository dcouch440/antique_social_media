module.exports = times => act => Promise.all(Array(times).fill().map(async (u ,i) => {
  return act(i);
}));