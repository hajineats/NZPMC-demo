import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Paper from "@material-ui/core/Paper";

const questions = [
  { checked: true, index: 1 },
  { checked: true, index: 2 },
  { checked: true, index: 3 },
  { checked: false, index: 4 },
  { checked: true, index: 5 },
  { checked: false, index: 6 },
  { checked: false, index: 7 },
  { checked: false, index: 8 },
  { checked: false, index: 9 }
];

export default function QuestionList() {
  return (
    <Paper style={{ margin: "20px", maxHeight: "70%", overflow: "auto" }}>
      <List>
        {questions.map((question) => {
          return (
            <ListItem button style={{ height: 60, backgroundColor: "white" }}>
              <ListItemIcon>
                {question.checked ? <CheckCircleIcon /> : <></>}
              </ListItemIcon>
              <Box>Question {question.index}</Box>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
}
