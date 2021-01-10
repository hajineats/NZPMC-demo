import Login from "./firebase-component/Login";
import firebase from "./firebase-component/Firebase";
import { useState, useEffect } from "react";
import NZPMC from "./main-component/NZPMC";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
require("firebase/auth");
require("firebase/database");
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const updateStates = (user) => {
    setLoggedIn(user ? true : false);
    try {
      firebase
        .database()
        .ref("/users/" + user + "/initialized")
        .once("value")
        .then((snapshot) => {
          console.log("fortunate!");
          setInitialized(true);
        })
        .catch(() => {
          console.log("but unfortunate");
          setInitialized(false);
        });
    } catch (e) {
      console.log("but unfortunate2");
      setInitialized(false);
    }
  };

  useEffect(() => {
    updateStates(firebase.auth().currentUser);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("login success!");
      } else {
        console.log("login failed!");
      }
      updateStates(user);
    });
  }, []);

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
