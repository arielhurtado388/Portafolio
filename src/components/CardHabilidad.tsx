export default function CardHabilidad() {
  return (
    <article className="p-4 border border-slate-200 space-y-4 rounded-lg">
      <h3 className="text-lg md:text-xl font-semibold">Frontend</h3>
      <p>Construyendo interfaces de usuario responsivas e interactivas</p>
      <div className="flex gap-4 flex-wrap text-sm">
        <p className="bg-gray-100 py-2 px-4 rounded-lg">React</p>
        <p className="bg-gray-100 py-2 px-4 rounded-lg">Node.js</p>
        <p className="bg-gray-100 py-2 px-4 rounded-lg">PostgreSQL</p>
        <p className="bg-gray-100 py-2 px-4 rounded-lg">Git</p>
        <p className="bg-gray-100 py-2 px-4 rounded-lg">Tailwind CSS</p>
      </div>
    </article>
  );
}
