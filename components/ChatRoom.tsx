import { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Progress } from "@radix-ui/react-progress";
import { IChat, fetchChats, getAnswer, postChat } from "@/services/chat";

export default function ChatRoom({
  roomId,
  fileId,
}: {
  roomId: number;
  fileId: number;
}) {
  const [message, setMessage] = useState<string>("");
  const [chats, setChats] = useState<IChat[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const onChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  const onSubmitInput = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!message) return;
    const currChats = [...chats];
    try {
      setSubmitting(true);
      const chat = await postChat({
        role: "user",
        room: roomId,
        message,
      });

      setMessage("");
      currChats.push(chat);

      const answer = await getAnswer(chat, fileId);
      currChats.push(answer);

      setChats(currChats);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        if (typeof roomId !== "undefined") {
          const chats = await fetchChats(roomId);
          setChats(chats);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [roomId]);

  return (
    <div>
      <div className="space-y-4 mb-4">
        {chats.map((chat, i) => (
          <div
            key={i}
            className={`flex ${
              chat.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <Card className="min-w-[250px] max-w-[1000px] p-4 border border-gray-500 rounded-lg">
              <CardContent>
                <p className="whitespace-pre-line break-words mb-2">
                  {chat.message}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {submitting && <Progress className="mb-4" />}

      <Textarea
        className="w-full mb-4"
        value={message}
        placeholder="Write Something ..."
        onChange={onChangeInput}
        rows={2}
        maxLength={1000}
      />

      <Button className="w-full" onClick={onSubmitInput} disabled={submitting}>
        Send
      </Button>
    </div>
  );
}
