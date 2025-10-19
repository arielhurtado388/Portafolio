import Menu from "./Menu";

export default function Navegacion() {
  return (
    <nav className="flex flex-col mt-6 md:flex-row md:items-center md:justify-between">
      <a className="mx-auto mb-6 md:mb-0 md:m-0" href="/">
        <img
          className="block w-12 md:w-16 bg-white rounded-full"
          src="/logo.webp"
          alt="Logo"
        />
      </a>
      <Menu />
    </nav>
  );
}
