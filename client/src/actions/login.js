import instance from "../api";
import { LOGIN_PROCESSING, LOGIN_SUCCEED, LOGIN_FAILED } from "./actions";

// LOGIN USER
export const login = (email, password ,history) => dispatch => {
  dispatch({ type: LOGIN_PROCESSING });
  instance
    .post("/auth/v1/sign-in", {
      email,
      password
    })
    .then(data => {
      const { token } = data.data
      dispatch({ type: LOGIN_SUCCEED });
      // ADD TOKEN TO LOCAL STORAGE
      localStorage.setItem("token", token);
      // CHANGE PAGE TO USER LIST
      history.push("/userlist");
    })
    .catch(() => dispatch({ type: LOGIN_FAILED }));
};
