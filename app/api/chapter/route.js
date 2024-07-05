import { NextResponse } from "next/server";
import { mysqlQuery } from "@/app/lib/db";

export async function GET(req, res) {
  const URLSearchParams = req.nextUrl.searchParams;
  const SubjectID = URLSearchParams.get("subjectid");

  const chapters = await mysqlQuery({
    query: `SELECT * FROM Chapters WHERE SubjectID = ?;`,
    values: [SubjectID],
  });

  if (chapters.length == 0) {
    return NextResponse.json(
      {
        message: `No Chapter found for the given Subject id = ${SubjectID}`,
        statusText: "FAIL",
      },
      { status: 200 }
    );
  }
  return NextResponse.json(
    {
      chapters: chapters,
      message: "Successfully retrieved Chapters...",
      statusText: "SUCCESS",
    },
    { status: 200 }
  );
}
