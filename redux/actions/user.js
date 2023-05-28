import { UPDATE_USER } from "../types";

const updateUser = (data) => (dispatch) => {
  dispatch({
    type: UPDATE_USER,
    data,
  });
};

export default updateUser;
