const addItemType = 'ADD_ITEM';
const initialState = { list: [], nextId: 0 };

export const actionCreators = {
  addItem: () => ({ type: addItemType }),
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === addItemType) {
    let value = document.getElementById('listInput').value;
    const item = ({'value' : value, 'id': state.nextId});
    document.getElementById('listInput').value = "";
    return { ...state,  list:[...state.list, item], nextId: state.nextId  + 1  };
    
  }

  return state;
};
