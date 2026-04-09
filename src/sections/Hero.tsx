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
      {/* OVERLAY PRO */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-white" />

      {/* DEPTH EFFECT */}
      <div className="absolute inset-0 shadow-[inset_0_-120px_120px_rgba(255,255,255,0.95)]" />

      {/* CONTENIDO */}
      <div className="relative max-w-4xl text-center">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 drop-shadow-sm"
        >
          Reduce llamadas y mantén a tus pacientes{" "}
          <span className="text-primary">conectados 24/7</span>{" "}
          sin aumentar tu carga de trabajo
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-700"
        >
          Digitaliza la comunicación con tus pacientes, mejora el seguimiento clínico
          y elimina procesos manuales innecesarios.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() =>
              window.open(
                "https://wa.me/17879444563?text=Hola,%20quiero%20ver%20una%20demo%20de%20Enlace%20Salud",
                "_blank"
              )
            }
            className="bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-800 transition shadow-xl hover:scale-105"
          >
            Agenda tu demo por WhatsApp
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

        {/* LINK AL PRODUCTO (NUEVO 🔥) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4"
        >
          <a
            href="https://enlacepaciente.com"
            target="_blank"
            className="text-sm text-gray-600 hover:text-primary underline transition"
          >
            Ver producto en vivo →
          </a>
        </motion.div>

        {/* SOCIAL PROOF */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4 text-sm text-gray-600"
        >
          Clínicas en Puerto Rico ya están comenzando a digitalizar su relación con pacientes.
        </motion.p>

        {/* BADGES */}
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
            👵 Fácil para pacientes mayores
          </span>

          <span className="bg-white/90 px-4 py-2 rounded-full shadow-md">
            ⚡ Implementación rápida
          </span>
        </motion.div>

      </div>
    </section>
  );
}