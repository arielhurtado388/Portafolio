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
      <div className="max-w-[95%] md:max-w-7xl mx-auto">
        <Header />

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
              {informacionAcerca.map((acerca) => (
                <Acerca key={acerca.id} acerca={acerca} />
              ))}
            </div>
          </div>
        </section>

        <main className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold">Experiencia</h2>
          {experiencias.map((experiencia) => (
            <Experiencia key={experiencia.id} experiencia={experiencia} />
          ))}
        </main>

        <section className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold">Proyectos</h2>
          {proyectos.map((proyecto) => (
            <Proyecto key={proyecto.id} proyecto={proyecto} />
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold">Habilidades</h2>
          <div className="grid md:grid-cols-2 gap-4 my-8">
            {habilidades.map((habilidad) => (
              <Habilidad key={habilidad.id} habilidad={habilidad} />
            ))}
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
