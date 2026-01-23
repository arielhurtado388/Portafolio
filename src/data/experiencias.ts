import type { Experiencia } from "../types";

export const experiencias: Experiencia[] = [
  {
    id: 1,
    cargo: "Desarrollador de Software",
    empresa: "Ecuador Domain S.A. - NIC.ec",
    fecha: "Feb 2025 - Ago 2025",
    modalidad: "Presencial",
    listado: [
      "Desarrollo, mantenimiento y modernización de sistemas web críticos para la gestión de dominios .ec.",
      "Implementación de chatbots para atención al cliente.",
      "Automatización de flujos operativos y procesos internos utilizando n8n.",
    ],
  },

  {
    id: 2,
    cargo: "Desarrollador de Software - Prácticas Profesionales",
    empresa: "GAD Parroquial San Andrés",
    fecha: "Ago 2023 - Feb 2024",
    modalidad: "Híbrido",
    listado: [
      "Desarrollo de Questify, aplicación web para la gestión de información de actividades turísticas parroquiales.",
      "Levantamiento de requerimientos, diseño e implementación de funcionalidades CRUD utilizando PHP y MySQL.",
      "Despliegue y entrega de la aplicación en entorno productivo para uso institucional.",
    ],
  },
];
