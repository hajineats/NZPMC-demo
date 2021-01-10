import React from "react";
import Box from "@material-ui/core/Box";
import MathJax from "react-mathjax-preview";

const math = String.raw`
Question 3: Evaluate the following integral.
\begin{align*}
\int x + \frac{x^2}{2} dx
\end{align*}

`;

export default function Question() {
  return (
    <div style={{ margin: "0 0 0 10px" }}>
      <Box
        style={{
          margin: "0 0 15px 0",
          padding: "10px",
          backgroundColor: "white",
          textAlign: "left",
        }}
      >
        <br />
        <MathJax math={math} />
      </Box>

      <Box style={{ backgroundColor: "white", maxHeight: "100%" }}>
        <img
          style={{ margin: "10px", maxHeight: "80%", maxWidth: "80%" }}
          src="https://latex.artofproblemsolving.com/b/a/8/ba8f53ff09cff83d00d941d5b41119a3126a7977.png"
        />
      </Box>
    </div>
  );
}
