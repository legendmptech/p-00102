import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json("Hello", { status: 200 });
}
