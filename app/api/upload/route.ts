import { NextRequest, NextResponse } from "next/server";
import { extractTextFromPDF } from "@/utils/pdfProcessor";
import { getLangchainResponse } from "@/utils/langchain";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  // Convert File to Buffer
  const buffer = Buffer.from(await file.arrayBuffer());

  // Extract text from PDF
  const pdfText = await extractTextFromPDF(buffer);

  // Process extracted text with Langchain/OpenAI
  const response = await getLangchainResponse(pdfText);

  return NextResponse.json({ message: response });
}
