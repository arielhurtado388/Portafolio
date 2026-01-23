import Header from "./components/Header";
import Acerca from "./components/Acerca";
import Experiencia from "./components/Experiencia";
import Proyecto from "./components/Proyecto";
import Habilidad from "./components/Habilidad";
import { informacionAcerca } from "./data/acerca";
import { experiencias } from "./data/experiencias";
import { proyectos } from "./data/proyectos";
import { habilidades } from "./data/habilidades";

function App() {
  return (
    <>
      <div className="max-w-[95%] lg:max-w-7xl mx-auto">
        <Header />

        <section className="mt-8 space-y-6 lg:space-y-0" id="acerca">
          <h2 className="text-2xl lg:text-3xl font-bold text-emerald-800">
            Acerca de mí
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            <div className="space-y-4 lg:col-span-2 text-sm lg:text-base">
              <p className=" leading-[1.5]">
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

            <div className="space-y-4 lg:col-span-1">
              {informacionAcerca.map((acerca) => (
                <Acerca key={acerca.id} acerca={acerca} />
              ))}
            </div>
          </div>
        </section>

        <main className="mt-8" id="experiencia">
          <h2 className="text-2xl lg:text-3xl font-bold">Experiencia</h2>
          {experiencias.map((experiencia) => (
            <Experiencia key={experiencia.id} experiencia={experiencia} />
          ))}
        </main>

        <section className="mt-8" id="proyectos">
          <h2 className="text-2xl lg:text-3xl font-bold">Proyectos</h2>
          {proyectos.map((proyecto) => (
            <Proyecto key={proyecto.id} proyecto={proyecto} />
          ))}
        </section>

        <section className="mt-8" id="habilidades">
          <h2 className="text-2xl lg:text-3xl font-bold">Habilidades</h2>
          <div className="grid lg:grid-cols-2 gap-4 my-8">
            {habilidades.map((habilidad) => (
              <Habilidad key={habilidad.id} habilidad={habilidad} />
            ))}
          </div>
        </section>

        <footer className="mb-8 text-center text-xs lg:text-sm text-slate-500">
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
