const reducer = require('./reducer');
const store = require('./store');
const userService = require('../user/user.service');

const {
  USER_ONLINE,
  USER_OFFLINE
} = require('./types');

const userCameOnline = async payload => {
  const addUser = reducer(USER_ONLINE)(payload);

  await userService.changeOnlineState({id: payload.user_id, online: true})
    .catch(err => console.error(err));

  store(addUser);
};

const userWentOffline =  async payload => {

  const removeUser = reducer(USER_OFFLINE)(payload);

  await userService.changeOnlineState({id: payload.user_id, online: false})
    .catch(err => console.error(err));

  store(removeUser);
};

const getUserIdBySocketId = payload => {
  return store()[payload.socket_id];
};

module.exports = {
  userCameOnline,
  userWentOffline,
  getUserIdBySocketId
};