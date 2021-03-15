import React from "react";

import { Switch, Route } from "react-router-dom";

import CompanySignUp from "../../companySignUp/compnaySignUp";
import StudentSignUp from "../../studentSignUp/studentSignUp";
import CompanyDashboard from "../../dashboard/CompanyDashboard/companyDashboard";
import StudentDashboard from "../../dashboard/StudentDashboard/studentDashboard";
import Login from "../../login/login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Routes = ({ childProps }) => {
  const user = localStorage.getItem("userId");

  console.log("user", user);
  return (
    <Switch>
      <Route
        exact
        path="/CompanySignUp"
        component={CompanySignUp}
        props={childProps}
      />
      <Route
        exact
        path="/StudentSignUp"
        component={StudentSignUp}
        props={childProps}
      />{" "}
      <Route exact path="/" component={Login} props={childProps} />
      <PrivateRoute
        exact
        path="/StudentDashboard"
        component={StudentDashboard}
        props={childProps}
      />
      <PrivateRoute
        component={CompanyDashboard}
        path="/CompanyDashboard"
        exact
        props={childProps}
      />
    </Switch>
  );
};

export default Routes;
