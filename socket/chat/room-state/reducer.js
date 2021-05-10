const {
  USER_LEAVE_ROOM,
  USER_JOIN_ROOM,
  CREATE_ROOM
} = require('./types');

module.exports = action => payload => state => ({

  [CREATE_ROOM]: () => {
    const { roomId } = payload;
    return {
      ...state,
      [roomId]: []
    };
  },

  [USER_JOIN_ROOM]: () => {
    const { roomId, username } = payload;
    return {
      ...state,
      [roomId]: [...state[roomId], { username }]
    };
  },

  [USER_LEAVE_ROOM]: () => {
    const { roomId, username } = payload;
    const prev = { ...state };
    const newArray = prev[roomId];
    const filteredArray = newArray.filter(user => user.username !== username);
    return {
      ...prev,
      [roomId] : filteredArray
    };
  },


} [action] || (() => state))();

