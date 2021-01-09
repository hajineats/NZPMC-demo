import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Button from "@material-ui/core/Button";
import { KeyboardArrowDownTwoTone } from "@material-ui/icons";

const options = [
  { key: 1, optionString: "Anvily" },
  { key: 2, optionString: "Jaemin" },
  { key: 3, optionString: "Hajin" },
  { key: 4, optionString: "Hello" }
];

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
        {options.map((option) => {
          return (
            <ListItem
              button
              style={{
                backgroundColor: choice === option.key ? "gray" : "white",
                padding: "20px",
                margin: "5px",
                color: choice === option.key ? "white" : "black"
              }}
              onClick={() => {
                onChoiceClicked(option.key);
              }}
            >
              {option.optionString}
            </ListItem>
          );
        })}
      </List>

      <Button
        style={{
          backgroundColor: "yellowgreen",
          padding: "15px",
          margin: "5px",
          minWidth: "100px",
          maxWidth: "100%"
        }}
        onAction={onActionSave}
      >
        Save Choice
      </Button>
    </>
  );
}
