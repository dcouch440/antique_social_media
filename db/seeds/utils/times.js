module.exports = (times) => act => Promise.all(Array(times).fill().map( async () => {
  return await act();
}));