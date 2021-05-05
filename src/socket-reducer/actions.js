const reducer = require('./reducer');
const store = require('./store');
const userService = require('../user/user.service');
const {
  ADD_USER, REMOVE_USER, UPDATE_ROOM_USERS,
  REMOVE_ROOM_USER, ADD_ROOM_MESSAGE, CREATE_ROOM
} = require('./types');

const userAdded = async payload => {
  const addUser = reducer(ADD_USER)(payload);

  await userService.changeOnlineState({id: payload.user_id, online: true})
    .catch(err => console.error(err));

  store(addUser);
};

const userRemoved = async payload => {
  const removeUser = reducer(REMOVE_USER)(payload);

  await userService.changeOnlineState({id: payload.user_id, online: false})
    .catch(err => console.error(err));

  store(removeUser);
};

const roomCreated = payload => {
  const roomToCreate = reducer(CREATE_ROOM)(payload);
  store(roomToCreate);
};

const roomUserAdded = payload => {
  const addUserToRoom = reducer(UPDATE_ROOM_USERS)(payload);
  store(addUserToRoom);
};

const roomUserRemoved = payload => {
  const removeUserFromRoom = reducer(REMOVE_ROOM_USER)(payload);
  store(removeUserFromRoom);
};

const roomMessageAdded = payload => {
  const addMessageToRoom = reducer(ADD_ROOM_MESSAGE)(payload);
  store(addMessageToRoom);
};

module.exports = {
  userAdded, userRemoved, roomUserAdded,
  roomUserRemoved, roomMessageAdded, roomCreated
};