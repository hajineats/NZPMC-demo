import React from "react";
import UserDetailsAndInstructions from "./UserDetailsAndInstructions";
import Button from "@material-ui/core/Button";

export default function UserInfo() {
  return (
    <>
      <UserDetailsAndInstructions />
      <Button
        style={{
          color: "white",
          backgroundColor: "yellowgreen",
          margin: "0 10px 0 0"
        }}
      >
        Sign Out
      </Button>
      <Button
        style={{
          color: "white",
          backgroundColor: "crimson",
          margin: "0 0 0 10px"
        }}
      >
        Submit the Whole Exam
      </Button>
    </>
  );
}
