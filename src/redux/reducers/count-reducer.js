const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // 数量增加
    case 'INCREASE_COUNT':
      return Object.assign({}, state, {
        count: action.payload,
      });

    default:
      return state;
  }
};
