import { countAction } from "../reducers/userReducers";

export const changeCount = (type) => (dispatch, getState) => {
  const { count } = getState();

  if (type === "DECREASE") {
    dispatch(countAction.countChange(count.number + 1));
  } else {
    dispatch(countAction.countChange(count.number - 1));
  }
};
