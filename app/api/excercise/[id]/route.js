import { NextResponse } from "next/server";
import { mysqlQuery } from "@/app/lib/db";

export async function GET(req, res) {
  return NextResponse.json("from Excercise", { status: 200 });
}
export async function POST(req, res) {
  return NextResponse.json("from Excercise", { status: 200 });
}
export async function UPDATE(req, res) {
  return NextResponse.json("from Excercise", { status: 200 });
}
export async function DELETE(req, res) {
  return NextResponse.json("from Excercise", { status: 200 });
}
