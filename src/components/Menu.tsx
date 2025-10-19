export default function Menu() {
  return (
    <ul className="flex flex-col items-center gap-4 md:flex-row">
      <li>
        <a className="link-menu" href="#about">
          Acerca de mí
        </a>
      </li>
      <li>
        <a className="link-menu" href="#projects">
          Proyectos
        </a>
      </li>
      <li>
        <a className="link-menu" href="#habilities">
          Habilidades
        </a>
      </li>
    </ul>
  );
}
