import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Message from "./Message";

export default function ChatInterface() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);

    // Placeholder - replace with API call to Langchain integration.
    const response = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();

    setMessages([...messages, newMessage, { sender: "ai", text: data.reply }]);
    setInput("");
  };

  return (
    <div className="mt-6 w-full max-w-2xl mx-auto p-4 bg-gray-800 rounded-lg shadow-lg">
      <div className="h-96 overflow-y-auto flex flex-col gap-4 p-4">
        {messages.map((msg, index) => (
          <Message
            key={index}
            sender={msg.sender as "user" | "ai"}
            text={msg.text}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Input
          className="w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}
