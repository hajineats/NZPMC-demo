import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import firebase from "../../firebase-component/Firebase";
require("firebase/auth");
require("firebase/database");
const currencies = [
  {
    value: 9,
    label: "Year 9",
  },
  {
    value: 10,
    label: "Year 10",
  },
  {
    value: 11,
    label: "Year 11",
  },
  {
    value: 12,
    label: "Year 12",
  },
  {
    value: 13,
    label: "Year 13",
  },
  {
    value: 8,
    label: "Below Year 9",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function UserInitForm(props) {
  const classes = useStyles();
  const [yearLevel, setYearLevel] = React.useState(9);
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setYearLevel(event.target.value);
  };

  function onButtonSubmit(e) {
    props.setLoading(true);
    e.preventDefault();
    // update database set
    console.log(firebase === null);
    firebase
      .database()
      .ref("users/" + firebase.auth().currentUser.uid)
      .set({
        name: name,
        year: yearLevel,
        isSenior: yearLevel >= 11 ? true : false,
        isAdmin: false,
        initialized: true,
      });
    props.setUserInitialised(true);
    props.setLoading(false);
  }

  return (
    <form className={classes.root} autoComplete="off">
      <div>
        <TextField
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
          label="Your preferred full name"
        />
        <TextField
          required="true"
          id="standard-select-currency"
          select
          label="Select"
          value={yearLevel}
          onChange={handleChange}
          helperText="Please select your year level"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <Button color="primary" onClick={onButtonSubmit}>
          Get started!
        </Button>
      </div>
    </form>
  );
}
