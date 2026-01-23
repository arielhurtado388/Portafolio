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
    imagen: "questify.webp",
    titulo: "Questify",
    descripcion:
      "Es una aplicación web que gestiona la información de las actividades turísticas de la parroquia de San Andrés en Riobamba - Ecuador.",
    tags: [
      "PHP",
      "MySQL",
      "SASS",
      "JS",
      "Creación propia del Router",
      "ORM Básico",
      "Mini Framework usando Active Record",
      "POO",
      "PDO",
    ],
    github: "https://github.com/arielhurtado388/Questify",
    app: "https://questify.domcloud.dev",
  },

  {
    id: 3,
    imagen: "lukin.webp",
    titulo: "Lukin",
    descripcion:
      "Es una aplicación que permite agregar presupuestos y sus respectivos gastos para tener un control de nuestras finanzas de manera fácil, rápida y minimalista.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Express", "JWT", "PostgreSQL"],
    github: "https://github.com/arielhurtado388/LukinBackend",
    app: "https://lukin.netlify.app",
  },

  {
    id: 4,
    imagen: "bienesraices.webp",
    titulo: "BienesRaíces",
    descripcion:
      "Es una aplicación que permite publicar y administrar propiedades en venta. Permite ver cada propiedad y enviar un mensaje al vendedor, filtrar propiedades por su categoría y precio o realizar una búsqueda generalizada. Cuenta con autenticación, panel de administración de propiedades, paginación, etc",
    tags: ["Node.js", "Express", "MySQL", "PUG", "JWT", "Leaflet", "Tailwind"],
    github: "https://github.com/arielhurtado388/BienesRaices",
    app: "https://bienesraices.domcloud.dev",
  },
];
