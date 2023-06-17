export const runtime = "edge";
export const preferredRegion = "lhr1";

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ type: "edge" });
}
