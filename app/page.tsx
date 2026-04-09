import Hero from "@/sections/Hero";
import Problem from "@/sections/Problem";
import Solution from "@/sections/Solution";
import HowItWorks from "@/sections/HowItWorks";
import Benefits from "@/sections/Benefits";
import Trust from "@/sections/Trust";
import CTA from "@/sections/CTA";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-900">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Benefits />
        <Trust />
        <CTA />
      </main>
    </>
  );
}