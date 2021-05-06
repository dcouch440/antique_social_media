const createStore = () => {
  let currentState = {};

  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };

};

const store = createStore();

module.exports = store;