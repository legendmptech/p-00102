import { NextResponse } from "next/server";
import { mysqlQuery } from "@/app/lib/db";

export async function GET(req, { params: { id } }) {
  const exercises = await mysqlQuery({
    query: `SELECT * FROM Exercises WHERE ExerciseID = ? LIMIT 1;`,
    values: [id],
  });
  if (exercises.length == 0) {
    return NextResponse.json(
      {
        message: `No Exercise found for the given Exercise id = ${id}`,
        statusText: "FAIL",
      },
      { status: 200 }
    );
  }
  return NextResponse.json(
    {
      exercises: exercises,
      message: "Successfully retrieved Exercises...",
      statusText: "SUCCESS",
    },
    { status: 200 }
  );
}
