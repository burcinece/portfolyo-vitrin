import BackgroundGlow from '../components/BackgroundGlow'

function Resume() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-zinc-950 px-6 py-24">
      <BackgroundGlow />

      <div className="relative mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-200">Özgeçmiş</h1>
        <p className="mt-4 text-zinc-400">İçerik yakında burada olacak.</p>
      </div>
    </section>
  )
}

export default Resume
