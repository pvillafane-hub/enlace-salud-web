export default function Problem() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Tu información médica está en demasiados lugares
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Entre laboratorios, oficinas médicas, hospitales, recetas y documentos impresos,
          mantener organizada tu información de salud puede ser complicado.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6 text-left">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              📄 Documentos perdidos
            </h3>
            <p className="mt-2 text-gray-600">
              Resultados, estudios y referidos pueden terminar en papeles,
              correos o diferentes portales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              🏥 Información en diferentes lugares
            </h3>
            <p className="mt-2 text-gray-600">
              Cada médico o institución puede tener solamente una parte de tu historial.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              🔁 Repetir la misma información
            </h3>
            <p className="mt-2 text-gray-600">
              Muchas veces tienes que volver a explicar tus medicamentos,
              diagnósticos o estudios anteriores.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              ⏱️ Buscar documentos cuando los necesitas
            </h3>
            <p className="mt-2 text-gray-600">
              Encontrar un resultado justo antes de una cita puede tomar más tiempo
              del necesario.
            </p>
          </div>

        </div>

        <p className="mt-12 text-xl font-semibold">
          Tu información de salud debería acompañarte a ti.
        </p>

      </div>
    </section>
  );
}