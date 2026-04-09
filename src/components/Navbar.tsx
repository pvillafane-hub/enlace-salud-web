"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a href="#" className="text-xl font-bold text-[#2563EB]">
          Enlace Salud
        </a>

        {/* CTA */}
        <button
          onClick={() =>
            window.open(
              "https://wa.me/17879444563?text=Hola,%20quiero%20ver%20una%20demo%20de%20Enlace%20Salud",
              "_blank"
            )
          }
          className="bg-blue-700 text-white px-6 py-2 rounded-xl text-sm font-semibold hover:bg-blue-800 transition shadow-md hover:scale-105"
        >
          Agenda Demo
        </button>

      </div>
    </nav>
  );
}