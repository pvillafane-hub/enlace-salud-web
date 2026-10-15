import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { audiences } from "@/lib/landing-content";

export const metadata: Metadata = {
  title: "Para pacientes y familias | Enlace Salud",
  description: audiences.paciente.intro,
};

export default function Page() {
  return <LandingPage audience="paciente" />;
}
