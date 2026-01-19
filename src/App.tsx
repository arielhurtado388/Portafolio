function App() {
  return (
    <>
      <div className="max-w-[95%] md:max-w-7xl mx-auto">
        <header>
          <section className="flex flex-col md:flex-row justify-between p-8 items-center gap-4">
            <img
              className="w-20 h-20 md:w-24 md:h-24"
              src="/logo.webp"
              alt="Logo"
            />
            <nav>
              <ul className="flex flex-col md:flex-row gap-4 text-sm md:text-base font-medium">
                <li>Acerca de mí</li>
                <li>Experiencia</li>
                <li>Habilidades</li>
                <li>Proyectos</li>
                {/* <li>Contacto</li> */}
              </ul>
            </nav>
          </section>

          <section className="flex flex-col md:flex-row items-center">
            <div className="space-y-4 flex-1">
              <p className="p-2 bg-emerald-50 inline-block text-emerald-800 text-sm font-bold rounded-lg">
                Disponible para trabajar
              </p>
              <p className="text-lg md:text-xl">
                Hola, soy
                <span className="text-emerald-800 font-bold">
                  {" "}
                  Ariel Hurtado
                </span>
              </p>
              <h1 className="text-3xl md:text-5xl font-bold">
                Desarollador Full Stack
              </h1>
              <p>
                Ingeniero de Software | Desarrollador Web | Frontend | Backend
              </p>
              <div className="flex gap-4">
                <a
                  className="bg-gray-100 p-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-all"
                  href="#"
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
                  href="#"
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
                  href="#"
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
                  href="#"
                >
                  Contactar
                </a>
                <a
                  className="py-2 px-4 rounded border border-slate-200 hover:bg-gray-200 transition-all"
                  href="#"
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

        <section className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">
            Acerca de mí
          </h2>

          <div className="grid md:grid-cols-3 gap-4 items-center">
            <div className="space-y-4 md:col-span-2 text-sm md:text-base">
              <p>
                Ingeniero de Software Full Stack con experiencia en el
                desarrollo y mantenimiento de aplicaciones web en entornos de
                producción, en organizaciones institucionales y de carácter
                privado. He trabajado en la implementación de APIs,
                autenticación y automatización de procesos, aportando nuevas
                funcionalidades y la mejora continua de sistemas existentes.
                Construyo soluciones con una base técnica sólida, pensada para
                facilitar su mantenimiento y evolución.
              </p>
            </div>

            <div className="space-y-4 md:col-span-1">
              <div className="py-2 px-4 bg-gray-100 rounded">
                <h3 className="font-semibold text-base">Educación</h3>
                <h4 className="text-sm">
                  Ingeniero de Software, Escuela Superior Politécnica de
                  Chimborazo
                </h4>
                <h5 className="text-xs text-slate-500">2019 - 2024</h5>
              </div>

              <div className="py-2 px-4 bg-gray-100 rounded">
                <h3 className="font-semibold text-base">Ubicación</h3>
                <h4 className="text-sm">Quito, Ecuador</h4>
                <h5 className="text-xs text-slate-500">Abierto a remoto</h5>
              </div>
            </div>
          </div>
        </section>

        <main className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold">Experiencia</h2>

          <div className="relative border border-slate-200 rounded-lg mt-8 p-4 ml-6 before:content-[''] before:absolute before:-left-6 before:top-[2.5rem] before:w-4 before:h-4 before:bg-emerald-500 before:rounded-full before:ring-4 before:ring-white before:z-10 after:content-[''] after:absolute after:-left-[19px] after:top-0 after:h-full after:w-1 after:bg-gray-200 hover:border-emerald-800 transition-all">
            <header className="flex flex-col md:flex-row justify-between gap-4 m-4 md:items-center">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Desarrollador de Software
                </h3>

                <p className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-building2-icon lucide-building-2"
                  >
                    <path d="M10 12h4" />
                    <path d="M10 8h4" />
                    <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                  </svg>
                  NIC.ec
                </p>
              </div>

              <div>
                <h3 className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-calendar-icon lucide-calendar"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                  Feb 2025 - Ago 2025
                </h3>
                <p className="text-sm md:text-right text-slate-500">
                  Tiempo Completo
                </p>
              </div>
            </header>
            <ul className="list-disc marker:text-emerald-500 px-8 text-sm md:text-base">
              <li>
                Desarrollé y mantuve funcionalidades para aplicación web con más
                de 10K usuarios
              </li>
              <li>
                Desarrollé y mantuve funcionalidades para aplicación web con más
                de 10K usuarios
              </li>
              <li>
                Desarrollé y mantuve funcionalidades para aplicación web con más
                de 10K usuarios
              </li>
            </ul>

            <div className="my-8 flex gap-4 flex-wrap text-sm">
              <p className="bg-gray-100 py-2 px-4 rounded-lg">React</p>
              <p className="bg-gray-100 py-2 px-4 rounded-lg">Node.js</p>
              <p className="bg-gray-100 py-2 px-4 rounded-lg">PostgreSQL</p>
              <p className="bg-gray-100 py-2 px-4 rounded-lg">Git</p>
              <p className="bg-gray-100 py-2 px-4 rounded-lg">Tailwind CSS</p>
            </div>
          </div>

          <div className="relative border border-slate-200 rounded-lg mt-8 p-4 ml-6 before:content-[''] before:absolute before:-left-6 before:top-[2.5rem] before:w-4 before:h-4 before:bg-emerald-500 before:rounded-full before:ring-4 before:ring-white before:z-10 after:content-[''] after:absolute after:-left-[19px] after:top-0 after:h-full after:w-1 after:bg-gray-200 hover:border-emerald-800 transition-all">
            <header className="flex flex-col md:flex-row justify-between gap-4 m-4 md:items-center">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Desarrollador de Software
                </h3>

                <p className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-building2-icon lucide-building-2"
                  >
                    <path d="M10 12h4" />
                    <path d="M10 8h4" />
                    <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                  </svg>
                  NIC.ec
                </p>
              </div>

              <div>
                <h3 className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-calendar-icon lucide-calendar"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                  Feb 2025 - Ago 2025
                </h3>
                <p className="text-sm md:text-right text-slate-500">
                  Tiempo Completo
                </p>
              </div>
            </header>
            <ul className="list-disc marker:text-emerald-500 px-8 text-sm md:text-base">
              <li>
                Desarrollé y mantuve funcionalidades para aplicación web con más
                de 10K usuarios
              </li>
              <li>
                Desarrollé y mantuve funcionalidades para aplicación web con más
                de 10K usuarios
              </li>
              <li>
                Desarrollé y mantuve funcionalidades para aplicación web con más
                de 10K usuarios
              </li>
            </ul>

            <div className="my-8 flex gap-4 flex-wrap text-sm">
              <p className="bg-gray-100 py-2 px-4 rounded-lg">React</p>
              <p className="bg-gray-100 py-2 px-4 rounded-lg">Node.js</p>
              <p className="bg-gray-100 py-2 px-4 rounded-lg">PostgreSQL</p>
              <p className="bg-gray-100 py-2 px-4 rounded-lg">Git</p>
              <p className="bg-gray-100 py-2 px-4 rounded-lg">Tailwind CSS</p>
            </div>
          </div>
        </main>

        <section className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold">Proyectos</h2>
          <article className="grid md:grid-cols-2 my-8 gap-8 border border-slate-200 rounded-lg items-center">
            <div className="">
              <img
                className="md:rounded-tl-lg md:rounded-bl-lg rounded-lg md:rounded-none object-cover aspect-square"
                src="/tandatask.png"
                alt="Imagen Proyecto"
              />
            </div>
            <div className="space-y-4 px-8">
              <h3 className="text-lg md:text-xl font-semibold">TandaTask</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                libero dolor delectus neque id cum, omnis quibusdam harum
                consequuntur! Atque excepturi in alias illum aliquid cumque
                ducimus assumenda a ad?
              </p>
              <ul className="bg-emerald-50 list-disc px-8 py-4 rounded-lg text-sm md:text-base">
                <li>
                  Implementé autenticación JWT para sesiones de usuario seguras
                </li>
                <li>
                  Construí UI responsiva que funciona en móvil y escritorio
                </li>

                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, harum nesciunt? Deleniti iste, inventore non
                  tenetur dicta a deserunt.
                </li>
              </ul>

              <div className="my-8 flex gap-4 flex-wrap text-sm">
                <p className="bg-gray-100 py-2 px-4 rounded-lg">React</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Node.js</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">PostgreSQL</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Git</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Tailwind CSS</p>
              </div>

              <div className="flex gap-4 mb-8 text-sm">
                <a className="hover:text-emerald-500 transition-all" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-github-icon lucide-github inline-block"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>{" "}
                  Ver Código
                </a>

                <a className="hover:text-emerald-500 transition-all" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-external-link-icon lucide-external-link inline-block"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>{" "}
                  Ver App
                </a>
              </div>
            </div>
          </article>

          <article className="grid md:grid-cols-2 my-8 gap-8 border border-slate-200 rounded-lg items-center">
            <div className="space-y-4 px-8">
              <h3 className="text-lg md:text-xl font-semibold">TandaTask</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                libero dolor delectus neque id cum, omnis quibusdam harum
                consequuntur! Atque excepturi in alias illum aliquid cumque
                ducimus assumenda a ad?
              </p>
              <ul className="bg-emerald-50 list-disc px-8 py-4 rounded-lg text-sm md:text-base">
                <li>
                  Implementé autenticación JWT para sesiones de usuario seguras
                </li>
                <li>
                  Construí UI responsiva que funciona en móvil y escritorio
                </li>

                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, harum nesciunt? Deleniti iste, inventore non
                  tenetur dicta a deserunt.
                </li>
              </ul>

              <div className="my-8 flex gap-4 flex-wrap text-sm">
                <p className="bg-gray-100 py-2 px-4 rounded-lg">React</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Node.js</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">PostgreSQL</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Git</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Tailwind CSS</p>
              </div>

              <div className="flex gap-4 mb-8 text-sm">
                <a className="hover:text-emerald-500 transition-all" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-github-icon lucide-github inline-block"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>{" "}
                  Ver Código
                </a>

                <a className="hover:text-emerald-500 transition-all" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-external-link-icon lucide-external-link inline-block"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>{" "}
                  Ver App
                </a>
              </div>
            </div>
            <div className="">
              <img
                className="md:rounded-tr-lg md:rounded-br-lg rounded-lg md:rounded-none object-cover aspect-square"
                src="/tandatask.png"
                alt="Imagen Proyecto"
              />
            </div>
          </article>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold">Habilidades</h2>
          <div className="grid md:grid-cols-2 gap-4 my-8">
            <article className="p-4 border border-slate-200 space-y-4 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold">Frontend</h3>
              <p>
                Construyendo interfaces de usuario responsivas e interactivas
              </p>
              <div className="flex gap-4 flex-wrap text-sm">
                <p className="bg-gray-100 py-2 px-4 rounded-lg">React</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Node.js</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">PostgreSQL</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Git</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Tailwind CSS</p>
              </div>
            </article>

            <article className="p-4 border border-slate-200 space-y-4 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold">Frontend</h3>
              <p>
                Construyendo interfaces de usuario responsivas e interactivas
              </p>
              <div className="flex gap-4 flex-wrap text-sm">
                <p className="bg-gray-100 py-2 px-4 rounded-lg">React</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Node.js</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">PostgreSQL</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Git</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Tailwind CSS</p>
              </div>
            </article>
            <article className="p-4 border border-slate-200 space-y-4 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold">Frontend</h3>
              <p>
                Construyendo interfaces de usuario responsivas e interactivas
              </p>
              <div className="flex gap-4 flex-wrap text-sm">
                <p className="bg-gray-100 py-2 px-4 rounded-lg">React</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Node.js</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">PostgreSQL</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Git</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Tailwind CSS</p>
              </div>
            </article>
            <article className="p-4 border border-slate-200 space-y-4 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold">Frontend</h3>
              <p>
                Construyendo interfaces de usuario responsivas e interactivas
              </p>
              <div className="flex gap-4 flex-wrap text-sm">
                <p className="bg-gray-100 py-2 px-4 rounded-lg">React</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Node.js</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">PostgreSQL</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Git</p>
                <p className="bg-gray-100 py-2 px-4 rounded-lg">Tailwind CSS</p>
              </div>
            </article>
          </div>
        </section>

        <footer className="mb-8 text-center text-xs md:text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Ariel Hurtado. Todos los derechos
            reservados
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
