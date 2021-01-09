import { useState } from "react";
import firebase from "firebase/app";

import "firebaseui/dist/firebaseui.css";
import QuestionPage from "./component/currentquestion/QuestionPage";
import NavBar from "./component/NavBar";
import UserInfo from "./component/userpage/UserInfo";
import QuestionList from "./component/questionlist/QuestionList";

import Login from "./firebase-component/Login";
const pageStates = {
  QUESTIONSLIST: 0,
  CURRENTQUESTION: 1,
  USERPAGE: 2,
};

function App() {
  const [pageState, setPageState] = useState(3);
  return (
    <>
      <Login />
      {/* <MathJax math={math} /> */}
      {/* <div>
          <div className="App" style={{ textAlign: "center" }}>
          <div style={{ backgroundColor: "#cfe8fc", height: "100vh" }}>
            <NavBar onHandleChange={setPageState} />
            {pageState === pageStates.CURRENTQUESTION && <QuestionPage />}
            {pageState === pageStates.QUESTIONSLIST && <QuestionList />}
            {pageState === pageStates.USERPAGE && <UserInfo />}
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
