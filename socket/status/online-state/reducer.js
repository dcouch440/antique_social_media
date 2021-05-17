const {
  USER_ONLINE,
  USER_OFFLINE,
} = require('./types');

module.exports = action => payload => state => ({

  [USER_ONLINE]: () => {
    const { socket_id, user_id } = payload;
    return {
      ...state,
      [socket_id]: user_id
    };
  },

  [USER_OFFLINE]: () => {
    const { socket_id } = payload;
    const prev = { ...state };
    delete prev[socket_id];
    return prev;
  },


} [action] || (() => state))();

