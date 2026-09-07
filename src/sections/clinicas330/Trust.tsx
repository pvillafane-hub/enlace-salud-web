export default function Trust() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Seguridad y confianza para organizaciones de salud
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Enlace Salud fue diseñado pensando en la protección de información sensible,
          el control de acceso y las necesidades operacionales del sector salud.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-6 text-left">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              🔐 Infraestructura segura
            </h3>
            <p className="mt-2 text-gray-600">
              Arquitectura tecnológica diseñada para proteger información clínica
              y mantener los datos disponibles de forma segura.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              🛡️ Acceso controlado
            </h3>
            <p className="mt-2 text-gray-600">
              Controles de acceso permiten limitar la información disponible
              según el usuario, su rol y la organización correspondiente.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              👨‍💻 Experiencia en ambientes de salud
            </h3>
            <p className="mt-2 text-gray-600">
              Desarrollado con experiencia real en sistemas hospitalarios,
              operaciones clínicas y cumplimiento regulatorio.
            </p>
          </div>

        </div>

        <p className="mt-16 text-xl font-semibold">
          Seguridad, control y confianza como parte del diseño de la plataforma.
        </p>

      </div>
    </section>
  );
}