export default function CardAcercaDe() {
  return (
    <div className="space-y-4 md:col-span-1">
      <div className="py-2 px-4 bg-gray-100 rounded">
        <h3 className="font-semibold text-base">Educación</h3>
        <h4 className="text-sm">
          Ingeniero de Software, Escuela Superior Politécnica de Chimborazo
        </h4>
        <h5 className="text-xs text-slate-500">2019 - 2024</h5>
      </div>

      <div className="py-2 px-4 bg-gray-100 rounded">
        <h3 className="font-semibold text-base">Ubicación</h3>
        <h4 className="text-sm">Quito, Ecuador</h4>
        <h5 className="text-xs text-slate-500">Abierto a remoto</h5>
      </div>
    </div>
  );
}
