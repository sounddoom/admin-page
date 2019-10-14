import instance from "../api";
import {
  USER_LIST_ERRORED,
  USER_LIST_DELETE,
  USER_LIST_LOADING
} from "./actions";

// DELETE USER
export const deleteUser = id => dispatch => {
  dispatch({ type: USER_LIST_LOADING });
  instance
    // SEND USER ID TO MOCK
    .delete("/api/v1/users", { id: id })
    .then(data => {
      // RETURN NEW DATA TO STORE
      dispatch({ type: USER_LIST_DELETE, payload: data.data });
    })
    .catch(() => dispatch({ type: USER_LIST_ERRORED }));
};
