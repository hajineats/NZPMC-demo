import React, { useState } from "react";
import MathJax from "react-mathjax-preview";
import firebase from "../firebase-component/Firebase";
require("firebase/database");

function Admin() {
  const [qNum, setQNum] = useState(null);
  const [latex, setLatex] = useState(String.raw``);

  function handleChange(e) {
    e.preventDefault();
    setLatex(String.raw`${e.target.value}`);
  }
  function handleQNumChange(e) {
    e.preventDefault();
    setQNum(e.target.value);
  }
  function submitQuestion(e) {
    e.preventDefault();
    firebase
      .database()
      .ref("/questions/" + qNum)
      .set({
        latex: latex,
        options: {
          1: "Hajin",
          2: "jaemin",
          3: "anvilly",
          4: "metal",
        },
      });
  }
  return (
    <div>
      <label>Enter latex : </label>
      <br />
      Question Number: <input type="textfield" onChange={handleQNumChange} />
      <br />
      <textarea
        style={{ minHeight: "200px", minWidth: "200px" }}
        onChange={handleChange}
      />
      <MathJax math={latex} />
      <button onClick={submitQuestion}>submit this question</button>
    </div>
  );
}

export default Admin;
