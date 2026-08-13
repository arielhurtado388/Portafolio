import type { Proyecto } from "../types";

export const proyectos: Proyecto[] = [
  {
    id: 1,
    imagen: "tandatask.webp",
    titulo: "TandaTask",
    descripcion:
      "Es una aplicación que permite gestionar proyectos, tareas, notas y colaboradores al más puro estilo de trello.",
    tags: [
      "Mongo",
      "Express",
      "React",
      "Node",
      "TypeScript",
      "Tailwind",
      "ZOD",
      "React Router DOM",
      "Axios",
      "JWT",
      "Mongoose",
      "ReactQuery",
    ],
    github: "https://github.com/arielhurtado388/TandaTaskBackend.git",
    app: "https://tandatask.netlify.app",
  },

  {
    id: 2,
    imagen: "lukin.webp",
    titulo: "Lukin",
    descripcion:
      "Es una aplicación que permite agregar presupuestos y sus respectivos gastos para tener un control de nuestras finanzas de manera fácil, rápida y minimalista.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Express", "JWT", "PostgreSQL"],
    github: "https://github.com/arielhurtado388/LukinBackend",
    app: "https://lukin.netlify.app",
  },
];
