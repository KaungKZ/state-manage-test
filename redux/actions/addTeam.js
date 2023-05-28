import { ADD_TEAM } from "../types";

const addTeam = (data) => (dispatch) => {
  dispatch({
    type: ADD_TEAM,
    data,
  });
};

export default addTeam;
