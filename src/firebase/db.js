import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";


export const app = firebase.initializeApp({
    apiKey: "AIzaSyDbUo_aKYnEElwLai7whpOqhawJ9DXrWhc",
    authDomain: "crs-firebase.firebaseapp.com",
    databaseURL: "https://crs-firebase-default-rtdb.firebaseio.com",

    projectId: "crs-firebase",
    storageBucket: "crs-firebase.appspot.com",
    messagingSenderId: "843364568012",
    appId: "1:843364568012:web:a2e46679105a9acbacab69"
  });


  // export const firestore = firebase.firestore();
  // export const auth = firebase.auth();
  export const auth = app.auth();
  export const firestore = app.firestore();

  export { firebase };
