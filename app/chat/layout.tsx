import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-grow mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 mt-20 justify-center items-center">
        {children}
      </div>
    </div>
  );
}
