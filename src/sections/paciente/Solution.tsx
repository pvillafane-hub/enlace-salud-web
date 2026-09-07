export default function Solution() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Enlace Salud mantiene tu información organizada en un solo lugar
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Guarda, consulta y comparte tu información médica fácilmente
          desde tu celular o computadora.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold text-lg">
              📲 Guarda tus documentos
            </h3>
            <p className="mt-2 text-gray-600">
              Sube laboratorios, radiografías, referidos, vacunas y otros
              documentos importantes.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold text-lg">
              💊 Mantén tus medicamentos organizados
            </h3>
            <p className="mt-2 text-gray-600">
              Consulta fácilmente los medicamentos que utilizas y mantén
              esa información disponible cuando la necesites.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold text-lg">
              👨‍⚕️ Comparte con tus doctores
            </h3>
            <p className="mt-2 text-gray-600">
              Facilita que tus proveedores tengan acceso a la información
              que necesitan cuando tú lo autorices.
            </p>
          </div>

        </div>

        <p className="mt-12 text-xl font-semibold">
          Tu salud. Tu información. Tu control.
        </p>

      </div>
    </section>
  );
}