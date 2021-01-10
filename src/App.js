import Login from "./firebase-component/Login";
import firebase from "./firebase-component/Firebase";
import { useState, useEffect } from "react";
import NZPMC from "./main-component/NZPMC";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./admin-component/Admin";
require("firebase/auth");
require("firebase/database");
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged((user) => setLoggedIn(user ? true : false));
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login
              initialized={initialized}
              setInitialized={setInitialized}
              loggedIn={loggedIn}
            />
          </Route>
          <Route exact path="/main">
            <NZPMC
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
              initialized={initialized}
              loggedIn={loggedIn}
            />
          </Route>
          <Route exact path="/asdfjklasdfjkl">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
