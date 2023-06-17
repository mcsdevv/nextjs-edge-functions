import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.text("hi there");
}
