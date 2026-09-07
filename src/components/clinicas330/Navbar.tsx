"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
          ? "bg-white/85 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a
          href="/clinicas330"
          className="flex items-center gap-3"
        >
          <Image
            src="/asppr-logo.png"
            alt="Asociación de Salud Primaria de Puerto Rico"
            width={150}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />

          <span className="text-gray-400 text-xl font-medium">
            +
          </span>

          <div className="flex items-center gap-2">
            <Image
              src="/enlace-salud-icon-transparent.png"
              alt="Enlace Salud"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />

            <span className="text-[20px] font-semibold tracking-tight text-[#2563EB]">
              Enlace Salud
            </span>
          </div>
        </a>

        <button
          onClick={() =>
            window.open(
              "https://enlace-salud-seven.vercel.app/",
              "_blank"
            )
          }
          className="bg-blue-700 text-white px-6 py-2 rounded-xl text-sm font-semibold hover:bg-blue-800 transition shadow-md hover:scale-105"
        >
          Entrar
        </button>

      </div>
    </nav>
  );
}