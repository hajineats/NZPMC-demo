import Login from "./firebase-component/Login";
import NZPMC from "./main-component/NZPMC";
import { useState } from "react";

function App() {
  const [userInitialised, setUserInitialised] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : !loggedIn ? (
        <Login
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          setUserInitialised={setUserInitialised}
          setLoading={setLoading}
        />
      ) : (
        <NZPMC
          userInitialised={userInitialised}
          setUserInitialised={setUserInitialised}
          setLoading={setLoading}
        />
      )}
    </>
  );
}

export default App;
