import React from "react";
import Box from "@material-ui/core/Box";
import MathJax from "react-mathjax-preview";

// const math = String.raw`
// <p>\[
//    \frac{1}{(\sqrt{\phi \sqrt{5}}-\phi) e^{\frac25 \pi}} =
//      1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}
//       {1+\frac{e^{-8\pi}} {1+\ldots} } } }
// \]</p>
// `;
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
          textAlign: "left"
        }}
      >
        {/* <i>Question 1:</i> */}
        {/* <br /> */}
        <br />
        {/* <Latex displayMode={true}>$$(3\times 4) \div (5-3)$$</Latex> */}
        {/* <Latex>What is $(x^2+3) divided$ hello</Latex> */}
        <MathJax math={math} />
        {/* <Latex>what is the value of $$a+b = 5$$</Latex> */}
        {/* Find PIG in the Figure 1. Choose an answer that is correct up to 2 d.p. */}
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
