import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLyss_Zkc-wPA_NwHWWGBYYhwBI7IoiOk",
    authDomain: "trylogger-bfa7f.firebaseapp.com",
    databaseURL: "https://trylogger-bfa7f-default-rtdb.firebaseio.com",
    projectId: "trylogger-bfa7f",
    storageBucket: "trylogger-bfa7f.appspot.com",
    messagingSenderId: "1016371853349",
    appId: "1:1016371853349:web:8fde2b37c8bac4671be7cc",
    measurementId: "G-QHKTQRSCSR"
  };

//   firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();