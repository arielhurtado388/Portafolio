import type { Proyecto } from "../types";

export const proyectos: Proyecto[] = [
  {
    id: 1,
    imagen: "tandatask.png",
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
    imagen: "tandatask.png",
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
];
