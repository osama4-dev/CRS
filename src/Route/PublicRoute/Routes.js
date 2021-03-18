import React from "react";

import { Switch, Route } from "react-router-dom";

import CompanySignUp from "../../SignUp/companySignUp/compnaySignUp";
import StudentSignUp from "../../SignUp/studentSignUp/studentSignUp";
import CompanyDashboard from "../../dashboard/CompanyDashboard/companyDashboard";
import StudentDashboard from "../../dashboard/StudentDashboard/studentDashboard";
import Login from "../../login/login";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Portal from "../../Whole Crud/Crud/Portal";
// // import Portal from "../../Whole Crud/Crud/Portal"
import AdminControlsList from '../../Whole Crud/Crud/AdminControlsList'
import AdminControl from '../../Whole Crud/Crud/AdminControl'
import AppCrud from '../../Whole Crud/Crud/AppCrud/AppCrud'
import AdminSignUp from '../../SignUp/adminSignUp/adminSignUp'





const Routes = ({ childProps }) => {
  const user = localStorage.getItem("userId");

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
      <Route
        exact
        path="/StudentDashboard"
        component={StudentDashboard}
        props={childProps}
      />
      <Route
        component={CompanyDashboard}
        path="/CompanyDashboard"
        exact
        props={childProps}
      />
         <Route
        component={AppCrud}
        path="/AppCrud"
        exact
        props={childProps}
      />
    
              <Route
        component={AdminControl}
        path="/AdminControl"
        exact
        props={childProps}
      />
               <Route
        component={AdminSignUp}
        path="/AdminSignUp"
        exact
        props={childProps}
      />
      <Route exact path="/Portal" component={Portal} />
      <Route exact path={["/", "/AdminControlsList"]} component={AdminControlsList} />


    </Switch>
  );
};

export default Routes;
