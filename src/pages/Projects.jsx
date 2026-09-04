function Projects() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-[58%] rounded-full bg-rose-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute -top-16 left-1/2 h-[460px] w-[460px] -translate-x-[42%] rounded-full bg-zinc-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-xl text-center">
        <p className="text-sm font-medium text-zinc-500">Çalışmalarım</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 md:text-5xl">
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
