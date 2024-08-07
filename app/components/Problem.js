import { LatexText } from "./LatexText";
function Problem(props) {
  let isLinkAvailable = props?.URL_Text && props?.URL_Address ? true : false;
  console.log(props?.URL_Text, "->", isLinkAvailable);
  return (
    <div className="">
      <hr className="my-5" />
      <p className="font-medium mb-5">
        <LatexText text={props?.QuestionText} />
      </p>
      <p className="mb-3">
        <LatexText text={props?.AnswerText} />
      </p>
      {isLinkAvailable && (
        <a
          href={props?.URL_Address}
          className="link p-2 rounded-lg bg-success text-white"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          {props?.URL_Text}
        </a>
      )}
    </div>
  );
}

export default Problem;
