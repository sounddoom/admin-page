import instance from "../api";
import { USER_LIST_ERRORED, USER_LIST_ADD, USER_LIST_LOADING } from "./actions";

// ADD USER
export const add = user => dispatch => {
  dispatch({ type: USER_LIST_LOADING });
  instance
    .post("/api/v1/users", {
      user
    })
    .then(data => {
      // SEND USER DATA TO REDUCER
      dispatch({ type: USER_LIST_ADD, payload: data.data });
    })
    .catch(() => dispatch({ type: USER_LIST_ERRORED }));
};
