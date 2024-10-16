interface MessageProps {
  sender: "user" | "ai";
  text: string;
}

export default function Message({ sender, text }: MessageProps) {
  return (
    <div
      className={`p-4 rounded-lg ${
        sender === "user"
          ? "bg-cyan-700 text-right ml-auto"
          : "bg-gray-700 text-left mr-auto"
      }`}
    >
      <p>{text}</p>
    </div>
  );
}
