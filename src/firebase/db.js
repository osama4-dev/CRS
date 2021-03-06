import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDbUo_aKYnEElwLai7whpOqhawJ9DXrWhc",
    authDomain: "crs-firebase.firebaseapp.com",
    databaseURL: "https://crs-firebase-default-rtdb.firebaseio.com",

    projectId: "crs-firebase",
    storageBucket: "crs-firebase.appspot.com",
    messagingSenderId: "843364568012",
    appId: "1:843364568012:web:a2e46679105a9acbacab69"
  };
const fire=  firebase.initializeApp(firebaseConfig);

  export default fire;