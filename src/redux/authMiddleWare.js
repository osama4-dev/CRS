// import AuthAction from "./authActions";
// import firestore from "../firebase/db"
// import firebase from "../firebase/db";
// import { useHistory } from 'react-router-dom';
// import { toast } from "react-toastify";

// class authMiddleWare {
//   static routGuard() {
//     return (dispatch) => {
//       firebase.auth().onAuthStateChanged((user) => {
//         console.log("user",user)
//         if (!user) {
//           dispatch(AuthAction.routeGuardActions(true));
//         } else {
//           dispatch(AuthAction.routeGuardActions(true));
//           dispatch(AuthAction.signUpSuccess(user));
//           dispatch(AuthAction.loginSuccess(user));

//         }
//       });
//     };
//   }

//   static signUp(data) {
//     return (dispatch) => {

//       firebase
//         .auth()
//         .createUserWithEmailAndPassword(data.email, data.password)
//         firestore
//         .collection

//         .then((user) => {
          // console.log("user.user.uid",user.user.uid)  
//           dispatch(AuthAction.signUpSuccess(user));
          
          
//         })
//         .catch((err) => {
//           toast.error(err.message);
//           AuthAction.signUpFailed(err);
//         });
      
//     };
//   }

//   static reset() {
//     return (dispatch)=>{
//     dispatch(AuthAction.reset())
//     }
//   }
  
//   static login(data) {
//     return (dispatch) => {
//       firebase
//         .auth()
//         .signInWithEmailAndPassword(data.email, data.password)

//         .then((user) => {
          
//             console.log("user",user.user.uid)
//             user?.user?.uid && localStorage.setItem("userId",user.user.uid)

//           dispatch(AuthAction.loginSuccess(user));
          
//         })
//         .catch((err) => {
//           console.log(err.message)
//           toast.error(err.message);
//           AuthAction.loginFailed(err);
//         });
      
//     };
//   }
// }

// export default authMiddleWare;
