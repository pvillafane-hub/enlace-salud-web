export default function DocumentosDemo() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Documentos</h2>

      <div className="space-y-3">

        <a
          href="/demo/docs/radiografia.jpg"
          target="_blank"
          className="block border p-3 rounded-lg hover:bg-gray-50"
        >
          Radiografía de tórax (hace 2 días)
        </a>

        <a
          href="/demo/docs/laboratorio-maria-del-carmen.jpg"
          target="_blank"
          className="block border p-3 rounded-lg hover:bg-gray-50"
        >
          Laboratorio clínico (nuevo resultado)
        </a>

      </div>
    </div>
  );
}