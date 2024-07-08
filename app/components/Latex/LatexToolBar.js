import React, { useState } from "react";

function LatexToolBar({ focusedTextInput }) {
  const toolBarFunction = (insertText) => {
    const ele = document.getElementById(focusedTextInput);
    const cursorPosition = ele.selectionStart;
    const textBeforeCursor = ele.value.substring(0, cursorPosition);
    const textAfterCursor = ele.value.substring(cursorPosition);

    ele.value = textBeforeCursor + insertText + textAfterCursor;
    ele.focus();
    ele.selectionStart = ele.selectionEnd = cursorPosition + insertText.length;
  };
  return (
    <div className="join">
      <button
        className="btn join-item"
        onClick={() => toolBarFunction("<br/>")}
      >
        add line
      </button>
      <button className="btn join-item" onClick={() => toolBarFunction("$$")}>
        latex
      </button>
      <button
        className="btn join-item"
        onClick={() => toolBarFunction("<hr/><hr/>")}
      >
        divider
      </button>
    </div>
  );
}

export default LatexToolBar;
