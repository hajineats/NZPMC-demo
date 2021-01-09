import Login from "./firebase-component/Login";
import NZPMC from "./main-component/NZPMC";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      {!loggedIn ? (
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      ) : (
        <NZPMC />
      )}
    </>
  );
}

export default App;
