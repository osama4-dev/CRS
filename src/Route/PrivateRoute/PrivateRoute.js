// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import AuthenticatedRoute from "../AuthenticatedRoute/AuthenticatedRoute";

// const PrivateRoute = ({ component: Component, props, ...rest }) => {
//   const authCheck = AuthenticatedRoute.getAuth();
//   console.log("authCheck", authCheck);
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         authCheck ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//             }}
//           />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;
