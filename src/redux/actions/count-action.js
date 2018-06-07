/*
 * 数量增加
 * @param count 数量
 */
export const increaseAction = (count) => {
  const actionToken = {
    type: 'INCREASE_COUNT',
    payload: count,
  };
  return (dispatch, getState) => {
    dispatch(actionToken);
  };
};
