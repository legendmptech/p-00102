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
  const [actionState, setActionState] = useState("");
  const [problemText, setProblemText] = useState("");

  // DATABASE USED STATES

  const [classes, setClasses] = useState([
    { id: 1, className: "12th Standard" },
    { id: 2, className: "11th Standard" },
    { id: 3, className: "10th Standard" },
  ]);
  const [subjects, setSubjects] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [excercises, setExcercises] = useState([
    // { id: 1, excerciseName: "Excercise 1.1" },
  ]);
  const [problems, setProblems] = useState([]);

  const loginBtnClick = (e) => {
    e.preventDefault();

    const password = document.getElementById("loginTextInput").value;
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthenticated(true);
      toastFunction("Login Success! ✅");
    } else {
      toastFunction("Invalid Credentials ❌");
    }
  };
  const compileBtnClick = (e) => {
    e.preventDefault();

    const qnText = document.getElementById("qnTextInput").value;
    const ansText = document.getElementById("ansTextInput").value;

    const finalText = qnText + ` <br/> ` + ansText;
    setProblemText(finalText);
  };
  const toastFunction = (text) => {
    setToastText(text);
    setTimeout(() => setToastText(""), 5000);
  };
  const databaseQueryFunction = () => {
    if (actionState === "ADD") {
    }
    if (actionState === "UPDATE") {
    }
    if (actionState === "DELETE") {
    }
  };
  return (
    <main className="min-h-screen mt-20 h-full flex justify-center items-center">
      {authenticated === true ? (
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
        <main className="w-full flex flex-col justify-center items-center gap-5 px-4 md:px-2 mb-60 md:mb-96">
          <h1>ADMIN PANEL</h1>
          <div className="w-full flex flex-col justify-center items-center gap-5 md:flex-row">
            <select className="select select-bordered w-full max-w-sm md:max-w-xs">
              <option value={0} key={0}>
                Select Standard
              </option>
              {classes?.map(({ id, className }) => (
                <option value={id} key={id}>
                  {className}
                </option>
              ))}
            </select>
            <select className="select select-bordered w-full max-w-sm md:max-w-xs">
              <option value={0} key={0}>
                Select Subject
              </option>
              {subjects?.map(({ id, subjectName }) => (
                <option value={id} key={id}>
                  {subjectName}
                </option>
              ))}
            </select>
          </div>
          <select className="select select-bordered w-full max-w-sm md:max-w-md">
            <option value={0}>Select Chapter</option>
            {chapters?.map(({ id, chapterName }) => (
              <option value={id}>{chapterName}</option>
            ))}
          </select>
          <select className="select select-bordered w-full max-w-sm md:max-w-xs">
            <option value={0} key={0}>
              Select Exercise
            </option>
            {excercises?.map(({ id, excerciseName }) => (
              <option value={id} key={id}>
                {excerciseName}
              </option>
            ))}
          </select>
          {excercises.length !== 0 && (
            <>
              <h3>Click Anyone of the following Action...</h3>
              <div className="join">
                <input
                  className="join-item btn"
                  type="radio"
                  name="options"
                  onClick={() => setActionState("ADD")}
                  aria-label="ADD"
                  // checked
                />
                <input
                  className="join-item btn"
                  type="radio"
                  onClick={() => setActionState("UPDATE")}
                  name="options"
                  aria-label="UPDATE"
                />
                <input
                  className="join-item btn"
                  type="radio"
                  onClick={() => setActionState("DELETE")}
                  name="options"
                  aria-label="DELETE"
                />
              </div>
            </>
          )}
          {/* EDITOR */}
          {actionState !== "" && (
            <div
              className={`w-full ${
                actionState == "DELETE" ? "md:w-1/2 md:justify-center" : ""
              } flex flex-col md:flex-row border-2 border-gray-400 mb-5 max-w-7xl`}
            >
              <div
                className={`w-full flex flex-col border-b-2 md:border-b-0 md:border-r-2 border-gray-400 p-3 gap-3`}
              >
                {actionState !== "ADD" && (
                  <select className="select select-bordered w-full">
                    <option key={0}>
                      Chapter 1 Applications of Matrices and Determinants
                    </option>
                  </select>
                )}
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
                <button
                  className={`btn btn-primary ${
                    actionState === "DELETE" ? "btn-error" : ""
                  }`}
                  onClick={compileBtnClick}
                >
                  {actionState == "DELETE" ? "DELETE PROBLEM" : "COMPILE"}
                </button>
              </div>
              {actionState !== "DELETE" && (
                <div className="w-full p-3">
                  <h3 className="bg-gray-700 p-2 text-gray-200 font-bold mb-2">
                    LATEX VIEW
                  </h3>
                  {problemText != "" ? (
                    <Latex>{problemText}</Latex>
                  ) : (
                    <p>No Text</p>
                  )}
                  <br />
                  <br />
                  {problemText != "" && (
                    <button className="btn btn-success">
                      {actionState === "UPDATE" ? "UPDATE" : "ADD"}
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
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
