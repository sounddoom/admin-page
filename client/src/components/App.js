import React, { Component } from "react";
import LogiForm from "./Form";
import UserList from "./UserList";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }
  connecToServer() {
    fetch('/');
  }

  componentDidMount() {
    this.connecToServer();
  }
  render() {
    return (
      <Switch>
        <Route path="/" exact component={LogiForm} />
        <Route path="/userlist" component={UserList} />
      </Switch>
    );
  }
}

export default App;
