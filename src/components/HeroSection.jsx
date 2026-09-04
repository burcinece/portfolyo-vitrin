import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa6'
import BackgroundGlow from './BackgroundGlow'

const techStack = [
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Python', icon: FaPython },
  { name: 'SQL', icon: FaDatabase },
]

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-6 pb-16 pt-28 text-center sm:pt-32">
      <BackgroundGlow />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative mx-auto flex max-w-xl flex-col items-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-zinc-200 md:text-6xl">
          Full-Stack Geliştirici
        </h1>

        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          Selçuk Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Uzmanlık
          alanım olan React ve Node.js ile ölçeklenebilir modern web
          uygulamaları geliştiriyor; bu sistemleri Python, ileri seviye
          veritabanı yönetimi (SQL) ve LLM entegrasyonlarıyla
          güçlendiriyorum.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/projeler"
            className="rounded-md bg-zinc-100 px-5 py-2 text-sm font-medium text-zinc-950 transition-colors duration-200 hover:bg-white"
          >
            Projelerimi İncele
          </Link>

          <Link
            to="/iletisim"
            className="rounded-md border border-zinc-800 px-5 py-2 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:border-zinc-700 hover:text-zinc-100"
          >
            İletişime Geç
          </Link>
        </div>

        <ul className="mt-10 flex items-center justify-center gap-5 border-t border-zinc-800 pt-6">
          {techStack.map(({ name, icon: Icon }) => (
            <li key={name} title={name} aria-label={name}>
              <Icon className="h-5 w-5 text-zinc-600 transition-colors duration-200 hover:text-zinc-300" />
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}

export default HeroSection
