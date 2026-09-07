"use client";

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Mira cómo funciona en menos de 2 minutos
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          Enlace Salud fue diseñado para que manejar y compartir tu información
          médica sea sencillo.
        </p>

        {/* VIDEOS */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">

          {/* Paciente */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-4">
              👤 Tú mantienes tu información organizada
            </h3>

            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
              <iframe
                title="Video para pacientes"
                src="https://www.loom.com/embed/9ba4b8ad25c34e6385d141b0ed302d2c?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>

            <p className="mt-4 text-gray-600">
              Sube documentos, consulta tu información y mantén tus datos
              importantes disponibles cuando los necesites.
            </p>
          </div>

          {/* Doctor */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-4">
              👨‍⚕️ Tu doctor recibe la información que compartes
            </h3>

            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
              <iframe
                title="Video para doctores"
                src="https://www.loom.com/embed/ca9dd463024b4fcd8e4b38bdc8e8f2d2?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>

            <p className="mt-4 text-gray-600">
              Cuando autorizas compartir información, tu proveedor puede
              consultarla y tener más contexto sobre tu cuidado.
            </p>
          </div>

        </div>

        {/* IMÁGENES ADICIONALES */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">

          {/* Dashboard */}
          <div className="text-left">
            <img
              src="/dashboard-doctor.jpg"
              alt="Doctor consultando información en Enlace Salud"
              className="rounded-2xl shadow-lg"
            />
            <p className="mt-4 text-gray-600">
              Tu doctor puede consultar la información que compartes desde un
              solo lugar.
            </p>
          </div>

          {/* Paciente móvil */}
          <div className="text-left">
            <img
              src="/paciente-mobile.jpg"
              alt="Paciente usando Enlace Salud desde su celular"
              className="rounded-2xl shadow-lg"
            />
            <p className="mt-4 text-gray-600">
              Accede a tu información fácilmente desde tu celular, estés donde estés.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}