// import * as firebase from "firebase";
import "firebase/auth";
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDbUo_aKYnEElwLai7whpOqhawJ9DXrWhc",
    authDomain: "crs-firebase.firebaseapp.com",
    databaseURL: "https://crs-firebase-default-rtdb.firebaseio.com",

    projectId: "crs-firebase",
    storageBucket: "crs-firebase.appspot.com",
    messagingSenderId: "843364568012",
    appId: "1:843364568012:web:a2e46679105a9acbacab69"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;


  //OSAMA STATE REDUX MANAGE KRTA HAI TO TOOONA SALA COMPANY SIGN UP M KU DALEE WEE HAI STATE HTA WAHA SA SALA LOADING JO LG RHEE HAI WO BHEE REDUX SA AYE GEE APNEE LOADING JO LGYEE WEE HAU WO HTAO YAAD SA PHER SA FALSE OR TRUE HO GA CHUTR