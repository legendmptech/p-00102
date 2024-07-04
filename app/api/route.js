import { NextResponse } from "next/server";
import { mysqlQuery } from "@/app/lib/db";

export async function GET(req, res) {
  return NextResponse.json("GET", { status: 200 });
}
