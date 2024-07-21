import { NextResponse } from "next/server";
import { mysqlQuery } from "@/app/lib/db";

export async function GET(req, res) {
  const classes = await mysqlQuery({
    query: `SELECT * FROM Classes;`,
    values: [],
  });
  return NextResponse.json(
    {
      classes: classes,
      message: "Successfully retrieved Classes...",
      statusText: "SUCCESS",
    },
    { status: 200 }
  );
}
