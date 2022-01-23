import React, { Fragment, Component } from "react";

import NavBar from "./navBar";
import DashboardHeader from "./dashboardHeader";
import DashboardFooter from "./dashboardFooter";
import DashboardHome from "./homeDashboard";
import DashboardSidebar from "./dashboardSidebar";
import ReportDashboard from "./reportDashboard";
import UserProfileDashboard from "./userProfileDashboard";
import VirtualDashboard from "./virtualDashboard";
import SocialsDashboard from "./socialsDashboard";
import authService from "../services/authService";

class CellManager extends Component {
  state = {
    ads: [],
    user: authService.getCurrentUser().currentUser,
    cellInfo: {},
    cellMembers: [],
    currentPage: "home",
  };

  componentDidMount() {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-wf-page", "61e809c338be81b40cbd5531");
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
    window.Webflow.redraw.up();
    document.dispatchEvent(new Event("readystatechange"));

    if (!localStorage.getItem("current-page")) {
      localStorage.setItem("current-page", "home");
      this.state.currentPage = localStorage.getItem("current-page");
    }
  }

  handlePageChange = (page) => {
    localStorage.setItem("current-page", page);
    this.setState({ currentPage: localStorage.getItem("current-page") });
  };

  render() {
    return (
      <div className="dashboard wf-section">
        <div className="dashboard__grid">
          <NavBar user={this.state.user} onPageChange={this.handlePageChange} />
          <section
            data-w-id="c04bee9c-c525-c180-51bd-64152b37c8d7"
            // style={{ opacity: 0 }}
            className="dashboard__main-col"
          >
            <div className="dashboard__main__wrap">
              <DashboardHeader user={this.state.user} />
              <div
                data-w-id="f7ca7fc4-8118-85b9-7bca-eb4f7e5e83e7"
                className="dashboard__main"
              >
                <div className="g-container container--is-min-tb">
                  <div className="dashboard__main__grid">
                    {/* ++++++++++++++++++++++++++++++++++ Dynamic Dashboard +++++++++++++++++++++++++++++++++++++++++++++++ */}

                    {this.state.currentPage === "home" && <DashboardHome />}

                    {this.state.currentPage === "cell-manager" && (
                      <ReportDashboard />
                    )}
                    {this.state.currentPage === "user-profile" && (
                      <UserProfileDashboard />
                    )}
                    {this.state.currentPage === "virtual-church" && (
                      <VirtualDashboard />
                    )}
                    {this.state.currentPage === "socials" && (
                      <SocialsDashboard />
                    )}

                    {/* ++++++++++++++++++++++++++++++++++++++++++++ Dynamic Dashboard +++++++++++++++++++++++++++++++++++++*/}

                    <aside
                      id="w-node-cf8ab8ac-aca8-e622-68de-8a27dc62c713-0cbd5531"
                      className="dashboard__col__aside"
                    >
                      <DashboardSidebar />
                    </aside>
                  </div>
                </div>
              </div>
              <DashboardFooter />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default CellManager;
