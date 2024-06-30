// "use client";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

export function LatexText() {
  return (
    <Latex>
      This is just an example $\frac{1}
      {2}$ $\newline$
    </Latex>
  );
}
