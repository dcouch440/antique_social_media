const reducer = require('./reducer');
const onlineState = require('./online-state');
const userService = require('../../../src/user/user.service');

const {
  USER_ONLINE,
  USER_OFFLINE
} = require('./types');

const userCameOnline = async payload => {
  try {
    const addUser = reducer(USER_ONLINE)(payload);
    await userService.changeOnlineState({ id: payload.user_id, online: true });

    onlineState(addUser);
  } catch (err) {
    console.error(err);
  }
};

const userWentOffline = async payload => {
  try {
    const removeUser = reducer(USER_OFFLINE)(payload);
    await userService.changeOnlineState({ id: payload.user_id, online: false });

    onlineState(removeUser);
  } catch (err) {
    console.error(err);
  }
};

const getUserIdBySocketId = payload => {
  return onlineState()[payload.socket_id];
};

module.exports = {
  userCameOnline,
  userWentOffline,
  getUserIdBySocketId
};