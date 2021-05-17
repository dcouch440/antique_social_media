module.exports = antique_id => {
  const env = process.env.NODE_ENV;
  if (env === 'test') {
    return `_TEST_ANTIQUE_${antique_id}_`;
  }
  if (env === 'development') {
    return `_ANTIQUE_${antique_id}_`;
  }
  if (env === 'production') {
    return `__ANTIQUE_${antique_id}__`;
  }
};