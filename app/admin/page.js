"use client";
import React, { useEffect, useState } from "react";
import Toast from "../components/Toast";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import {
  getAllChaptersBySubjectId,
  getAllClasses,
  getAllExercisesByChapterId,
  getAllProblemsByExerciseId,
  getAllSubjectsByClassId,
  getProblemById,
} from "../lib/db";
import LatexToolBar from "../components/Latex/LatexToolBar";

function page(props) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loginPressed, setLoginPressed] = useState(false);
  const [toastText, setToastText] = useState("");
  const [text, setText] = useState("");
  const [actionState, setActionState] = useState("");
  const [problemText, setProblemText] = useState("");

  // DATABASE USED STATES

  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [problems, setProblems] = useState([]);
  const [problem, setProblem] = useState({});

  // UI USED STATES
  const [focusedTextInput, setFocusedTextInput] = useState(null);

  useEffect(() => {
    const fetchClasses = async () => {
      const result = await getAllClasses();
      console.log("Hello", result);
      setClasses(result);
    };

    fetchClasses();
  }, []);

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
            <select
              className="select select-bordered w-full max-w-sm md:max-w-xs"
              id="classDropDown"
              onChange={async () => {
                const classid = document.getElementById("classDropDown").value;
                toastFunction(classid);

                const fetchSubjects = async () => {
                  const result = await getAllSubjectsByClassId(classid);
                  console.log("Hello", result);
                  setSubjects(result);
                };
                await fetchSubjects();
              }}
            >
              <option value={0} key={0}>
                Select Standard
              </option>
              {classes?.map(({ ClassID, ClassName }) => (
                <option value={ClassID} key={ClassID}>
                  {ClassName}
                </option>
              ))}
            </select>
            <select
              className="select select-bordered w-full max-w-sm md:max-w-xs"
              id="subjectDropDown"
              onChange={async () => {
                const subjectid =
                  document.getElementById("subjectDropDown").value;
                toastFunction(subjectid);

                const fetchChapters = async () => {
                  const result = await getAllChaptersBySubjectId(subjectid);
                  console.log("chapters", result);
                  setChapters(result);
                };

                await fetchChapters();
              }}
            >
              <option value={0} key={0}>
                Select Subject
              </option>
              {subjects?.map(({ SubjectID, SubjectName }) => (
                <option value={SubjectID} key={SubjectID}>
                  {SubjectName}
                </option>
              ))}
            </select>
          </div>
          <select
            className="select select-bordered w-full max-w-sm md:max-w-md"
            id="chapterDropDown"
            onChange={async () => {
              const exerciseid =
                document.getElementById("chapterDropDown").value;
              toastFunction(exerciseid);

              const fetchExercises = async () => {
                const result = await getAllExercisesByChapterId(exerciseid);
                console.log("exercises", result);
                setExercises(result);
              };

              await fetchExercises();
            }}
          >
            <option value={0}>Select Chapter</option>
            {chapters?.map(({ ChapterID, ChapterName }) => (
              <option value={ChapterID} key={ChapterID}>
                {ChapterName}
              </option>
            ))}
          </select>
          <select
            className="select select-bordered w-full max-w-sm md:max-w-md"
            id="exerciseDropDown"
            onChange={async () => {
              const exerciseid =
                document.getElementById("exerciseDropDown").value;
              toastFunction(exerciseid);
              const fetchProblems = async () => {
                const result = await getAllProblemsByExerciseId(exerciseid);
                console.log("problems", result);
                setProblems(result?.problems);
              };

              if (exerciseid != 0) {
                setActionState("ADD");
              }
              await fetchProblems();
            }}
          >
            <option value={0} key={0}>
              Select Exercise
            </option>
            {exercises?.map(({ ExerciseID, ExerciseName }) => (
              <option value={ExerciseID} key={ExerciseID}>
                {ExerciseName}
              </option>
            ))}
          </select>
          {/* ACTION BUTTON */}
          {actionState !== "" && (
            <>
              <h3>Click Anyone of the following Action...</h3>
              <div className="join">
                <input
                  className="join-item btn"
                  type="radio"
                  name="options"
                  onClick={() => setActionState("ADD")}
                  aria-label="ADD"
                  defaultChecked
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
          {actionState == "" && (
            <div
              className={`w-full ${
                actionState == "DELETE" ? "md:w-1/2 md:justify-center" : ""
              } flex flex-col md:flex-row border-2 border-gray-400 mb-5 max-w-7xl`}
            >
              <div
                className={`w-full flex flex-col border-b-2 md:border-b-0 md:border-r-2 border-gray-400 p-3 gap-3`}
              >
                {actionState !== "ADD" && (
                  <select
                    className="select select-bordered w-full"
                    id="problemDropDown"
                    onChange={async () => {
                      const problemid =
                        document.getElementById("problemDropDown").value;
                      toastFunction(problemid);

                      const fetchProblem = async () => {
                        const result = await getProblemById(problemid);
                        const qnTextInput =
                          document.getElementById("qnTextInput");
                        const ansTextInput =
                          document.getElementById("ansTextInput");
                        qnTextInput.value = result?.QuestionText;
                        ansTextInput.value = result?.AnswerText;
                      };

                      await fetchProblem();
                    }}
                  >
                    <option value={0}>Select Problems</option>
                    {problems?.map(
                      ({ ProblemID, QuestionText, AnswerText }) => (
                        <option value={ProblemID} key={ProblemID}>
                          {QuestionText}
                        </option>
                      )
                    )}
                  </select>
                )}
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Enter Question"
                  id="qnTextInput"
                  onFocus={() => setFocusedTextInput("qnTextInput")}
                ></textarea>
                <LatexToolBar focusedTextInput={focusedTextInput} />
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Enter Answer"
                  id="ansTextInput"
                  onFocus={() => setFocusedTextInput("ansTextInput")}
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
