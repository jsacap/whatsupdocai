// utils/langchain.ts

import { ChatOpenAI } from "langchain/chat_models/openai";
import { AIMessage, HumanMessage } from "langchain/schema";

const model = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.7,
});

export async function getLangchainResponse(query: string) {
  try {
    const response = await model.call([new HumanMessage(query)]);
    return response.content;
  } catch (error) {
    console.error("Langchain error:", error);
    return "There was an error while processing your request.";
  }
}
