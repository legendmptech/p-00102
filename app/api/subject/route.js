import { NextResponse } from "next/server";
import { mysqlQuery } from "@/app/lib/db";

export async function GET(req, res) {
  const URLSearchParams = req.nextUrl.searchParams;
  const ClassID = URLSearchParams.get("classid");

  const subjects = await mysqlQuery({
    query: `SELECT * FROM Subjects WHERE ClassID = ?;`,
    values: [ClassID],
  });

  if (subjects.length == 0) {
    return NextResponse.json(
      {
        message: `No Subject found for the given Class id = ${ClassID}`,
        statusText: "FAIL",
      },
      { status: 200 }
    );
  }
  return NextResponse.json(
    {
      subjects: subjects,
      message: "Successfully retrieved Subjects...",
      statusText: "SUCCESS",
    },
    { status: 200 }
  );
}
