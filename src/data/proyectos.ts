import type { Proyecto } from "../types";

export const proyectos: Proyecto[] = [
  {
    id: 1,
    url: "https://tandatask.arielhurtado.online/",
    titulo: "TandaTask",
    descripcion:
      "Es una aplicación implementada con Mongo, Express, React y Node (MERN) utilizando TypeScript, Tailwind, ZOD, React Router DOM, Axios, JWT, Mongoose y ReactQuery. Permite gestionar proyectos, tareas, notas y colaboradores al más puro estilo de trello.",
  },
  {
    id: 2,
    url: "https://questify.domcloud.dev/",
    titulo: "Questify",
    descripcion:
      "Es una aplicación web que gestiona la información de las actividades turísticas de la parroquia de San Andrés en Riobamba - Ecuador. Este proyecto fue realizado para el GAD parroquial de San Andrés.",
  },
  {
    id: 3,
    url: "https://bebidasec.netlify.app/",
    titulo: "Bebidas",
    descripcion:
      " Es una aplicación implementada con React, TypeScript, Tailwind, ZOD, Zustand, React Router DOM, Axios, Slice Pattern y OpenRouter que permite consultar recetas de bebidas y guardarlas como favoritos. Además, permite la generación de recetas con inteligencia artificial utlizando el modelo de Meta:Llama-3.3-70b.",
  },
  {
    id: 4,
    url: "https://bienesraices.domcloud.dev/",
    titulo: "BienesRaíces",
    descripcion:
      "Es una aplicación que permite publicar y administrar propiedades en venta, realizada con Node.js, Express, MySQL, PUG, JWT, Leaflet y Tailwind. Permite ver cada propiedad y enviar un mensaje al vendedor, filtrar propiedades por su categoría y precio o realizar una búsqueda generalizada. Cuenta con autenticación, panel de administración de propiedades, paginación, etc",
  },
  // {
  //   id: 5,
  //   url: "https://rentapartament.netlify.app/",
  //   titulo: "RentApartament",
  //   descripcion:
  //     "Es la maquetación de un sitio de arriendos para estudiantes universitarios. Este proyecto fue presentado en una casa abierta a los estudiantes de la Escuela Superior Politécnica de Chimborazo (ESPOCH).",
  // },
];
