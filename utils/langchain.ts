import { OpenAI } from "langchain";

const openAi = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getLangchainResponse(query: string) {
  // Assuming Langchain is already configured with OpenAI to process queries.
  const response = await openAi.call({ query });
  return response.data?.text || "Sorry, I could not understand.";
}
