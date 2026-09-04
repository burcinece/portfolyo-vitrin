function ProjectCard({ title, description, tags = [], note, link }) {
  const content = (
    <div className="group flex h-full flex-col rounded-lg border border-zinc-800 bg-zinc-950 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/50">
      <h3 className="text-lg font-medium text-zinc-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>

      {note && <p className="mt-2 text-xs italic text-zinc-600">{note}</p>}

      {tags.length > 0 && (
        <ul className="mt-auto flex flex-wrap gap-2 pt-4">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-500"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  )

  if (!link) return content

  return (
    <a href={link} target="_blank" rel="noreferrer" className="block h-full">
      {content}
    </a>
  )
}

export default ProjectCard
