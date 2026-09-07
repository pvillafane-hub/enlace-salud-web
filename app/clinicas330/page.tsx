import Hero from "@/sections/clinicas330/Hero";
import Problem from "@/sections/clinicas330/Problem";
import Solution from "@/sections/clinicas330/Solution";
import HowItWorks from "@/sections/clinicas330/HowItWorks";
import Benefits from "@/sections/clinicas330/Benefits";
import Trust from "@/sections/clinicas330/Trust";
import CTA from "@/sections/clinicas330/CTA";
import Navbar from "@/components/clinicas330/Navbar";

export default function Clinicas330Page() {
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
