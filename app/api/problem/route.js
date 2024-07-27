import { NextResponse } from "next/server";
import { mysqlQuery } from "@/app/lib/db";

export async function GET(req, res) {
  const URLSearchParams = req.nextUrl.searchParams;
  const id = URLSearchParams.get("id");

  const problems = await mysqlQuery({
    query: `SELECT * FROM Problems WHERE ProblemID = ? LIMIT 1;`,
    values: [id],
  });

  if (problems.length == 0) {
    return NextResponse.json(
      { message: `No Problem Found for the id = ${id}`, statusText: "FAIL" },
      { status: 200, statusText: "OK" }
    );
  }
  return NextResponse.json(
    {
      message: `Successfully retrieved Problem...`,
      problem: problems[0],
      statusText: "SUCCESS",
    },
    { status: 200, statusText: "OK" }
  );
}
export async function POST(req, res) {
  try {
    const { QuestionText, AnswerText, ExerciseID } = await req.json();
    const results = await mysqlQuery({
      query: `INSERT INTO Problems (QuestionText,AnswerText,ExerciseID) VALUES (?,?,?);`,
      values: [QuestionText, AnswerText, ExerciseID],
    });
    return NextResponse.json(
      {
        message: "Math Problem Created...",
        ProblemID: results.insertId,
        statusText: "SUCCESS",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
export async function PUT(req, res) {
  try {
    const { QuestionText, AnswerText, ProblemID } = await req.json();
    await mysqlQuery({
      query: `UPDATE Problems SET  QuestionText = ?,AnswerText = ? WHERE ProblemID = ?;`,
      values: [QuestionText, AnswerText, ProblemID],
    });
    return NextResponse.json(
      { message: "Updated Problem...", ProblemID },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
export async function DELETE(req, res) {
  const URLSearchParams = req.nextUrl.searchParams;
  const ProblemID = URLSearchParams.get("problemid");
  try {
    await mysqlQuery({
      query: `DELETE FROM Problems WHERE ProblemID = ?;`,
      values: [ProblemID],
    });
    return NextResponse.json(
      { message: "Deleted Problem...", ProblemID, statusText: "SUCCESS" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
