export default function Solution() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Enlace Salud conecta todo en un solo lugar
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Simplifica la comunicación con tus pacientes y elimina procesos manuales innecesarios.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold text-lg">
              📲 El paciente sube documentos
            </h3>
            <p className="mt-2 text-gray-600">
              Desde su celular, sin complicaciones ni apps complejas.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold text-lg">
              🔔 Tú recibes alertas
            </h3>
            <p className="mt-2 text-gray-600">
              Cada vez que el paciente sube información relevante.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold text-lg">
              📂 Todo queda organizado
            </h3>
            <p className="mt-2 text-gray-600">
              Accede al expediente digital en segundos.
            </p>
          </div>

        </div>

        <p className="mt-12 text-xl font-semibold">
          Sin llamadas. Sin papeles. Sin fricción.
        </p>

      </div>
    </section>
  );
}