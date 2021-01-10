import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyB3gPUOiJ7uWEKsNs6sTa8pbrb_F2HaTWQ",
  authDomain: "auth-development-b60bd.firebaseapp.com",
  projectId: "auth-development-b60bd",
  databaseURL: "https://auth-development-b60bd-default-rtdb.firebaseio.com/",
  storageBucket: "auth-development-b60bd.appspot.com",
  messagingSenderId: "464891238921",
  appId: "1:464891238921:web:92f3034effc2bce463b6d8",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
