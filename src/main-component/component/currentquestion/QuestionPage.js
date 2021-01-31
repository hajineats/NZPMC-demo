import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Question from "./Question";
import QuestionUserInput from "./QuestionUserInput";
import QuestionList from "../questionlist/QuestionList";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

export default function QuestionPage() {
  const [timer, setTimer] = useState("");
  const [navClosed, setNavClosed] = useState(true);
  const [q, setQ] = useState(null);
  const [qIndex, setQIndex] = useState(-1);
  const [questions, setQuestions] = useState([
    { checked: false, index: 1, prevChoice: -1 },
    { checked: false, index: 2, prevChoice: -1 },
    { checked: false, index: 3, prevChoice: -1 },
    { checked: false, index: 4, prevChoice: -1 },
    { checked: false, index: 5, prevChoice: -1 },
    { checked: false, index: 6, prevChoice: -1 },
    { checked: false, index: 7, prevChoice: -1 },
    { checked: false, index: 8, prevChoice: -1 },
    { checked: false, index: 9, prevChoice: -1 },
  ]);

  setInterval(() => {
    var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (seconds.length === 1) {
      seconds = "0" + seconds;
    }
    if (minutes.length === 1) {
      minutes = "0" + minutes;
    }
    let timeLeft = hours + ":" + minutes + ":" + seconds;
    setTimer(timeLeft);
  }, 1000);

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
        <QuestionList
          setQIndex={setQIndex}
          setQ={setQ}
          setNavClosed={setNavClosed}
          questions={questions}
        />
      </div>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={9}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={() => setNavClosed(false)}>
              <MenuIcon fontSize="large" />
              <Typography>View Questions/submit</Typography>
            </Button>
            <Typography>Remaining Time: {timer}</Typography>
          </div>

          <Question q={q} />
        </Grid>
        <Grid item xs={3}>
          <QuestionUserInput
            qIndex={qIndex}
            q={q}
            questions={questions}
            setQuestions={setQuestions}
          />
        </Grid>
      </Grid>
    </>
  );
}
