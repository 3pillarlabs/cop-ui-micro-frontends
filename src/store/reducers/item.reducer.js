export const ItemReducer = (state = initialState, action) => {
  if (action.type === 'ADD_ITEM')
    return {
      ...state,
      items: [action.payload, ...state.items],
    };
  return state;
};

var initialState = {
  items: [],
};
