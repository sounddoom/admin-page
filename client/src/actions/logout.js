import { USER_LIST_LOGOUT } from "../actions/actions";
// LOGOUT USER
export const logout = () => {
  // REMOVE TOKEN FROM LOCAL STORAGE
  localStorage.removeItem("token");
  return { type: USER_LIST_LOGOUT };
};
