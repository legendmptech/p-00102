function Problem(props) {
  return (
    <div className="">
      <div className="divider">
        <p>{props?.QuestionNumber}</p>
      </div>
      <p className="font-medium">{props?.QuestionText}</p>
      <p>{props?.AnswerText}</p>
    </div>
  );
}

export default Problem;
