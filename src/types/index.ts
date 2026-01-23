export type Acerca = {
  id: number;
  titulo: string;
  subtitulo: string;
  descripcion: string;
};

export type Experiencia = {
  id: number;
  cargo: string;
  empresa: string;
  fecha: string;
  modalidad: string;
  listado: string[];
};

export type Proyecto = {
  id: number;
  imagen: string;
  titulo: string;
  descripcion: string;
  tags: string[];
  github: string;
  app: string;
};

export type Habilidad = {
  id: number;
  titulo: string;
  descripcion: string;
  tags: string[];
};
