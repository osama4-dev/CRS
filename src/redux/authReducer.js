// import {
//   ROUT_GUARD,
//   SIGNUP,
//   SIGNUP_SUCESS,
//   SIGNUP_FAILED,
//   LOGIN,
//   LOGIN_SUCESS,
//   LOGIN_FAILED,
//   RESET,
// } from "./constants";

// const initialState = {
//   isUserSecure: false,
//   user: {},
//   isLoading: false,
//   isSucess: false,
//   isError: false,
//   error: {},
//   isLoginSucess: false,

  // const [isUserSecure, setisUserSecure] = useState(false);
  // const [user, setuser] = useState(false);
  // const [isLoading, setLoading] = useState(false);
  // const [isError, setisError] = useState(false);
  // const [error,setError] = useState();
// };

// export default function authReducer(state = initialState, action) {
//   switch (action.type) {
//     case ROUT_GUARD:
//       return {
//         ...state,
//         isUserSecure: action.payload,
//       };
//     case SIGNUP:
//     case LOGIN:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case SIGNUP_SUCESS:
//       return {
//         ...state,
//         user: action.payload,
//         isSucess: true,
//         isLoading: true,
//         isError: false,
//       };
//     case LOGIN_SUCESS:
//       return {
//         ...state,
//         user: action.payload,
//         isLoginSucess: true,
//         isLoading: false,
//         isError: false,
//       };
//     case SIGNUP_FAILED:
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//         error: action.error,
//       };
//     case LOGIN_FAILED:
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//         error: action.error,
//       };
//     case RESET:
//       return {
//         isLoginSucess: false,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// }
