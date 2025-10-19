import Navegacion from "./Navegacion";

export default function Header() {
  return (
    <header>
      <Navegacion />
      <section className="pt-6 pb-16 md:flex justify-between items-center gap-8">
        <figure className="md:order-1">
          <img
            className="w-[90%] aspect-square object-cover rounded-full max-w-sm mx-auto"
            src="/perfil.webp"
            alt="Perfil"
          />
        </figure>

        <article className="text-center mt-8 md:w-1/2 md:text-left">
          <h2 className="text-4xl md:text-5xl">Hola, Soy Ariel Hurtado</h2>
          <p className="text-gray-color text-xl my-6">
            Ingeniero de Software | Desarrollador Web | Frontend | Backend
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-lg mx-auto md:mx-0">
            <a
              className="bg-green-color hover:bg-green-700 flex items-center justify-center transition-all p-3"
              href="/CV - Ariel Hurtado.pdf"
              download=""
            >
              Descargar CV
            </a>
            <a
              className="flex items-center justify-center border-white border hover:bg-white hover:text-black transition-all p-3"
              href="https://api.whatsapp.com/send?phone=+593983342969&text=Hola Ariel
                "
              target="_blank"
            >
              Contáctame
            </a>
          </div>
        </article>
      </section>
    </header>
  );
}
