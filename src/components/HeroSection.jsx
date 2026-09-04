import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500">
          Selçuk Üniversitesi
        </p>

        <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-100 sm:text-5xl md:text-6xl">
          Bilgisayar Mühendisliği Öğrencisi
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
          Python, veritabanı yönetimi (PL/SQL, T-SQL) ve LLM entegrasyonları
          odaklı yazılımlar geliştiriyorum.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/projeler"
            className="rounded-md bg-zinc-100 px-8 py-3 text-sm font-medium text-zinc-950 transition-colors duration-200 hover:bg-white"
          >
            Projelerimi İncele
          </Link>

          <Link
            to="/iletisim"
            className="rounded-md border border-zinc-800 px-8 py-3 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:border-zinc-700 hover:bg-zinc-900/50 hover:text-zinc-100"
          >
            İletişime Geç
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
