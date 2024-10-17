import Features from "./components/Features";
import Hero from "./components/Hero";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Features />
    </main>
  );
}
