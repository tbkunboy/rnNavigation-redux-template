import { INCREMENT, DECREMENT } from "../ActionTypes";

export const onPlus = () => {
  return {
    type: INCREMENT
  };
};
export const onMinus = () => {
  return {
    type: DECREMENT
  };
};
