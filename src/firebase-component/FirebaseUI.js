import React, { useEffect, useState } from "react";
import firebase from "./Firebase";
import "./Login.css";
import "firebaseui/dist/firebaseui.css";
var firebaseui = require("firebaseui");
require("firebase/auth");
require("firebase/database");

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      return true;
    },
    uiShown: function () {
      // document.getElementById('loader').style.display = 'none';
    },
  },
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  tosUrl: "https://www.google.com",
  privacyPolicyUrl: "https://www.google.com",
};

function FirebaseUI(props) {
  const { name, setName } = props;
  const [math, setMath] = useState(String.raw``);
  useEffect(() => {
    var ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase
          .database()
          .ref("users/" + firebase.auth().currentUser.uid + "/initialized")
          .once("value")
          .then((snapshot) => {
            // props.setUserInitialised(snapshot.val());
          });
      }
    });
  }, []);
  return <div id="firebaseui-auth-container" />;
}

export default FirebaseUI;
