import React, { useState } from "react";
import QuestionPage from "./component/currentquestion/QuestionPage";
import NavBar from "./component/NavBar";
import UserInfo from "./component/userpage/UserInfo";
import QuestionList from "./component/questionlist/QuestionList";
import { Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
const pageStates = {
  QUESTIONSLIST: 0,
  CURRENTQUESTION: 1,
  USERPAGE: 2,
};

function NZPMC(props) {
  const { loggedIn } = props;
  return (
    <>
      {loggedIn ? (
        <div
          style={{
            backgroundColor: "#1ABC9C",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={12}>
              <QuestionPage />
            </Grid>
          </Grid>
          {/* 
            <UserInfo loggedIn={loggedIn} /> */}
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}

export default NZPMC;
