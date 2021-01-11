import React, { useState } from "react";
import MathJax from "react-mathjax-preview";
import firebase from "../firebase-component/Firebase";
require("firebase/database");
function makeOption(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function Admin() {
  const [qNum, setQNum] = useState(null);
  const [latex, setLatex] = useState(String.raw``);

  function submitQuestion(e) {
    e.preventDefault();
    firebase
      .database()
      .ref("/questions/" + qNum)
      .set({
        latex: latex,
        options: {
          1: makeOption(12),
          2: makeOption(10),
          3: makeOption(11),
          4: makeOption(10),
          5: makeOption(10),
        },
      });
  }
  return (
    <div>
      <label>Enter latex : </label>
      <br />
      Question Number:{" "}
      <input
        type="textfield"
        onChange={(e) => {
          e.preventDefault();
          setQNum(e.target.value);
        }}
      />
      <br />
      <textarea
        style={{ minHeight: "200px", minWidth: "200px" }}
        onChange={(e) => {
          e.preventDefault();
          setLatex(String.raw`${e.target.value}`);
        }}
      />
      <button onClick={submitQuestion}>submit this question</button>
      <br />
      <MathJax math={latex} />
    </div>
  );
}

export default Admin;
