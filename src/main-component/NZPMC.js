import React, { useState } from "react";
import QuestionPage from "./component/currentquestion/QuestionPage";
import NavBar from "./component/NavBar";
import UserInfo from "./component/userpage/UserInfo";
import QuestionList from "./component/questionlist/QuestionList";
import UserInit from "./initialisation/UserInit";
const pageStates = {
  QUESTIONSLIST: 0,
  CURRENTQUESTION: 1,
  USERPAGE: 2,
};

function NZPMC(props) {
  const [pageState, setPageState] = useState(2);
  return (
    <>
      {props.userInitialised ? (
        <div className="App" style={{ textAlign: "center" }}>
          <div style={{ backgroundColor: "#cfe8fc", height: "100vh" }}>
            <NavBar onHandleChange={setPageState} />
            {pageState === pageStates.CURRENTQUESTION && <QuestionPage />}
            {pageState === pageStates.QUESTIONSLIST && <QuestionList />}
            {pageState === pageStates.USERPAGE && <UserInfo />}
          </div>
        </div>
      ) : (
        <UserInit
          setLoading={props.setLoading}
          setUserInitialised={props.setUserInitialised}
        />
      )}
    </>
  );
}

export default NZPMC;
