import { NextResponse } from "next/server";
import { mysqlQuery } from "@/app/lib/db";

export async function GET(req, res) {
  const URLSearchParams = req.nextUrl.searchParams;
  const ExerciseID = URLSearchParams.get("ex");

  const problems = await mysqlQuery({
    query: `SELECT * FROM Problems WHERE ExerciseID = ?;`,
    values: [ExerciseID],
  });
  const exercise = await mysqlQuery({
    query: `SELECT * FROM Exercises WHERE ExerciseID = ? LIMIT 1;`,
    values: [ExerciseID],
  });

  if (problems.length == 0) {
    return NextResponse.json(
      {
        message: `No Math Problem found for the given exercise id = ${ExerciseID}`,
        statusText: "FAIL",
      },
      { status: 200 }
    );
  }
  return NextResponse.json(
    {
      problems: problems,
      exercise: exercise[0],
      message: "Successfully retrieved Problems...",
      statusText: "SUCCESS",
    },
    { status: 200 }
  );
}
