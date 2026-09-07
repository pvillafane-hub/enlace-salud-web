export default function Solution() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Enlace Salud conecta al paciente con su red de cuidado
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Una plataforma sencilla que ayuda a mantener información clínica
          importante organizada y disponible para los proveedores autorizados.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold text-lg">
              👤 El paciente participa
            </h3>
            <p className="mt-2 text-gray-600">
              Mantiene documentos, medicamentos e información importante
              accesible desde un solo lugar.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold text-lg">
              👨‍⚕️ El proveedor obtiene contexto
            </h3>
            <p className="mt-2 text-gray-600">
              Consulta la información compartida por el paciente para apoyar
              decisiones y dar continuidad al cuidado.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold text-lg">
              🏥 La organización mantiene continuidad
            </h3>
            <p className="mt-2 text-gray-600">
              Facilita una experiencia más conectada entre pacientes,
              proveedores y diferentes puntos de servicio.
            </p>
          </div>

        </div>

        <p className="mt-12 text-xl font-semibold">
          Una mejor experiencia para el paciente y una operación más conectada para la organización.
        </p>

      </div>
    </section>
  );
}