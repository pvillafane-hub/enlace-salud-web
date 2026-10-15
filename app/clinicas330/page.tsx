import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { audiences } from "@/lib/landing-content";

export const metadata: Metadata = {
  title: "Para clínicas y centros 330 | Enlace Salud",
  description: audiences.clinicas330.intro,
};

export default function Page() {
  return <LandingPage audience="clinicas330" />;
}
