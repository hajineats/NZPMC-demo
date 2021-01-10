import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Question from "./Question";
import QuestionUserInput from "./QuestionUserInput";
import QuestionList from "../questionlist/QuestionList";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
export default function QuestionPage() {
  const [navClosed, setNavClosed] = useState(true);
  return (
    <>
      <div
        style={{
          height: "100%",
          width: navClosed ? "0" : "40%",
          position: "fixed",
          zIndex: "1",
          top: "0",
          left: "0",
          backgroundColor: "#16A085",
          overflowX: "hidden",
          transition: "0.5s",
        }}
      >
        <QuestionList setNavClosed={setNavClosed} />
      </div>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={9}>
          <Button onClick={() => setNavClosed(false)}>
            <MenuIcon fontSize="large" />
            <Typography>See remaining Questions/submit</Typography>
          </Button>
          <Question />
        </Grid>
        <Grid item xs={3}>
          <QuestionUserInput />
        </Grid>
      </Grid>
    </>
  );
}
