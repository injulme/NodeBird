import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // (이전상태, 액션) => 다음상태
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default: // 초기에 reducer에 접근할 때 default로 들어오는데 이때 state를 리턴해주지 않으면 초기값이 없어 에러가 남
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
