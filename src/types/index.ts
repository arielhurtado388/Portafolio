export type Proyecto = {
  id: number;
  url: string;
  titulo: string;
  descripcion: string;
};

export type Informacion = {
  id: number;
  icono: string;
  titulo: string;
  valor: string;
};

export type Habilidad = Omit<Informacion, "valor">;
