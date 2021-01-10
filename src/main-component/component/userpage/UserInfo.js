import React from "react";
import { Redirect } from "react-router-dom";
import UserDetailsAndInstructions from "./UserDetailsAndInstructions";
import Button from "@material-ui/core/Button";
import firebase from "../../../firebase-component/Firebase";

export default function UserInfo(props) {
  const { loggedIn } = props;
  function signOut() {
    firebase.auth().signOut();
  }
  return (
    <>
      {loggedIn ? (
        <>
          <UserDetailsAndInstructions />
          <Button
            onClick={signOut}
            style={{
              color: "white",
              backgroundColor: "yellowgreen",
              margin: "0 10px 0 0",
            }}
          >
            Sign Out
          </Button>
          <Button
            style={{
              color: "white",
              backgroundColor: "crimson",
              margin: "0 0 0 10px",
            }}
          >
            Submit the Whole Exam
          </Button>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
