import type { Acerca } from "../types";

export default function CardAcerca({ informacion }: { informacion: Acerca }) {
  return (
    <div className="py-2 px-4 bg-gray-100 rounded">
      <h3 className="font-semibold text-base">{informacion.titulo}</h3>
      <h4 className="text-sm">{informacion.subtitulo}</h4>
      <h5 className="text-xs text-slate-500">{informacion.descripcion}</h5>
    </div>
  );
}
