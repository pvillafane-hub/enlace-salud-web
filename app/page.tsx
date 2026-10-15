import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { audiences } from "@/lib/landing-content";

export const metadata: Metadata = {
  title: "Para doctores | Enlace Salud",
  description: audiences.doctor.intro,
};

export default function Page() {
  return <LandingPage audience="doctor" />;
}
