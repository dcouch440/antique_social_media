module.exports = user_id => {
  const env = process.env.NODE_ENV;
  if (env === 'test') { `_TEST_AVATAR_${user_id}_`; }
  if (env === 'development') { `_AVATAR_${user_id}_`; }
  if (env === 'production') { `__AVATAR_${user_id}__`; }
};