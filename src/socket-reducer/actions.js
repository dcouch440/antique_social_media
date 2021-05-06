const reducer = require('./reducer');
const store = require('./store');
const userService = require('../user/user.service');
const {
  ADD_USER,
  REMOVE_USER
} = require('./types');

const userAdded = payload => {
  const addUser = reducer(ADD_USER)(payload);

  userService.changeOnlineState({id: payload.user_id, online: true})
    .catch(err => console.error(err));

  store(addUser);
};

const userRemoved =  payload => {

  const removeUser = reducer(REMOVE_USER)(payload);

  userService.changeOnlineState({id: payload.user_id, online: false})
    .catch(err => console.error(err));

  store(removeUser);
};

const getUserId = payload => {
  return store()[payload.socket_id];
};

module.exports = {
  userAdded,
  userRemoved,
  getUserId
};