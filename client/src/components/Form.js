import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/login";
import { reduxForm, Field } from "redux-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FieldInput from "../containers/FieldInput";

class LogiForm extends Component {
  // LOGIN EVENT
  handleSubmit = e => {
    e.preventDefault();
    if (this.props.form.post.values) {
      const { email, password } = this.props.form.post.values;
      const { login, history } = this.props;
      login(email, password, history);
    }
  };
  render() {
    const { handleSubmit } = this;
    return (
      <Form className="App_form" onSubmit={handleSubmit}>
        <Field
          name="email"
          component={FieldInput}
          className="form_email"
          type="text"
          placeholder="email"
          autoComplete="off"
          size="lg"
        />
        <Field
          name="password"
          component={FieldInput}
          className="form_password"
          type="password"
          placeholder="password"
          autoComplete="off"
          size="lg"
        /> 
        <Button iclassNamed="form_button" type="submit" size="lg">
          submit
        </Button>
      </Form>
    );
  }
}
const mapStateToProps = state => ({
  form: state.form
});
const mapDispatchToProps = {
  login
};
LogiForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogiForm);

export default reduxForm({
  form: "post"
})(LogiForm);
