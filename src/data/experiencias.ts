import type { Experiencia } from "../types";

export const experiencias: Experiencia[] = [
  {
    id: 1,
    cargo: "Desarrollador de Software Full Stack",
    empresa: "Encuba",
    fecha: "Ene 2026 - Ago 2026",
    modalidad: "Presencial",
    listado: [
      "Kioscos de autoservicio para el pago de servicios municipales: construcción desde cero y despliegue en producción en dos municipios, con consulta de deudas, cobro en efectivo y con tarjeta, emisión de comprobantes. Incluyó un servicio local en C# para operar el hardware del kiosco (billetero, monedero, PinPad e impresora térmica) y la integración con la pasarela de pagos Datafast, superando su certificación bancaria.",
      "Telemetría de medidores de agua NB-IoT: implementación de un servidor UDP y del parser del protocolo binario del fabricante (incluida la corrección de campos mal documentados), con descifrado de tramas, depuración de lecturas duplicadas y consulta en tiempo real mediante una API autenticada.",
      "Surveys, plataforma para trabajo de campo: creación y aplicación de encuestas, control de cuotas por edad, género y parroquia, validación geográfica para evitar respuestas repetidas en un mismo punto y seguimiento de encuestadores en tiempo real. Integración de modelos de lenguaje para calcular la muestra estadística y su distribución por parroquia, edad y género a partir de datos censales, y para un asistente que responde preguntas sobre los resultados consultando la base de datos en lenguaje natural mediante MCP.",
    ],
  },

  {
    id: 2,
    cargo: "Desarrollador de Software Full Stack",
    empresa: "Ecuador Domain S.A. - NIC.ec",
    fecha: "Feb 2025 - Ago 2025",
    modalidad: "Presencial",
    listado: [
      "Desarrollo, mantenimiento y modernización de sistemas web críticos para la gestión de dominios .ec.",
      "Implementación de chatbots para atención al cliente.",
      "Automatización de flujos operativos y procesos internos utilizando n8n.",
    ],
  },
];
