"use client";
import React, { useState } from "react";
import Toast from "../components/Toast";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

function page(props) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loginPressed, setLoginPressed] = useState(false);
  const [toastText, setToastText] = useState("");
  const [text, setText] = useState("");
  const [actionState, setActionState] = useState("ADD");
  const [problemText, setProblemText] = useState("");

  const loginBtnClick = (e) => {
    e.preventDefault();

    const password = document.getElementById("loginTextInput").value;
    setText(password);
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthenticated(true);
      setToastText("Login Success! ✅");
    } else {
      setToastText("Invalid Credentials ❌");
    }
    setTimeout(() => {
      setToastText("");
    }, 5000);
  };
  const compileBtnClick = (e) => {
    e.preventDefault();

    const qnText = document.getElementById("qnTextInput").value;
    const ansText = document.getElementById("ansTextInput").value;

    const finalText = qnText + ` <br/> ` + ansText;
    setProblemText(finalText);
  };
  return (
    <main className="min-h-screen mt-20 h-full flex justify-center items-center">
      {authenticated !== true ? (
        <main className="flex flex-col justify-center items-center gap-3 h-full max-h-screen">
          <p>ADMIN LOGIN</p>
          <form action="post" onSubmit={loginBtnClick}>
            <input
              type="password"
              placeholder="Enter here"
              className="input input-bordered w-full max-w-xs"
              id="loginTextInput"
            />
            <button
              type="submit"
              className={`btn btn-neutral max-w-xs mt-5 ${
                loginPressed ? "btn-disabled" : ""
              }`}
            >
              LOGIN
            </button>
          </form>
        </main>
      ) : (
        <main className="w-full flex flex-col justify-center items-center gap-5 px-4 md:px-2">
          <h1>ADMIN PANEL</h1>
          <div className="w-full flex flex-col justify-center items-center gap-5 md:flex-row">
            <select className="select select-bordered w-full max-w-sm md:max-w-xs">
              <option>12th Standard</option>
              <option>11th Standard</option>
              <option>10th Standard</option>
            </select>
            <select className="select select-bordered w-full max-w-sm md:max-w-xs">
              <option>Mathematics</option>
            </select>
          </div>
          <select className="select select-bordered w-full max-w-sm md:max-w-md">
            <option>Chapter 1 Applications of Matrices and Determinants</option>
          </select>
          <select className="select select-bordered w-full max-w-sm md:max-w-xs">
            <option>Excercise 1.1</option>
          </select>
          <h3>Click Anyone of the following Action...</h3>
          <div className="flex flex-row flex-wrap gap-3">
            <button
              className={`btn ${
                actionState === "ADD" ? "" : "btn-outline"
              } btn-neutral`}
            >
              ADD
            </button>
            <button className="btn btn-outline btn-neutral">UPDATE</button>
            <button className="btn btn-outline btn-neutral">DELETE</button>
          </div>
          <div className="w-full flex flex-col md:flex-row border-2 border-gray-400 mb-5 max-w-7xl">
            <div className="w-full flex flex-col border-b-2 md:border-b-0 md:border-r-2 border-gray-400 p-3 gap-3">
              <textarea
                className="textarea textarea-bordered"
                placeholder="Enter Question"
                id="qnTextInput"
              ></textarea>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Enter Answer"
                id="ansTextInput"
              ></textarea>
              <button className="btn btn-primary" onClick={compileBtnClick}>
                COMPILE
              </button>
            </div>
            <div className="w-full p-3 pb-10">
              <h3 className="bg-gray-700 p-2 text-gray-200 font-bold mb-2">
                LATEX VIEW
              </h3>
              {problemText != "" ? (
                <Latex>{problemText}</Latex>
              ) : (
                <p>No Text</p>
              )}
            </div>
          </div>
        </main>
      )}
      <Toast
        toastVisibility={toastText === "" ? false : true}
        toastText={toastText}
      />
    </main>
  );
}

export default page;
