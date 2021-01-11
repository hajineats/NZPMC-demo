import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import logo from "../assets/nzpmc-logo.png";
import UserInit from "./initialisation/UserInit";
import "./Login.css";
import "firebaseui/dist/firebaseui.css";
import FirebaseUI from "./FirebaseUI";
import firebase from "./Firebase";
require("firebase/auth");
require("firebase/database");

export default function Login(props) {
  const { initialized, setInitialized } = props;
  const { loggedIn } = props;

  return (
    <>
      <Container
        style={{ display: "flex", alignItems: "center" }}
        className="wrapper"
      >
        <Container maxWidth="xs">
          <Paper
            style={{ textAlign: "center", margin: "10px", padding: "10px" }}
          >
            <img width="64px" height="64px" src={logo} alt="logo" />
            <br />
            {loggedIn ? "Welcome" : "You are not logged in, sorry!"}
          </Paper>
          <Paper style={{ paddingTop: "20px", paddingBottom: "10px" }}>
            {!loggedIn ? (
              <FirebaseUI setInitialized={setInitialized} />
            ) : (
              <UserInit initialized={initialized} />
            )}
          </Paper>
        </Container>
      </Container>
      <div></div>
    </>
  );
}
