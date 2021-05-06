const createStore = () => {
  let currentState = {rooms: {}, users: {}};

  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };

};

const store = createStore();

module.exports = store;