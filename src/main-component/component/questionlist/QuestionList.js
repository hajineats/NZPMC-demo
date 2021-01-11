import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Box from "@material-ui/core/Box";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Paper from "@material-ui/core/Paper";
import CloseIcon from "@material-ui/icons/CloseRounded";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import firebase from "../../../firebase-component/Firebase";
import getQuestion from "../../../firebase-component/FirebaseRequests";
const questions = [
  { checked: true, index: 1 },
  { checked: true, index: 2 },
  { checked: true, index: 3 },
  { checked: false, index: 4 },
  { checked: true, index: 5 },
  { checked: false, index: 6 },
  { checked: false, index: 7 },
  { checked: false, index: 8 },
  { checked: false, index: 9 },
];

export default function QuestionList(props) {
  const { setNavClosed } = props;
  function signOut() {
    firebase.auth().signOut();
  }
  return (
    <>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={10}>
          <Paper style={{ maxHeight: "20%", margin: "10px", padding: "20px" }}>
            <b>20/24</b> more to go!
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              height: "100%",
            }}
          >
            <Button onClick={() => setNavClosed(true)}>
              <CloseIcon style={{}} fontSize="large" />
            </Button>
          </div>
        </Grid>
      </Grid>

      <Paper style={{ margin: "10px", maxHeight: "60%", overflow: "auto" }}>
        <List>
          {questions.map((question) => {
            return (
              <ListItem
                onClick={() =>
                  getQuestion(question.index).then((res) => {
                    props.setQ(res);
                    console.log(res);
                    setNavClosed(true);
                  })
                }
                button
                style={{ height: 60, backgroundColor: "white" }}
              >
                <ListItemIcon>
                  {question.checked ? <CheckCircleIcon /> : <></>}
                </ListItemIcon>
                <Box>Question {question.index}</Box>
              </ListItem>
            );
          })}
        </List>
      </Paper>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={signOut}
          style={{
            color: "white",
            backgroundColor: "yellowgreen",
            margin: "20px 10px 0 0",
          }}
        >
          Sign Out
        </Button>
        <br />
        <Button
          style={{
            color: "white",
            backgroundColor: "#C0392B",
            margin: "20px 0 0 10px",
          }}
        >
          Submit the Whole Exam
        </Button>
      </div>
    </>
  );
}
