export default function Benefits() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Tener tu información organizada hace tu cuidado más sencillo
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Enlace Salud te ayuda a mantener tu información médica accesible,
          organizada y disponible cuando realmente la necesitas.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">

          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold">
              🗂️ Todo en un solo lugar
            </h3>
            <p className="mt-2 text-gray-600">
              Mantén tus documentos médicos importantes organizados
              y fáciles de encontrar.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold">
              📱 Acceso cuando lo necesites
            </h3>
            <p className="mt-2 text-gray-600">
              Consulta tu información desde tu celular o computadora,
              estés donde estés.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold">
              👨‍⚕️ Mejor comunicación con tus doctores
            </h3>
            <p className="mt-2 text-gray-600">
              Comparte información importante con tus proveedores
              cuando tú lo autorices.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold">
              ❤️ Mayor continuidad en tu cuidado
            </h3>
            <p className="mt-2 text-gray-600">
              Facilita que tus diferentes proveedores tengan más contexto
              sobre tu historial y tu cuidado.
            </p>
          </div>

        </div>

        <p className="mt-16 text-xl font-semibold">
          Menos papeles. Menos complicaciones. Más control sobre tu salud.
        </p>

      </div>
    </section>
  );
}