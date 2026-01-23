import type { Habilidad } from "../types";

export default function Habilidad({ habilidad }: { habilidad: Habilidad }) {
  return (
    <article className="p-4 border border-slate-200 space-y-4 rounded-lg">
      <h3 className="text-lg md:text-xl font-semibold">{habilidad.titulo}</h3>
      <p>{habilidad.descripcion}</p>
      <div className="flex gap-4 flex-wrap text-sm">
        {habilidad.tags.map((item, index) => (
          <p className="bg-gray-100 py-2 px-4 rounded-lg" key={index}>
            {item}
          </p>
        ))}
      </div>
    </article>
  );
}
