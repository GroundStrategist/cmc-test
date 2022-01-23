import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);

      // const { state } = this.props.location;
      // window.location = state ? state.from.pathname : "/";
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <form
        onSubmit={this.handleSubmit}
        id="login-report-form"
        name="login-report-form"
        data-name="Login Report"
        class="s-form__form__container"
        autocomplete="off"
      >
        <div class="s-flex-layout">
          <div class="s-flex-layout__flex">
            <div class="s-flex-layout__1-col is-s-mg-btm">
              {this.renderInput("email", "Email")}
            </div>
          </div>
        </div>
        <div class="s-flex-layout">
          <div class="s-flex-layout__1-col is-s-mg-btm">
            {this.renderInput("password", "Password", "password")}
          </div>
        </div>

        <div class="s-flex-layout__flex is--flex-mobile">
          <a href="#" class="s-link--flex is-s-mg-btm w-inline-block">
            <p class="is-txt--small"> Reset Password</p>
          </a>

          {this.renderButton("Login")}
        </div>
      </form>
    );
  }
}

export default LoginForm;
