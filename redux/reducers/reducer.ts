import CONSTS from "../../constants/consts";
import { Action, IntialState } from "../../types/types";

const intialState: IntialState = {
  posts: [],
};

const reducer = (state: IntialState = intialState, action: Action): IntialState => {
  switch (action.type) {
    case CONSTS.GET_POSTS: {
      return { ...state, posts: action.data };
    }
    default:
      return state;
  }
};

export default reducer;
