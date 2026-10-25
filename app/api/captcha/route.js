import { NextResponse } from "next/server";
import { createChallenge } from "@/lib/challenge";

export async function GET() {
  return NextResponse.json(createChallenge());
}
