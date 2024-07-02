import React, { useState } from "react";

function Toast(props) {
  return (
    <div className={`toast ${props?.toastVisibility ? "" : "invisible"}`}>
      <div
        className="alert alert-info bg-gray-800"
        style={{ borderRadius: "5px" }}
      >
        <span className="text-white">{props?.toastText}</span>
      </div>
    </div>
  );
}

export default Toast;
