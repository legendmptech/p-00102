import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

export function LatexText(props) {
  return <Latex>{props?.text}</Latex>;
}
