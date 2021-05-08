const reducer = require('./reducer');
const onlineState = require('./online-state');
const userService = require('../../../src/user/user.service');

const {
  USER_ONLINE,
  USER_OFFLINE
} = require('./types');

const userCameOnline = async payload => {
  const addUser = reducer(USER_ONLINE)(payload);

  await userService.changeOnlineState({ id: payload.user_id, online: true })
    .catch(err => console.error(err));

  onlineState(addUser);
};

const userWentOffline = async payload => {

  const removeUser = reducer(USER_OFFLINE)(payload);

  await userService.changeOnlineState({ id: payload.user_id, online: false })
    .catch(err => console.error(err));

  onlineState(removeUser);
};

const getUserIdBySocketId = payload => {
  return onlineState()[payload.socket_id];
};

module.exports = {
  userCameOnline,
  userWentOffline,
  getUserIdBySocketId
};