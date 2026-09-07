"use client";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-blue-600 text-white text-center">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold">
          Empieza a organizar tu información de salud hoy
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Ten tus documentos, medicamentos e información médica importante
          disponibles cuando realmente los necesites.
        </p>

        <div className="mt-10">
          <button
            onClick={() =>
              window.open(
                "https://enlace-salud-seven.vercel.app/",
                "_blank"
              )
            }
            className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition"
          >
            Crear mi cuenta
          </button>
        </div>

        <p className="mt-6 text-sm text-blue-200">
          Fácil de usar • Seguro • Accesible desde cualquier lugar
        </p>

      </div>
    </section>
  );
}