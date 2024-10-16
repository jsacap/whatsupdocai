import { NextRequest, NextResponse } from "next/server";
import { getLangchainResponse } from "@/utils/langchain";

export async function POST(request: NextRequest) {
  const { message } = await request.json();
  const response = await getLangchainResponse(message);
  return NextResponse.json({ reply: response });
}
