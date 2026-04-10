import MedicamentosDemo from "@/components/MedicamentosDemo";
import DocumentosDemo from "@/components/DocumentosDemo";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">

      {/* Título */}
      <div>
        <h1 className="text-3xl font-bold">
          Expediente del paciente – Demo
        </h1>
        <p className="text-gray-500">
          Toda la información del paciente en un solo lugar.
        </p>
      </div>

      {/* HEADER DEL PACIENTE */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-2xl font-bold">Juan Pérez</h2>
        <p className="text-gray-600">
          67 años • O+ • Alérgico a penicilina
        </p>

        <div className="mt-3">
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
            Alta necesidad
          </span>
        </div>
      </div>

      {/* VACUNAS */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-xl font-semibold">Vacunas</h2>

        <ul className="mt-3 space-y-2 text-gray-700">
          <li>Influenza (2024)</li>
          <li>COVID-19 (Refuerzo)</li>
        </ul>
      </div>

      {/* MEDICAMENTOS */}
      <MedicamentosDemo />

      {/* DOCUMENTOS */}
      <DocumentosDemo />

    </div>
  );
}