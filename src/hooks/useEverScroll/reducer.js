import * as A from './actions';

const reducer = (state, action) => ({

  [A.STACK_DATA]: () => ({...state, data: state.data.concat(action.data)}),
  [A.FETCHING_DATA]: () => ({ ...state, fetching: action.fetching })

}[action.type] || (() => state))();

export default reducer;