import React from "react";

function NoProblemFound(props) {
  return (
    <div className="w-full min-h-screen flex justify-center items-center text-center">
      <h1>{props?.text}</h1>
    </div>
  );
}

export default NoProblemFound;
