import { ChangeEvent, MouseEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IFile, saveFile } from "@/services/file";

export default function FileUploader({
  onSave,
}: {
  onSave: (file: IFile) => void;
}) {
  const [inputFile, setInputFile] = useState<File | undefined>(undefined);
  const [uploading, setUploading] = useState<boolean>(false);

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    setInputFile(file);
  };

  const handleSaveFile = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!inputFile) return;
    try {
      setUploading(true);
      const file = await saveFile(inputFile);
      onSave(file);
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <Card className="mb-4 p-4">
        <label htmlFor="file-uploader" className="block mb-2">
          <input
            accept="application/pdf"
            id="file-uploader"
            type="file"
            className="hidden"
            onChange={onChangeFile}
          />
          <Button variant="outline" className="w-full" asChild>
            <span>{inputFile ? inputFile.name : "Select File"}</span>
          </Button>
        </label>
      </Card>

      <Button
        className="w-full"
        variant="default"
        onClick={handleSaveFile}
        disabled={!inputFile || uploading}
      >
        Upload
      </Button>
    </div>
  );
}
