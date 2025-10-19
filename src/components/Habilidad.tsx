import type { Habilidad } from "../types";

type HabilidadProps = {
  habilidad: Habilidad;
};
export default function Habilidad({ habilidad }: HabilidadProps) {
  return (
    <article className="flex flex-col items-center space-y-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 text-green-color"
        dangerouslySetInnerHTML={{ __html: habilidad.icono }}
      ></svg>
      <h3 className="text-2xl">{habilidad.titulo}</h3>
    </article>
  );
}
