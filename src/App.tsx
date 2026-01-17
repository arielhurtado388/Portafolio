import Habilidad from "./components/Habilidad";
import Header from "./components/Header";
import ProyectoCard from "./components/ProyectoCard";
import { habilidades } from "./data/habilidades";
import { informacion } from "./data/informacion";
import { proyectos } from "./data/proyectos";
import Informacion from "./components/Informacion";

function App() {
  return (
    <>
      <div className="w-[90%] mx-auto overflow-hidden max-w-screen-xl">
        <Header />
        <main>
          <section className="py-8 text-center" id="about">
            <h2 className="text-4xl md:text-5xl font-bold">Acerca de mí</h2>
            <p className="mt-8 mb-16 leading-normal text-gray-color md:w-4/5 md:mx-auto">
              Ingeniero de Software Full Stack con experiencia en el desarrollo
              y mantenimiento de aplicaciones web en entornos de producción,
              tanto en organizaciones institucionales como en plataformas
              internas de carácter privado. He trabajado en la implementación de
              APIs, autenticación y automatización de procesos, aportando en
              nuevas funcionalidades y en la mejora continua de plataformas
              existentes. Me enfoco en construir soluciones full stack bien
              integradas, con código limpio y una base técnica sólida, pensada
              para facilitar su mantenimiento y evolución.
            </p>

            <div className="grid gap-8 justify-center justify-items-center md:grid-cols-3">
              {informacion.map((info) => (
                <Informacion key={info.id} info={info} />
              ))}
            </div>
          </section>

          <section className="py-10" id="projects">
            <h2 className="text-4xl md:text-5xl text-center mb-16 font-bold">
              <span className="text-green-color"> &lt;/&gt; </span> Proyectos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {proyectos.map((proyecto) => (
                <ProyectoCard key={proyecto.id} proyecto={proyecto} />
              ))}
            </div>
          </section>

          <section className="py-10 text-center" id="habilities">
            <h2 className="text-4xl md:text-5xl mb-16 font-bold">
              Habilidades
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 bg-card-color py-10 px-8 text-gray-color place-items-center">
              {habilidades.map((habilidad) => (
                <Habilidad key={habilidad.id} habilidad={habilidad} />
              ))}
            </div>
          </section>
        </main>

        <footer className="py-10 text-center">
          <p className="text-xl text-gray-color">&copy; Ariel Hurtado - 2025</p>
        </footer>
      </div>
    </>
  );
}

export default App;
