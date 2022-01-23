import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";

class ReportForm extends Form {
  state = {
    data: {
      totalCellMembers: "",
      password: "",
      name: "",
      totalCellMembers: "",
      totalCellAttendance: "",
      anyNewConverts: "",
      totalFirstTimers: "",
      haveYouUploadedFirstTimersToSoulTracker: "",
      totalCellOffering: "",
      coordinatedBy: "",
      worshipCoordinator: "",
      numberOfTestimonies: "",
      exaltationBy: "",
    },
    errors: {},
  };

  schema = {
    totalCellMembers: Joi.number().required().label("Total Cell Members"),
    totalCellAttendance: Joi.number().required().label("Total Cell Attendance"),
    anyFirstTimers: Joi.string().required().label("Any First Timers"),
    anyNewConverts: Joi.string().required().label("Any New Converts"),
    totalFirstTimers: Joi.number().required().label("Total First Timers"),
    totalNewConverts: Joi.number().required().label("Total New Converts"),

    haveYouUploadedFirstTimersToSoulTracker: Joi.string()
      .required()
      .label("Have You Uploaded First Timers To Soul Tracker"),
    totalCellOffering: Joi.number().required().label("Total Cell Offering"),
    coordinatedBy: Joi.string().required().label("Coordinated By"),
    openingPrayerBy: Joi.string().required().label("Opening Prayer By"),
    worshipCoordinator: Joi.string().required().label("Worship Coordinator"),
    numberOfTestimonies: Joi.string().required().label("Number Of Testimonies"),
    exaltationBy: Joi.string().required().label("Exaltation By"),
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
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
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput(
                "totalCellMembers",
                "Total Cell Members",
                "number"
              )}
            </div>
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput(
                "totalCellAttendance",
                "Total Cell Attendance",
                "number"
              )}
            </div>
          </div>
          <div class="s-flex-layout__flex">
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput("anyFirstTimers", "Any First Timers")}
            </div>
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput("anyNewConverts", "Any New Converts")}
            </div>
          </div>
          <div class="s-flex-layout__flex">
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput(
                "totalFirstTimers",
                "Total First Timers",
                "number"
              )}
            </div>
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput(
                "totalNewConverts",
                "Total New Converts",
                "number"
              )}
            </div>
          </div>
          <div class="s-flex-layout__flex">
            <div class="s-flex-layout__1-col ">
              {this.renderInput(
                "haveYouUploadedFirstTimersToSoulTracker",
                "Have You Uploaded First Timers To Soul Tracker"
              )}
            </div>
          </div>

          <div class="devider--hr"></div>

          <div class="s-flex-layout__flex">
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput(
                "totalCellOffering",
                "Total Cell Offering",
                "number"
              )}
            </div>
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput("coordinatedBy", "Coordinated By")}
            </div>
          </div>

          <div class="s-flex-layout__flex">
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput("worshipCoordinator", "Worship Coordinator")}
            </div>
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput("openingPrayerBy", "Opening Prayer By")}
            </div>
          </div>

          <div class="s-flex-layout__flex">
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput(
                "numberOfTestimonies",
                "Number Of Testimonies",
                "number"
              )}
            </div>
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {this.renderInput("exaltationBy", "Exaltation By")}
            </div>
          </div>

          <div class="s-flex-layout__flex">
            <div class="s-flex-layout__2-col is-s-mg-btm">
              <p>
                <span class="is-txt--small">
                  Send offering to the following account:
                  <br />
                </span>
                <span class="is-txt--small is-txt--highlighted">
                  PARALLAX BANK, CHRIST EMBASSY CHURCH
                  <br />
                </span>
                <span class="is-txt--highlighted is-txt--blue">
                  00992032392
                </span>{" "}
                <br />
                <span class="is-txt--small">
                  and upload Proof of Payment here
                </span>
              </p>
            </div>
            <div class="s-flex-layout__2-col is-s-mg-btm">
              {/* {this.renderInput("offeringReceipt", "Offering Receipt", "file")} */}
            </div>
          </div>
          <div class="s-flex-layout__flex is--flex-mobile">
            <a href="#" class="s-link--flex is-s-mg-btm w-inline-block">
              <img src="images/Globe.svg" loading="lazy" alt="" />
              <p class="paragraph-9">Sign in instead</p>
            </a>

            {this.renderButton("Send report")}
          </div>
        </div>
      </form>
    );
  }
}

export default ReportForm;
