import { combineReducers } from "redux";
// import { USER_LOGOUT } from "../types";
import loading from "./loading";
import team from "./teams";
import user from "./user";
import { HYDRATE } from "next-redux-wrapper";

// combine all reducers.
const appReducer = combineReducers({
  loading,
  team,
  user,
});

const rootReducer = (state, action) => {
  let newState = state;

  // clear all data in redux store to initial.
  // if (action.type === USER_LOGOUT) {
  //   newState = undefined;
  // }

  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.data,
    };

    return nextState;
  }

  return appReducer(newState, action);
};

export default rootReducer;
