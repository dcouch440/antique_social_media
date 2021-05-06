const {
  ADD_USER, REMOVE_USER, UPDATE_ROOM_USERS,
  REMOVE_ROOM_USER ,ADD_ROOM_MESSAGE, CREATE_ROOM
} = require('./types');

module.exports = action => payload => state => ({

  [ADD_USER]: () => {
    return { ...state,
      users: {
        ...state.users,
        [payload.socket_id]: payload.user_id
      }
    };
  },

  [REMOVE_USER]: () => {
    const prev = {...state};
    console.log(prev);
    delete prev.users[payload.socket_id];
    console.log(prev);
    return prev;
  },

  [CREATE_ROOM]: () => {
    return {
      ...state,
      rooms: {
        ...state.room,
        [payload.room_id]: {
          users: {},
          messages: []
        }
      }
    };
  },

  [UPDATE_ROOM_USERS]: () => {

    return { ...state,
      rooms: {
        ...state.rooms,
        [payload.room_id]: {
          ...state.rooms[payload.room_id],
          users: {
            ...state.rooms[payload.room_id].users,
            [payload.user_id]: payload.username
          },
        }
      }
    };
  },

  [REMOVE_ROOM_USER]: () => {
    const prev = { ...state};
    delete prev.rooms[payload.room_id].users[payload.user_id];
    return prev;
  },

  [ADD_ROOM_MESSAGE]: () => {
    const messages = state.rooms[payload.room_id].messages;
    const l = messages.length;
    const limitedMessages = messages.splice(l - 99 , l);

    return {
      ...state,
      rooms: {
        ...state.rooms,
        messages: [
          ...limitedMessages,
          payload.message
        ]
      }
    };
  }

} [action] || (() => state))();

