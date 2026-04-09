export default function Trust() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Seguridad y confianza desde el día uno
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Enlace Salud fue diseñado con estándares de seguridad clínica para proteger la información de tus pacientes.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-6 text-left">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              🔐 Infraestructura segura
            </h3>
            <p className="mt-2 text-gray-600">
              Construido sobre Amazon Web Services (AWS), utilizado por sistemas médicos a nivel mundial.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              🛡️ Cumplimiento tipo HIPAA
            </h3>
            <p className="mt-2 text-gray-600">
              Protección de datos y accesos controlados siguiendo estándares de privacidad médica.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">
              👨‍💻 Experiencia real en hospitales
            </h3>
            <p className="mt-2 text-gray-600">
              Desarrollado por expertos en sistemas hospitalarios y cumplimiento regulatorio.
            </p>
          </div>

        </div>

        <p className="mt-16 text-xl font-semibold">
          No es solo tecnología. Es confianza clínica.
        </p>

      </div>
    </section>
  );
}