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

module.exports = action => payload => state => ({

  [ADD_USER]: () => {
    // console.log('ADD_USER: ', state);
    return { ...state,
      users: {...state.users,
        [payload.socket_id]: Object.assign({},
          { socket_id: payload.socket_id },
          { user_id: payload.user_id },
          { current_room: undefined }
        )
      }
    };
  },

  [REMOVE_USER]: () => {

    // console.log('REMOVE_USER', state);

    const { socket_id } = payload;

    const prev = {...state};
    // console.log(users);

    delete prev.users[socket_id];

    return prev;
  },

  [ADD_USER_ROOM]: () => {

    return {
      ...state,
      users: {
        ...state.users,
        [payload.socket_id]: Object.assign({},
          { socket_id: payload.socket_id },
          { user_id: payload.user_id },
          { current_room: payload.room_id }
        )
      }
    };

  },

  [REMOVE_USER_ROOM]: () => {

    // console.log('REMOVE_USER_ROOM', state);

    const prev = {...state};
    const { users } = prev;

    const currentUser = users[payload.socket_id];

    return {
      ...prev,
      users: {
        ...users,
        [payload.socket_id]: {
          ...currentUser,
          ...{current_room: undefined}
        }
      }
    };

  },


  [CREATE_ROOM]: () => {

    // console.log('CREATE_ROOM', state);

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

    const roomId = state.rooms[payload.room_id];

    return { ...state,
      rooms: {
        ...state.rooms,
        [payload.room_id]: {
          ...state.rooms[payload.room_id],
          users: {
            ...roomId.users,
            [payload.user_id]: {
              ...Object.assign({},
                { socket_id: payload.socket_id },
                { username: payload.username },
                { user_id: payload.user_id }
              )
            }
          },
        }
      }
    };
  },

  [REMOVE_ROOM_USER]: () => {

    // console.log('REMOVE_ROOM_USER', state);

    const {users, messages} = state.rooms[payload.room_id];
    // console.log(users);
    delete users[payload.socket_id];
    // console.log('USER REMOVED FILTER FUNCTION' ,userRemoved);
    return {
      ...state,
      rooms: {
        [payload.room_id]: {
          ...{users},
          ...{messages}
        }
      }
    };
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

