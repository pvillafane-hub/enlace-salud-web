export default function Benefits() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Esto no es un gasto. Es una inversión.
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Enlace Salud optimiza tu operación y mejora la relación con tus pacientes desde el primer día.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">

          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold">
              📈 Más retención de pacientes
            </h3>
            <p className="mt-2 text-gray-600">
              Pacientes conectados regresan más y siguen mejor sus tratamientos.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold">
              ⏱️ Menos carga administrativa
            </h3>
            <p className="mt-2 text-gray-600">
              Reduce llamadas y tareas manuales del equipo.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold">
              📊 Mejor seguimiento clínico
            </h3>
            <p className="mt-2 text-gray-600">
              Información organizada y disponible cuando la necesitas.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold">
              💵 Más ingresos por paciente activo
            </h3>
            <p className="mt-2 text-gray-600">
              Mejor control y continuidad = mayor facturación.
            </p>
          </div>

        </div>

        <p className="mt-16 text-xl font-semibold">
          Una clínica más organizada es una clínica más rentable.
        </p>

      </div>
    </section>
  );
}