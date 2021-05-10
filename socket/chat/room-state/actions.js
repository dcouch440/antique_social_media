const reducer = require('./reducer');
const roomState = require('././user-state');

const {
  USER_LEAVE_ROOM,
  USER_JOIN_ROOM,
  CREATE_ROOM,
} = require('./types');

const createRoom = payload => {
  const roomCreated = reducer(CREATE_ROOM)(payload);
  roomState(roomCreated);
};

const roomCreatedIfNoExist = payload => {
  const { roomId } = payload;
  if (!roomState()[roomId]) {
    createRoom({ roomId: payload });
  }
};

const userJoinedRoom = async payload => {
  const addUser = reducer(USER_JOIN_ROOM)(payload);
  roomState(addUser);
};

const userLeftRoom = async payload => {
  const removeUser = reducer(USER_LEAVE_ROOM)(payload);
  roomState(removeUser);
};

const getUsersInRoom = roomId => {
  return roomState()[roomId];
};

module.exports = {
  userJoinedRoom,
  userLeftRoom,
  getUsersInRoom,
  roomCreatedIfNoExist
};