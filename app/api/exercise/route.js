import { NextResponse } from "next/server";
import { mysqlQuery } from "@/app/lib/db";

export async function GET(req, res) {
  const URLSearchParams = req.nextUrl.searchParams;
  const ChapterID = URLSearchParams.get("chapterid");

  const exercises = await mysqlQuery({
    query: `SELECT * FROM Exercises WHERE ChapterID = ?;`,
    values: [ChapterID],
  });

  if (exercises.length == 0) {
    return NextResponse.json(
      {
        message: `No Exercise found for the given Chapter id = ${ChapterID}`,
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
