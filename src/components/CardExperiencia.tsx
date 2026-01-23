import type { Experiencia } from "../types";

export default function CardExperiencia({
  experiencia,
}: {
  experiencia: Experiencia;
}) {
  return (
    <div className="relative border border-slate-200 rounded-lg mt-8 p-4 ml-6 before:content-[''] before:absolute before:-left-6 before:top-[2.5rem] before:w-4 before:h-4 before:bg-emerald-500 before:rounded-full before:ring-4 before:ring-white before:z-10 after:content-[''] after:absolute after:-left-[19px] after:top-0 after:h-full after:w-1 after:bg-gray-200 hover:border-emerald-800 transition-all">
      <header className="flex flex-col md:flex-row justify-between gap-4 m-4 md:items-center">
        <div>
          <h3 className="text-lg md:text-xl font-semibold">
            {experiencia.cargo}
          </h3>

          <p className="flex items-center gap-4">
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
              className="lucide lucide-building2-icon lucide-building-2"
            >
              <path d="M10 12h4" />
              <path d="M10 8h4" />
              <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
              <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
              <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
            </svg>
            {experiencia.empresa}
          </p>
        </div>

        <div>
          <h3 className="flex items-center gap-4">
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
              className="lucide lucide-calendar-icon lucide-calendar"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
            {experiencia.fecha}
          </h3>
          <p className="text-sm md:text-right text-slate-500">
            {experiencia.modalidad}
          </p>
        </div>
      </header>
      <ul className="list-disc marker:text-emerald-500 px-8 text-sm md:text-base">
        {experiencia.listado.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
