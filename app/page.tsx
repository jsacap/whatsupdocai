"use client";
import Image from "next/image";

import ChatRoom from "@/components/ChatRoom";
import FileUploader from "./components/Fi";
import { IFile, fetchFiles } from "@/services/file";
import { IRoom, createRoom, fetchRooms } from "@/services/room";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { useEffect, useState, MouseEvent } from "react";

export default function Home() {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [files, setFiles] = useState<IFile[]>([]);
  const [roomId, setRoomId] = useState<number | undefined>(undefined);
  const [fileId, setFileId] = useState<number | undefined>(undefined);

  const onSaveFile = (file: IFile) => setFiles((v) => [file, ...v]);

  const handleCreateRoom = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const newRoom = await createRoom();
      setRooms((v) => [newRoom, ...v]);
      setRoomId(newRoom.id);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelectRoom =
    (id: number | undefined) => (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      setRoomId(id);
    };

  const handleSelectFile =
    (id: number | undefined) => (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      setFileId(id);
    };

  useEffect(() => {
    (async () => {
      try {
        const rooms = await fetchRooms();
        setRooms(rooms);

        const files = await fetchFiles();
        setFiles(files);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <Button
          className="w-full mb-4"
          variant="default"
          onClick={handleCreateRoom}
        >
          New Chat
        </Button>
        <Separator className="my-4" />
        <div className="space-y-2">
          {rooms.map((room, i) => (
            <Card
              key={i}
              className={`cursor-pointer p-4 ${
                roomId === room.id ? "bg-gray-200" : ""
              }`}
              onClick={handleSelectRoom(room.id)}
            >
              <CardContent>{room.created_at?.toString()}</CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="w-1/4 p-4">
        <FileUploader onSave={onSaveFile} />
        <Separator className="my-4" />
        <div className="space-y-2">
          {files.map((file, i) => (
            <Card
              key={i}
              className={`cursor-pointer p-4 ${
                fileId === file.id ? "bg-gray-200" : ""
              }`}
              onClick={handleSelectFile(file.id)}
            >
              <CardContent>{file.name}</CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex-1 p-4">
        {roomId && fileId ? (
          <ChatRoom roomId={roomId as number} fileId={fileId as number} />
        ) : (
          <p>Select one room and one file</p>
        )}
      </div>
    </div>
  );
}
