import type { Habilidad } from "../types";

export const habilidades: Habilidad[] = [
  {
    id: 1,
    titulo: "Frontend",
    descripcion:
      "Construyendo interfaces de usuario responsivas e interactivas.",
    tags: [
      "HTML",
      "CSS",
      "SASS",
      "TailwindCSS",
      "Responsive Web Design",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
    ],
  },

  {
    id: 2,
    titulo: "Backend",
    descripcion:
      "Desarrollando APIs robustas y servicios del lado del servidor escalables.",
    tags: [
      "Node.js",
      "NestJS",
      "Express",
      "PHP",
      "Laravel",
      "C# / .NET",
      "REST APIs",
      "SOAP",
      "WebSockets",
      "JWT",
      "MCP",
      "n8n",
    ],
  },

  {
    id: 3,
    titulo: "Bases de Datos y ORMs",
    descripcion:
      "Diseñando y gestionando bases de datos relacionales y NoSQL eficientes.",
    tags: [
      "MySQL",
      "PostgreSQL",
      "PostGIS",
      "MongoDB",
      "Prisma",
      "TypeORM",
      "Sequelize",
      "Mongoose",
    ],
  },

  {
    id: 4,
    titulo: "DevOps y Herramientas",
    descripcion:
      "Automatizando despliegues y optimizando flujos de trabajo de desarrollo.",
    tags: [
      "Docker",
      "Linux",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Webhooks",
      "Swagger",
      "Dokploy",
      "PM2",
    ],
  },
];
