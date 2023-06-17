export const runtime = "edge";
export const preferredRegion = "fra1";

import { db } from "@lib/kysely";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
  console.time("token");
  const token = await getToken({ req });
  console.timeEnd("token");

  if (!token?.sub) {
    return NextResponse.redirect("/");
  }

  console.time("data");
  const data = await db
    .selectFrom("User")
    .selectAll()
    .where("id", "=", token.sub)
    .executeTakeFirst();
  console.timeEnd("data");

  return NextResponse.json(data);
}
