import React, { useEffect, useState } from "react";
import firebase from "./Firebase";
import Paper from "@material-ui/core/Paper";
import MathJax from "react-mathjax-preview";
import Container from "@material-ui/core/Container";
import "./Login.css";
var firebaseui = require("firebaseui");
require("firebase/auth");
require("firebase/database");

//////////////////////////////////////////////////////////////////////
// config files

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

//////////////////////////////////////////////////////////////////
export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [math, setMath] = useState(String.raw``);

  function writeUserData() {
    firebase
      .database()
      .ref("users/" + firebase.auth().currentUser.uid)
      .set({
        username: name,
        email_address: email,
        latex: String.raw`
        Question 3: Evaluate the following integral.
        \begin{align*}
        \int x + \frac{x^2}{2} dx
        \end{align*}
        
        `,
      });
  }

  function readUserData() {
    firebase
      .database()
      .ref("users/" + firebase.auth().currentUser.uid)
      .once("value")
      .then((snapshot) => {
        // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        setMath(String.raw`${snapshot.val().latex}`);
      });
  }

  useEffect(() => {
    var ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);

    firebase.auth().onAuthStateChanged((user) => {
      setEmail(user ? user.email : "");
      setName(user ? user.displayName : "");
      setLoggedIn(user ? true : false);
    });
  }, []);

  return (
    <>
      <Container
        style={{ display: "flex", alignItems: "center" }}
        className="wrapper"
      >
        <Container maxWidth="xs">
          <Paper
            style={{ textAlign: "center", margin: "10px", padding: "10px" }}
          >
            {loggedIn
              ? "Hello! You are logged in as " + name + "!"
              : "You are not logged in, sorry!"}
          </Paper>

          <Paper
            style={{ paddingTop: "20px", paddingBottom: "10px" }}
            id="firebaseui-auth-container"
          />
        </Container>
      </Container>
      <button onClick={writeUserData}>write!</button>
      <button onClick={readUserData}>read!</button>
      <MathJax math={math} />
    </>
  );
}
