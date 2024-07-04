import { NextResponse } from "next/server";
import { mysqlQuery } from "@/app/lib/db";

// FINISH
export async function GET(req, res) {
  const URLSearchParams = req.nextUrl.searchParams;
  const ExerciseID = URLSearchParams.get("ex");

  const problems = await mysqlQuery({
    query: `SELECT * FROM Problems WHERE ExerciseID = ?;`,
    values: [ExerciseID],
  });

  return NextResponse.json({ problems: problems }, { status: 200 });
}
export async function POST(req, res) {
  try {
    const { QuestionText, AnswerText, ExerciseID } = await req.json();
    const results = await mysqlQuery({
      query: `INSERT INTO Problems (QuestionText,AnswerText,ExerciseID) VALUES (?,?,?);`,
      values: [QuestionText, AnswerText, ExerciseID],
    });
    console.log(results.insertId);
    return NextResponse.json(
      { message: "Math Problem Created...", ProblemID: results.insertId },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// HAVE TO UPDATE

export async function PUT(req, res) {
  try {
    const { QuestionText, AnswerText, ExerciseID } = await req.json();
    const results = await mysqlQuery({
      query: `INSERT INTO Problems (QuestionText,AnswerText,ExerciseID) VALUES (?,?,?);`,
      values: [QuestionText, AnswerText, ExerciseID],
    });
    console.log(results.insertId);
    return NextResponse.json(
      { message: "Math Problem Created...", ProblemID: results.insertId },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
export async function DELETE(req, res) {
  return NextResponse.json("DELETE PROBLEMS", { status: 200 });
}
