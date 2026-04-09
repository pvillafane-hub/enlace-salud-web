export default function Problem() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Tus pacientes están desconectados… y tu equipo lo paga
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          La mayoría de las clínicas pierden tiempo valioso resolviendo problemas que no son médicos, sino de comunicación.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6 text-left">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              📄 Pacientes sin documentos
            </h3>
            <p className="mt-2 text-gray-600">
              Llegan sin resultados o información incompleta.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              📞 Llamadas constantes
            </h3>
            <p className="mt-2 text-gray-600">
              Tu equipo pierde tiempo en seguimiento manual.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              🗂️ Información dispersa
            </h3>
            <p className="mt-2 text-gray-600">
              Nada está centralizado ni accesible fácilmente.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              ⏱️ Tiempo perdido
            </h3>
            <p className="mt-2 text-gray-600">
              Menos tiempo con pacientes, más en tareas administrativas.
            </p>
          </div>

        </div>

        <p className="mt-12 text-xl font-semibold">
          Esto no es un problema médico. Es un problema de comunicación.
        </p>

      </div>
    </section>
  );
}