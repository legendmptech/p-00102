import { LatexText } from "./LatexText";
function Problem(props) {
  return (
    <div className="">
      <hr className="my-5"/>
      <p className="font-medium mb-5">
        <LatexText text={props?.QuestionText} />
      </p>
      <p>
        <LatexText text={props?.AnswerText} />
      </p>
    </div>
  );
}

export default Problem;
