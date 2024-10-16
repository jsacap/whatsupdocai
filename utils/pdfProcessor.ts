import pdf from "pdf-parse";

export async function extractTextFromPDF(file: Buffer): Promise<string> {
  try {
    const data = await pdf(file);
    return data.text;
  } catch (error) {
    console.error("PDF extraction error:", error);
    return "";
  }
}
