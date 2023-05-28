import { ADD_TEAM } from "../types";

const initialState = {
  teams: [],
};

const team = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEAM:
      return action.data;
    default:
      return state;
  }
};

export default team;
