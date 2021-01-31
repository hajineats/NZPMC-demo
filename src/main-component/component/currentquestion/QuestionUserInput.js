import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import { submitChoice } from "../../../firebase-component/FirebaseRequests";
import Grid from "@material-ui/core/Grid";
// const options = {
//   1: "Anvily",
//   2: "Jaemin",
//   3: "Hajin",
//   4: "Hello",
// };

export default function QuestionUserInput(props) {
  const { questions, setQuestions, qIndex } = props;
  const [choice, setChoice] = useState(-1);
  const onActionSave = () => {
    console.log("hello!");
    console.log(qIndex);
    if (qIndex) {
      submitChoice(qIndex, choice)
        .then(() => console.log("hello my friend"))
        .catch((err) => console.log(err));
    } else {
      console.log("nothing had been selected, so nothing saved!");
    }
    console.log("hi again!");
    let prevQuestions = [...questions];
    prevQuestions[qIndex - 1].checked = true;
    prevQuestions[qIndex - 1].prevChoice = choice;
    setQuestions(prevQuestions);
    // get question number
  };
  const onChoiceClicked = (choice) => {
    setChoice(choice);
  };
  return (
    <>
      <List>
        <ListItem>Choose your answer:</ListItem>
        {[1, 2, 3, 4, 5].map((key) => {
          return (
            <ListItem
              button
              style={{
                backgroundColor: choice === key ? "gray" : "white",
                padding: "20px",
                margin: "5px",
                color: choice === key ? "white" : "black",
              }}
              onClick={() => {
                onChoiceClicked(key);
              }}
            >
              {props.q === null || props.q === undefined
                ? "***"
                : props.q.options[key]}
            </ListItem>
          );
        })}

        <ListItem
          style={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "#008f68",
              color: "white",
              padding: "15px",
              minWidth: "100px",
              maxWidth: "100%",
            }}
            onClick={onActionSave}
          >
            Save Choice <br />{" "}
          </Button>
        </ListItem>
        <ListItem
          style={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <div>
            {qIndex != -1
              ? questions[qIndex - 1].prevChoice === -1
                ? ""
                : "Current choice: " + questions[qIndex - 1].prevChoice
              : ""}
          </div>
        </ListItem>
      </List>
    </>
  );
}
