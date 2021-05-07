const userService = require("../../src/user/user.service");

const getUsers = async usernames => {
  if (!usernames.length) return;
  return userService.getUsersByUsername({usernames});
};
// TODO, use one call for both users and the current message
const messageWithAttachedUser = async ({message, username}) => {
  const user = await userService.getUserByUsername(username);

  return {
    message,
    timeStamp: new Date(),
    username: user.username,
    avatar: user.avatar
  };

};

module.exports = { getUsers, messageWithAttachedUser };