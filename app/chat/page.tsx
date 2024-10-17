"use client";
import ChatRoom from "@/components/ChatRoom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IFile, deleteFile, fetchFiles } from "@/services/file";
import { IRoom, createRoom, deleteRoom, fetchRooms } from "@/services/room";
import { Separator } from "@radix-ui/react-separator";
import { MouseEvent, useEffect, useState } from "react";
import FileUploader from "../components/Fi";

export default function ChatHome() {
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
      setFileId(undefined);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteRoom = async (roomId: number) => {
    try {
      await deleteRoom(roomId);
      setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
      if (roomId === roomId) {
        setRoomId(undefined); // Clear selected room if it was deleted
      }

      // Clear chat content
      setFileId(undefined); // Clear selected file if the room is deleted
    } catch (err) {
      console.error("Error deleting room:", err);
    }
  };

  const handleDeleteFile = async (fileId: number) => {
    try {
      await deleteFile(fileId);
      setFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileId));
      if (fileId === fileId) {
        setFileId(undefined);
      }
    } catch (err) {
      console.error("Error deleting file:", err);
    }
  };

  const handleSelectRoom =
    (id: number | undefined) => (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (id !== undefined) {
        setRoomId(id);
      }
    };

  const handleSelectFile =
    (id: number | undefined) => (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (id !== undefined) {
        setFileId(id);
      }
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
            >
              <div className="flex justify-between items-center">
                <CardContent onClick={handleSelectRoom(room.id)}>
                  {room.created_at?.toString()}
                </CardContent>
                <Button
                  variant="destructive"
                  className="ml-2"
                  onClick={() =>
                    room.id !== undefined && handleDeleteRoom(room.id)
                  }
                >
                  Delete
                </Button>
              </div>
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
            >
              <div className="flex justify-between items-center">
                <CardContent onClick={handleSelectFile(file.id)}>
                  {file.name}
                </CardContent>
                <Button
                  variant="destructive"
                  className="ml-2"
                  onClick={() =>
                    file.id !== undefined && handleDeleteFile(file.id)
                  }
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex-1 p-4">
        {roomId && fileId ? (
          <ChatRoom roomId={roomId!} fileId={fileId!} />
        ) : (
          <p>Select one room and one file</p>
        )}
      </div>
    </div>
  );
}
