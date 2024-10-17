import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#e0e0db] text-[#253551] py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left: Text and Button */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-6xl font-bold leading-tight">
            Chat with Your PDF Docs Using AI
          </h1>
          <p className="mt-4 text-lg max-w-md">
            Welcome to <strong>WhatsUpDocAi</strong>, the AI-driven platform
            that lets you have intelligent conversations with your PDF
            documents. Upload, ask questions, and get insights instantly.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#253551] text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
            Get Started
          </button>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/hero2.webp"
            alt="AI-powered PDF document chat"
            width={500}
            height={400}
            className="shadow-md"
            style={{ borderRadius: "1rem" }}
          />
        </div>
      </div>
    </section>
  );
}
