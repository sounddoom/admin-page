import {
  USER_LIST_ERRORED,
  USER_LIST_SUCCESS,
  USER_LIST_LOADING
} from "./actions";
import instance from "../api";

// RECEIVE USER LIST
export const getUserData = () => dispatch => {
  dispatch({ type: USER_LIST_LOADING });
  instance
    .get("/api/v1/users")
    .then(data => {
      // SEND USER DATA TO REDUCER
      dispatch({ type: USER_LIST_SUCCESS, payload: data.data });
    })
    .catch(() => dispatch({ type: USER_LIST_ERRORED }));
};
