import Login from "./firebase-component/Login";
import firebase from "./firebase-component/Firebase";
import { useState, useEffect } from "react";
import NZPMC from "./main-component/NZPMC";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setLoggedIn(user ? true : false);
    });
  });

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login loggedIn={loggedIn} />
          </Route>
          <Route exact path="/main">
            <NZPMC loggedIn={loggedIn} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
