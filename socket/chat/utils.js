const userService = require("../../src/user/user.service");

const getUsers = async usernames => {
  console.log('lol');
  if (!usernames.length) return;
  return userService.getUsersByUsername({usernames});
};

module.exports = { getUsers };