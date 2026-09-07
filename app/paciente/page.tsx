import Hero from "@/sections/paciente/Hero";
import Problem from "@/sections/paciente/Problem";
import Solution from "@/sections/paciente/Solution";
import HowItWorks from "@/sections/paciente/HowItWorks";
import Benefits from "@/sections/paciente/Benefits";
import Trust from "@/sections/paciente/Trust";
import CTA from "@/sections/paciente/CTA";
import Navbar from "@/components/paciente/Navbar";

export default function PacientePage() {
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
