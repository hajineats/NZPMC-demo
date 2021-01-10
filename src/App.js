import Login from "./firebase-component/Login";
import firebase from "./firebase-component/Firebase";
import { useState, useEffect } from "react";
import NZPMC from "./main-component/NZPMC";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { requirePropFactory } from "@material-ui/core";
require("firebase/auth");
require("firebase/database");
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setLoggedIn(user ? true : false);

      try {
        const user = firebase.auth().currentUser.uid;
        firebase
          .database()
          .ref("/users/" + user + "/initialized")
          .once("value")
          .then((snapshot) => {
            setInitialized(true);
          })
          .catch(() => {
            setInitialized(false);
          });
      } catch (e) {
        setInitialized(false);
        console.log(e);
      }
    });
  });

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login initialized={initialized} loggedIn={loggedIn} />
          </Route>
          <Route exact path="/main">
            <NZPMC initialized={initialized} loggedIn={loggedIn} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
