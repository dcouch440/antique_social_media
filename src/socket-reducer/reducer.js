const {
  ADD_USER,
  REMOVE_USER,
} = require('./types');

module.exports = action => payload => state => ({

  [ADD_USER]: () => {

    const { socket_id, user_id } = payload;
    return {
      ...state,
      [socket_id]: user_id
    };

  },

  [REMOVE_USER]: () => {

    const { socket_id } = payload;

    const prev = {...state};
    delete prev[socket_id];

    return prev;
  },


} [action] || (() => state))();

