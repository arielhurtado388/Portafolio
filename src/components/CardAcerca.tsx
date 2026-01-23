import type { Acerca } from "../types";

export default function CardAcerca({ acerca }: { acerca: Acerca }) {
  return (
    <div className="py-2 px-4 bg-gray-100 rounded">
      <h3 className="font-semibold text-base">{acerca.titulo}</h3>
      <h4 className="text-sm">{acerca.subtitulo}</h4>
      <h5 className="text-xs text-slate-500">{acerca.descripcion}</h5>
    </div>
  );
}
