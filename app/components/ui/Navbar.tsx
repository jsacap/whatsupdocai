"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarOpacity = Math.max(1 - scrollPosition / 300, 0.5);

  return (
    <nav
      className="bg-[#e0e0db] p-4 fixed w-full top-0 shadow-lg z-50 transition-opacity duration-500"
      style={{ opacity: navbarOpacity }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-primary text-xl font-bold">WhatsUpDocAi</h1>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-primary hover:underline">
            Features
          </a>
          <a href="#pricing" className="text-primary hover:underline">
            Pricing
          </a>
          <a href="#about" className="text-primary hover:underline">
            About
          </a>
        </div>

        {/* Sign Up / Log In Buttons */}
        <div className="flex space-x-4">
          <a
            href="/login"
            className="px-4 py-2 bg-transparent text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition"
          >
            Log In
          </a>
          <a
            href="/signup"
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
