import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

const options = {
  1: "Anvily",
  2: "Jaemin",
  3: "Hajin",
  4: "Hello",
};

export default function QuestionUserInput() {
  const [choice, setChoice] = useState(-1);
  const onActionSave = () => {
    //save choice variable
  };
  const onChoiceClicked = (choice) => {
    setChoice(choice);
  };
  return (
    <>
      <List>
        <ListItem>Choose your answer:</ListItem>
        {[1, 2, 3, 4].map((key) => {
          return (
            <ListItem
              button
              style={{
                backgroundColor: choice === key ? "gray" : "white",
                padding: "20px",
                margin: "5px",
                minWidth: "100%",
                color: choice === key ? "white" : "black",
              }}
              onClick={() => {
                onChoiceClicked(key);
              }}
            >
              {options[key]}
            </ListItem>
          );
        })}
      </List>

      <Button
        style={{
          backgroundColor: "yellowgreen",
          padding: "15px",
          minWidth: "100px",
          maxWidth: "100%",
        }}
        onAction={onActionSave}
      >
        Save Choice
      </Button>
    </>
  );
}
