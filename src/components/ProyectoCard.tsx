import type { Proyecto } from "../types";

type ProyectoCardProps = {
  proyecto: Proyecto;
};

export default function ProyectoCard({ proyecto }: ProyectoCardProps) {
  return (
    <article
      className={`bg-card-color rounded-lg py-10 px-8 border-b-4 ${
        proyecto.id === 2 ? "border-green-color" : "border-transparent"
      }  grid order-2 md:-order-none place-items-center md:place-items-start`}
    >
      <a href={proyecto.url} className="text-gray-color" target="_blank">
        <h3 className="text-2xl font-bold mt-8 flex items-center">
          {proyecto.titulo}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 inline-block ml-2"
          >
            <path
              fillRule="evenodd"
              d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
              clipRule="evenodd"
            />
          </svg>
        </h3>
      </a>
      <p className="mt-4">{proyecto.descripcion}</p>
    </article>
  );
}
