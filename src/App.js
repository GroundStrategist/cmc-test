import React, { Fragment, Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import CellManager from "./components/cellManager";
// import DashboardMain from "./components/dashboardMain";

import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";

import TestComponent from "./components/test";
import LoginPage from "./components/loginPage";
import RegistrationPage from "./components/registrationPage";

class App extends Component {
  state = {
    currentDashboard: "home",
    cellMembers: "",
    user: {},
  };

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });

    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
    window.Webflow.redraw.up();
    document.dispatchEvent(new Event("readystatechange"));
  }

  render() {
    const { user } = this.state;

    return (
      <Fragment>
        <ToastContainer />

        <Switch>
          <Route path="/test" component={TestComponent} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <ProtectedRoute path="/" component={CellManager} />

          {/* <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/logout" component={Logout} />
              <ProtectedRoute path="/movies/:id" component={MovieForm} />
              <Route
                path="/"
                render={(props) => (
                  <CellManager {...props} user={this.state.user} />
                )}
              />
              <Route path="/customers" component={Customers} />
              <Route path="/rentals" component={Rentals} />
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" exact to="/movies" />

              <Redirect to="/not-found" /> */}
        </Switch>
      </Fragment>
    );
  }
}

export default App;
