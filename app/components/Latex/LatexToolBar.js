import React, { useState } from "react";

function LatexToolBar({ focusedTextInput }) {
  const toolBarFunction = (insertText, placeCursorPosition = 0) => {
    const ele = document.getElementById(focusedTextInput);
    const cursorPosition = ele.selectionStart;
    const textBeforeCursor = ele.value.substring(0, cursorPosition);
    const textAfterCursor = ele.value.substring(cursorPosition);

    ele.value = textBeforeCursor + insertText + textAfterCursor;
    ele.focus();
    ele.selectionStart = ele.selectionEnd =
      cursorPosition + insertText.length + placeCursorPosition;
  };
  return (
    <div className="join">
      <button
        className="btn tooltip join-item border-2 border-gray-500"
        onClick={() => toolBarFunction("<br/>")}
        data-tip="Add a line break <br/>"
      >
        add line
      </button>
      <button
        className="btn tooltip join-item border-2 border-gray-500"
        onClick={() => toolBarFunction("$$", -1)}
        data-tip="Add latex code in the editor $$"
      >
        latex
      </button>
      <button
        className="btn tooltip join-item border-2 border-gray-500"
        onClick={() => toolBarFunction("<b></b>", -4)}
        data-tip="Bold <b></b>"
      >
        B
      </button>
      <button
        className="btn tooltip join-item border-2 border-gray-500"
        onClick={() => toolBarFunction("<i></i>", -4)}
        data-tip="Italic <i></i>"
      >
        <i>I</i>
      </button>
      <button
        className="btn tooltip join-item border-2 border-gray-500"
        onClick={() => toolBarFunction("<hr/>")}
        data-tip="add a divider which divides the text |"
      >
        divider
      </button>
    </div>
  );
}

export default LatexToolBar;
