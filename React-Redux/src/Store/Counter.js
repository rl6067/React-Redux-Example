const incrementCountType = 'INCREMENT_COUNT';
const decrementCountType = 'DECREMENT_COUNT';
const addTenCountType = 'ADD_TEN';
const initialState = { count: 0 };

export const actionCreators = {
  increment: () => ({ type: incrementCountType }),
  decrement: () => ({ type: decrementCountType }),
  addTen: () => ({ type: addTenCountType })
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === incrementCountType) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === decrementCountType) {
    return { ...state, count: state.count - 1 };
  }

  if (action.type === addTenCountType) {
    return { ...state, count: state.count + 10 };
  }
  return state;
};
