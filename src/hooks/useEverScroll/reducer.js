import * as A from './actions';

const reducer = (state, action) => {
  const switchObj = {
    [A.STACK_DATA]: () => ({...state, data: state.data.concat(action.data)}),
    [A.FETCHING_DATA]: () => ({ ...state, fetching: action.fetching })
  };
  return (switchObj[action.type] || (() => state))();
};
export default reducer;