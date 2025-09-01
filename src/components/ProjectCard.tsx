import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'
import Image from 'next/image'

type Project = {
  title: string
  description: string
  tech: string[]
  image?: string
  github?: string
  demo?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/60 shadow-lg hover:shadow-fuchsia-500/10 transition-shadow">
      {project.image ? (
        <div className="relative w-full h-44 sm:h-48">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            priority={false}
          />
        </div>
      ) : (
        <div className="h-44 sm:h-48 bg-foreground/5" />
      )}
      <div className="p-5 sm:p-6 space-y-3">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-foreground/70">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-foreground/10 bg-foreground/5 text-foreground/80">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 pt-1">
          {project.github ? (
            <a href={project.github} target="_blank" className="inline-flex items-center gap-1 text-sm text-fuchsia-600 hover:underline">
              <GitHubIcon fontSize="small" /> Code
            </a>
          ) : null}
          {project.demo ? (
            <a href={project.demo} target="_blank" className="inline-flex items-center gap-1 text-sm text-fuchsia-600 hover:underline">
              <LaunchIcon fontSize="small" /> Live
            </a>
          ) : null}
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-80 blur-2xl bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 transition-opacity" />
    </article>
  )
}


