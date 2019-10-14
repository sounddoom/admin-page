import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserData } from "../actions/receive";
import { logout } from "../actions/logout";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { add } from "../actions/add";
import { deleteUser } from "../actions/delete";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import FieldInput from "../containers/FieldInput";

class UserList extends Component {
  // RECEIVE USER DATA
  componentDidMount() {
    const { getUserData } = this.props;
    getUserData();
  }
  // LOGOUT EVENT
  handleLogout = () => {
    const { logout } = this.props;
    logout();
  };
  // ADD USER EVENT
  handleSubmit = e => {
    const { add } = this.props;
    e.preventDefault();
    if (this.props.form.list.values) {
      const { email, password, name } = this.props.form.list.values;
      email && password && name && add({ email, password, name });
    }
  };
  // DELETE USER EVENT
  handleDelete = e => {
    const { deleteUser } = this.props;
    deleteUser(e.target.id);
  };
  render() {
    const { userData, isAuth } = this.props;
    const { handleLogout, handleSubmit, handleDelete } = this;
    return isAuth ? (
      <div>
        <Button variant="danger" onClick={handleLogout}>
          log out
        </Button>
        <Form className="App_form" onSubmit={handleSubmit}>
          <Field
            name="email"
            component={FieldInput}
            className="user-list_email"
            type="text"
            placeholder="email"
            autoComplete="off"
          />
          <Field
            name="password"
            component={FieldInput}
            className="user-list_password"
            type="password"
            placeholder="password"
            autoComplete="off"
          />
          <Field
            name="name"
            component={FieldInput}
            className="user-list_name"
            type="text"
            placeholder="name"
            autoComplete="off"
          />
          <Button id="button" type="submit" className='user-list_button'>
            Add user
          </Button>
        </Form>
        {/* USER LIST */}
        <Alert variant="success"> authorized user:</Alert>
        {userData.map((el, i) =>
          el.length ? (
            <Card id={i} key={i} className="user-list_card">
              <Card.Text className="align-self-center">
                email:{el[i].email}
              </Card.Text>
              <Card.Text className="align-self-center">
                name:{el[i].name}
              </Card.Text>
              <Button variant="secondary" id={i} onClick={handleDelete}>
                delete
              </Button>
            </Card>
          ) : (
            <Card id={i} key={i} className="user-list_card">
              <Card.Text className="align-self-center">
                email:{el.email}
              </Card.Text>
              <Card.Text className="align-self-center">
                name:{el.name}
              </Card.Text>
              <Button variant="secondary" id={i} onClick={handleDelete}>
                delete
              </Button>
            </Card>
          )
        )}
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

const mapStateToProps = state => ({
  userData: state.list.data,
  isAuth: state.login.isAuth,
  form: state.form
});
const mapDispatchToProps = {
  getUserData,
  logout,
  add,
  deleteUser
};

UserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

export default reduxForm({
  form: "list"
})(UserList);
