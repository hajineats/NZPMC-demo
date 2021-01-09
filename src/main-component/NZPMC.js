import React, { useState } from "react";
import QuestionPage from "./component/currentquestion/QuestionPage";
import NavBar from "./component/NavBar";
import UserInfo from "./component/userpage/UserInfo";
import QuestionList from "./component/questionlist/QuestionList";

const pageStates = {
  QUESTIONSLIST: 0,
  CURRENTQUESTION: 1,
  USERPAGE: 2,
};

function NZPMC() {
  const [pageState, setPageState] = useState(2);
  return (
    <>
      <div className="App" style={{ textAlign: "center" }}>
        <div style={{ backgroundColor: "#cfe8fc", height: "100vh" }}>
          <NavBar onHandleChange={setPageState} />
          {pageState === pageStates.CURRENTQUESTION && <QuestionPage />}
          {pageState === pageStates.QUESTIONSLIST && <QuestionList />}
          {pageState === pageStates.USERPAGE && <UserInfo />}
        </div>
      </div>
    </>
  );
}

export default NZPMC;
