import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import "./assets/App.css";
import "./assets/userlist.css";
import "./assets/loginform.css";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./components/App";
import { Router } from "react-router-dom";
import history from "./history";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
