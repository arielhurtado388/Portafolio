export default function Header() {
  return (
    <header>
      <section className="flex flex-col md:flex-row justify-between p-8 items-center gap-8">
        <a href="/">
          <img
            className="w-20 h-20 md:w-24 md:h-24"
            src="/logo.webp"
            alt="Logo"
          />
        </a>
        <nav>
          <ul className="flex flex-wrap justify-center md:flex-row gap-4 text-sm md:text-base font-medium">
            <li className="hover:text-emerald-500">
              <a href="#acerca">Acerca de mí</a>
            </li>
            <li className="hover:text-emerald-500">
              <a href="#experiencia">Experiencia</a>
            </li>
            <li className="hover:text-emerald-500">
              <a href="#proyectos">Proyectos</a>
            </li>
            <li className="hover:text-emerald-500">
              <a href="#habilidades">Habilidades</a>
            </li>
            {/* <li>Contacto</li> */}
          </ul>
        </nav>
      </section>

      <section className="flex flex-col md:flex-row items-center">
        <div className="space-y-4 flex-1">
          {/* <p className="p-2 bg-emerald-50 inline-block text-emerald-800 text-sm font-bold rounded-lg">
            Disponible para trabajar
          </p> */}
          <p className="text-lg md:text-xl">
            Hola, soy
            <span className="text-emerald-800 font-bold"> Ariel Hurtado</span>
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">
            Desarrollador Full Stack
          </h1>
          <p>Ingeniero de Software | Desarrollador Web | Frontend | Backend</p>
          <div className="flex gap-4">
            <a
              className="bg-gray-100 p-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-all"
              href="https://github.com/arielhurtado388"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-github-icon lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              className="bg-gray-100 p-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-all"
              href="https://www.linkedin.com/in/ariel-hurtado"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedln"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              className="bg-gray-100 p-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-all"
              href="mailto:arielhurtado388@gmail.com"
              title="Correo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-mail-icon lucide-mail"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </a>
          </div>

          <div className="flex gap-4">
            <a
              className="py-2 px-4 bg-emerald-500 hover:bg-emerald-700 text-white rounded transition-all"
              href="https://api.whatsapp.com/send?phone=593983342969&text=Hola%20Ariel..."
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactar
            </a>
            <a
              className="py-2 px-4 rounded border border-slate-200 hover:bg-gray-200 transition-all"
              href="/CV - Ariel Hurtado.pdf"
              download
            >
              Descargar CV
            </a>
          </div>
        </div>
        <div className="w-48 h-48 md:w-80 md:h-80 mx-auto -order-1 md:order-1 mb-8 md:mb-0">
          <img
            className="rounded-full object-cover aspect-square"
            src="/perfil.webp"
            alt="Imagen Perfil"
          />
        </div>
      </section>
    </header>
  );
}
