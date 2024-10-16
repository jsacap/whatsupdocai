import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FiUploadCloud } from "react-icons/fi";

interface FileUploadProps {
  onUpload: (file: File) => void;
}

export default function FileUpload({ onUpload }: FileUploadProps) {
  const { register, handleSubmit } = useForm();
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onUpload(file);
    }
  };

  return (
    <form className="flex flex-col items-center gap-4 mt-4">
      <label className="border-dashed border-2 border-gray-600 p-8 rounded-lg w-full text-center">
        <input
          {...register("file")}
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
        <FiUploadCloud className="text-cyan-400 text-3xl mb-2" />
        {fileName ? (
          <p>{fileName}</p>
        ) : (
          <p>Drag & drop your document or click to upload</p>
        )}
      </label>
    </form>
  );
}
