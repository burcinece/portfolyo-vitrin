import BackgroundGlow from '../components/BackgroundGlow'

function Projects() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-zinc-950 px-6 py-24">
      <BackgroundGlow />

      <div className="relative mx-auto max-w-xl text-center">
        <p className="text-sm font-medium text-zinc-500">Çalışmalarım</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-200 md:text-5xl">
          Projeler
        </h1>
        <p className="mx-auto mt-6 text-base leading-relaxed text-zinc-400">
          Üzerinde çalıştığım ve canlıya almaya hazırlandığım yeni nesil
          projeler yakında burada yer alacaktır.
        </p>
      </div>
    </section>
  )
}

export default Projects
