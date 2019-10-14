import { login } from "./login";
import { list } from "./list";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  login,
  form: formReducer,
  list
});
