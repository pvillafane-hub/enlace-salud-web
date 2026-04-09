export default function CTA() {
  return (
    <section className="py-24 px-6 bg-blue-600 text-white text-center">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold">
          ¿Quieres ver cómo funcionaría en tu clínica?
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Te lo mostramos en 15 minutos. Sin compromiso.
        </p>

        <div className="mt-10">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition">
            👉 Agenda tu demostración ahora
          </button>
        </div>

        <p className="mt-6 text-sm text-blue-200">
          Respuesta rápida • Implementación sencilla • Soporte directo
        </p>

      </div>
    </section>
  );
}