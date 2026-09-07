export default function Problem() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Cuando la información está fragmentada, toda la organización lo siente
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Los pacientes reciben servicios en múltiples centros, laboratorios,
          especialistas y hospitales. La información que necesita el proveedor
          muchas veces no está disponible en el momento correcto.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6 text-left">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              🗂️ Información fragmentada
            </h3>
            <p className="mt-2 text-gray-600">
              Datos importantes del paciente pueden estar distribuidos entre
              diferentes instituciones, sistemas y documentos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              📞 Seguimiento manual
            </h3>
            <p className="mt-2 text-gray-600">
              Personal clínico y administrativo dedica tiempo a localizar
              información y contactar pacientes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              🏥 Múltiples puntos de cuidado
            </h3>
            <p className="mt-2 text-gray-600">
              Un mismo paciente puede recibir servicios de distintos proveedores
              y localidades dentro y fuera de la organización.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              ⏱️ Tiempo administrativo
            </h3>
            <p className="mt-2 text-gray-600">
              Procesos que podrían ser digitales terminan dependiendo de llamadas,
              documentos y seguimiento manual.
            </p>
          </div>

        </div>

        <p className="mt-12 text-xl font-semibold">
          El reto no es solamente almacenar información. Es mantener conectada la atención.
        </p>

      </div>
    </section>
  );
}