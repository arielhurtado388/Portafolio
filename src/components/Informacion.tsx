import type { Informacion } from "../types";

type InformacionProps = {
  info: Informacion;
};

export default function Informacion({ info }: InformacionProps) {
  return (
    <article className="w-max grid justify-items-center">
      <div className="icons-container">
        <svg
          className="w-[2.5rem] h-[2.5rem] fill-green-color"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          dangerouslySetInnerHTML={{ __html: info.icono }}
        ></svg>
      </div>
      <h3 className="text-2xl mt-4 mb-2">{info.titulo}</h3>
      <p className="text-gray-color">{info.valor}</p>
    </article>
  );
}
