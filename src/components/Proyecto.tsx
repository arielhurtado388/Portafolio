import type { Proyecto } from "../types";

export default function Proyecto({ proyecto }: { proyecto: Proyecto }) {
  console.log(proyecto.id % 2 === 0);
  return (
    <article className="grid md:grid-cols-2 my-8 gap-8 border border-slate-200 rounded-lg items-center">
      <div className={`${proyecto.id % 2 === 0 ? "md:order-2" : ""}`}>
        <img
          className="md:rounded-tl-lg md:rounded-bl-lg rounded-lg md:rounded-none object-contain aspect-video"
          src={`/${proyecto.imagen}`}
          alt="Imagen Proyecto"
        />
      </div>
      <div className="space-y-4 px-8">
        <h3 className="text-lg md:text-xl font-semibold mt-8">
          {proyecto.titulo}
        </h3>
        <p>{proyecto.descripcion}</p>

        <div className="my-8 flex gap-4 flex-wrap text-sm">
          {proyecto.tags.map((tag, index) => (
            <p className="bg-gray-100 py-2 px-4 rounded-lg" key={index}>
              {tag}
            </p>
          ))}
        </div>

        <div className="flex gap-4 mb-8 text-sm">
          <a
            className="hover:text-emerald-500 transition-all"
            href={proyecto.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-github-icon lucide-github inline-block"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>{" "}
            Ver Código
          </a>

          <a
            className="hover:text-emerald-500 transition-all"
            href={proyecto.app}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-external-link-icon lucide-external-link inline-block"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>{" "}
            Ver App
          </a>
        </div>
      </div>
    </article>
  );
}
