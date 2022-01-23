import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      name: "",
      name: "",
      country: "",
      region: "",
      zone: "",
      church: "",
      password: "",
      passwordConfirm: "",
      phoneNumber: "",
      contactAddress: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    country: Joi.string().required().label("Country"),
    region: Joi.string().required().label("Region"),
    zone: Joi.string().required().label("Zone"),
    church: Joi.string().required().label("Church"),
    username: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(7).label("Password"),
    passwordConfirm: Joi.string().required().label("Confirm Password"),
    phoneNumber: Joi.string().required().min(11).label("Phone Number"),
    contactAddress: Joi.string().required().min(10).label("Contact Address"),
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.data.token, response.data.data);

      if (response) {
        const currentUserLocal = await auth.setUVDALocal();
        window.location = "/";
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        id="cell-report-form"
        name="cell-report-form"
        data-name="Cell Report"
        class="s-form__form__container"
        autocomplete="off"
      >
        <div class="s-flex-layout">
          <div class="s-flex-layout__flex">
            <div class="s-flex-layout__1-col is-s-mg-btm">
              {this.renderInput("name", "Name")}
            </div>
          </div>
          <div class="s-flex-layout__flex">
            <div class="s-flex-layout__1-col is-s-mg-btm">
              {this.renderInput("username", "Email")}
            </div>
          </div>
          <div class="s-flex-layout__flex">
            <div class="s-flex-layout__1-col is-s-mg-btm">
              {this.renderInput("phoneNumber", "Phone Number")}
            </div>
          </div>
          <div class="s-flex-layout__flex">
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput("country", "Country")}
            </div>
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput("region", "Region")}
            </div>
          </div>
          <div class="s-flex-layout__flex">
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput("zone", "Zone")}
            </div>
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput("church", "Church")}
            </div>
          </div>
          <div class="s-flex-layout__flex">
            <div class="s-flex-layout__1-col is-s-mg-btm">
              {this.renderInput("contactAddress", "Contact Address")}
            </div>
          </div>

          <div class="s-flex-layout__flex">
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput("password", "Password", "password")}
            </div>
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput(
                "passwordConfirm",
                "Confirm Password",
                "password"
              )}
            </div>
          </div>

          <div class="s-flex-layout__flex is--flex-mobile">
            <div></div>

            {this.renderButton("Send report")}
          </div>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
