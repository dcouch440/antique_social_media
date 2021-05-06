const reducer = require('./reducer');
const store = require('./store');
const userService = require('../user/user.service');
const {
  ADD_USER,
  REMOVE_USER,
  UPDATE_ROOM_USERS,
  REMOVE_ROOM_USER,
  ADD_ROOM_MESSAGE,
  CREATE_ROOM,
  ADD_USER_ROOM,
  REMOVE_USER_ROOM,
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

const userCurrentRoomAdded = payload => {
  const userRoomAdded = reducer(ADD_USER_ROOM)(payload);
  return store(userRoomAdded);
};

const userCurrentRoomRemoved = payload => {
  const userRoomDeleted = reducer(REMOVE_USER_ROOM)(payload);
  return store(userRoomDeleted);
};

const getPrevUser = payload => {
  const {users} = store();

  const { user_id, session_id } = payload;
  const userEntries = Object.entries(users);

  const user = userEntries.filter(([,value]) => {
    return value.user_id === users[session_id][user_id];
  });

  return user;
};

const getUserFromSocketId = payload => {
  const { users } = store();
  const { socket_id } = payload;

  return users[socket_id];
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
  userAdded,
  userRemoved,
  roomUserAdded,
  roomUserRemoved,
  roomMessageAdded,
  roomCreated,
  userCurrentRoomAdded,
  userCurrentRoomRemoved,
  getPrevUser,
  getUserFromSocketId
};