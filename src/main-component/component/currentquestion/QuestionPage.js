import React from "react";
import Grid from "@material-ui/core/Grid";
import Question from "./Question";
import QuestionUserInput from "./QuestionUserInput";

export default function QuestionPage() {
  return (
    <>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={8} style={{ margin: "30px 0 0 0" }}>
          <Question />
        </Grid>
        <Grid item xs={4} style={{ margin: "10px 0 0 0" }}>
          <QuestionUserInput />
        </Grid>
      </Grid>
    </>
  );
}
