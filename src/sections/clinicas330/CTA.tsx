"use client";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-blue-600 text-white text-center">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold">
          Conoce cómo Enlace Salud puede funcionar en tu organización
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Te mostramos cómo la plataforma puede apoyar a tus pacientes,
          proveedores y centros de servicio.
        </p>

        <div className="mt-10">
          <button
            onClick={() =>
              window.open(
                "https://wa.me/17879444563?text=Hola,%20quiero%20conocer%20Enlace%20Salud%20para%20nuestra%20organizacion",
                "_blank"
              )
            }
            className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition"
          >
            Agenda una demostración
          </button>
        </div>

        <p className="mt-6 text-sm text-blue-200">
          Implementación sencilla • Escalable • Soporte directo
        </p>

      </div>
    </section>
  );
}