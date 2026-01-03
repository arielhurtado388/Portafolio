import type { Proyecto } from "../types";

export const proyectos: Proyecto[] = [
  {
    id: 1,
    url: "https://tandatask.netlify.app/",
    titulo: "TandaTask",
    descripcion:
      "Es una aplicación implementada con Mongo, Express, React y Node (MERN) utilizando TypeScript, Tailwind, ZOD, React Router DOM, Axios, JWT, Mongoose y ReactQuery. Permite gestionar proyectos, tareas, notas y colaboradores al más puro estilo de trello.",
  },
  {
    id: 2,
    url: "https://questify.domcloud.dev/",
    titulo: "Questify",
    descripcion:
      "Es una aplicación web que gestiona la información de las actividades turísticas de la parroquia de San Andrés en Riobamba - Ecuador. Realizada con PHP, MySQL, SASS, JS, Creación propia del Router, ORM Básico y un mini Framework usando Active Record, POO y PDO.",
  },

  {
    id: 3,
    url: "https://lukin.netlify.app/",
    titulo: "Lukin",
    descripcion:
      "Es una aplicación implementada con Next.js (App Router, Server Actions, etc), TypeScript, Tailwind, Express, JWT y PostgreSQL. Permite agregar presupuestos y sus respectivos gastos para tener un control de nuestras finanzas de manera fácil, rápida y minimalista.",
  },

  {
    id: 4,
    url: "https://bienesraices.domcloud.dev/",
    titulo: "BienesRaíces",
    descripcion:
      "Es una aplicación que permite publicar y administrar propiedades en venta, realizada con Node.js, Express, MySQL, PUG, JWT, Leaflet y Tailwind. Permite ver cada propiedad y enviar un mensaje al vendedor, filtrar propiedades por su categoría y precio o realizar una búsqueda generalizada. Cuenta con autenticación, panel de administración de propiedades, paginación, etc",
  },
];
