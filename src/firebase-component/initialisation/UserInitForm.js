import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import firebase from "../Firebase";
require("firebase/auth");
require("firebase/database");
const yearLevelList = [
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
  const { initialized, setInitialized } = props;
  const classes = useStyles();
  const [yearLevel, setYearLevel] = React.useState(9);
  const [name, setName] = useState("");
  const [redirect, setRedirect] = React.useState(null);

  const handleChange = (event) => {
    event.preventDefault();
    setYearLevel(event.target.value);
  };

  function onButtonSubmit(e) {
    e.preventDefault();
    // update database set
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
    setRedirect("/main");
  }

  return (
    <>
      {redirect !== null && <Redirect to={redirect} />}
      <form className={classes.root} autoComplete="off">
        <div style={{ padding: "20px" }}>
          {initialized ? (
            <>
              <TextField
                onChange={(e) => {
                  e.preventDefault();
                  setName(e.target.value);
                }}
                label="Your preferred full name"
              />
              <TextField
                id="standard-select-currency"
                select
                label="Select"
                value={yearLevel}
                onChange={handleChange}
                helperText="Please select your year level"
              >
                {yearLevelList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <Button color="primary" onClick={onButtonSubmit}>
                Get started!
              </Button>
            </>
          ) : (
            <>
              Log in successful!
              <Button color="primary" onClick={() => setRedirect("/main")}>
                Next
              </Button>
            </>
          )}
        </div>
      </form>
    </>
  );
}
