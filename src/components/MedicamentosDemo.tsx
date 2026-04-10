import Image from "next/image";

export default function MedicamentosDemo() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Medicamentos</h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="border rounded-xl p-3 shadow-sm">
          <Image
            src="/demo/meds/lisinopril.jpg"
            alt="Lisinopril"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <p className="mt-2 font-medium">Lisinopril 10mg</p>
        </div>

        <div className="border rounded-xl p-3 shadow-sm">
          <Image
            src="/demo/meds/metformina.jpg"
            alt="Metformina"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <p className="mt-2 font-medium">Metformina 500mg</p>
        </div>

      </div>
    </div>
  );
}