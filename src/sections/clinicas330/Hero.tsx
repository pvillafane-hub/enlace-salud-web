"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-24"
      style={{
        backgroundImage: "url('/bg-medical.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-white" />

      <div className="absolute inset-0 shadow-[inset_0_-120px_120px_rgba(255,255,255,0.95)]" />

      <div className="relative max-w-4xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 drop-shadow-sm"
        >
          Conecta a tus pacientes, proveedores y centros de cuidado{" "}
          <span className="text-primary">en una sola plataforma</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-700"
        >
          Facilita el acceso a información del paciente, mejora la continuidad
          de cuidado y reduce procesos manuales en toda tu organización.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() =>
              window.open(
                "https://wa.me/17879444563?text=Hola,%20quiero%20conocer%20Enlace%20Salud%20para%20nuestra%20organizacion",
                "_blank"
              )
            }
            className="bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-800 transition shadow-xl hover:scale-105"
          >
            Agenda una demostración
          </button>

          <button
            onClick={() => {
              const el = document.getElementById("how");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border border-gray-300 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition hover:scale-105 bg-white/80 backdrop-blur-sm"
          >
            Ver cómo funciona
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4"
        >
          <a
            href="https://enlace-salud-seven.vercel.app/"
            target="_blank"
            className="text-sm text-gray-600 hover:text-primary underline transition"
          >
            Ver plataforma en vivo →
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4 text-sm text-gray-600"
        >
          Una solución diseñada para organizaciones que atienden comunidades
          completas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-700"
        >
          <span className="bg-white/90 px-4 py-2 rounded-full shadow-md">
            🔐 Seguro
          </span>

          <span className="bg-white/90 px-4 py-2 rounded-full shadow-md">
            🏥 Diseñado para organizaciones de salud
          </span>

          <span className="bg-white/90 px-4 py-2 rounded-full shadow-md">
            ⚡ Implementación escalable
          </span>
        </motion.div>

      </div>
    </section>
  );
}