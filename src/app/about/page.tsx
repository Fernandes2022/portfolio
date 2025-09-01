import Link from 'next/link'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import VerifiedIcon from '@mui/icons-material/Verified'
import SpeedIcon from '@mui/icons-material/Speed'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Timi-tech',
  description: 'Full-stack developer specializing in React, Next.js, Node.js, and databases (SQL & NoSQL).',
}


const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Bootstrap',
  'Tailwind CSS',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'SQLite',
  'Prisma',
  'REST & APIs',
  'Git',
  'GitHub',
  'JWT',
  'Docker',
  'Vercel',
  'Netlify',
  'Framer Motion',
  'CI/CD',
  'GraphQL',
  'Redux',
  'Zod',
  'EmailJs',
  'Nodemailer',
  'Resend',
]

const values = [
  {
    title: 'Quality over everything',
    text: 'Readable code, strong architecture, and delightful UX are non‑negotiable.',
    icon: <VerifiedIcon />,
  },
  {
    title: 'Crafting experiences',
    text: 'Interfaces that feel polished, fast, and intuitive on every device.',
    icon: <AutoAwesomeIcon />,
  },
  {
    title: 'Ship with speed',
    text: 'Rapid iteration with CI/CD, pragmatic choices, and measurable results.',
    icon: <SpeedIcon />,
  },
]

export default function AboutPage() {
  return (
    <section className="relative space-y-14 sm:space-y-16 overflow-x-hidden pt-5 px-4">
      {/* Background accents */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-gray-900 to-background" />
        <div className="pointer-events-none absolute -top-24 right-10 h-80 w-80 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 opacity-30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-0 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-25 blur-3xl" />
      </div>

      {/* Hero */}
      <header className="space-y-4 max-w-3xl pt-3 text-center">
        <div className="p-2 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 text-xs shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/40 text-center ">
          <RocketLaunchIcon className="text-fuchsia-500" fontSize="inherit" />
          <span className="tracking-wide ">About me</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center">
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent">
          The Human Behind the Code
          </span>
        </h1>
        <div className="text-foreground/70 dark:text-white space-y-4">
          <p>
          Hey, I’m Jelili Rokeeb Adeyeye(Timi-tech), a developer who loves turning ideas into real, working products. For me, coding isn’t just about writing functions and fixing bugs — it’s about creating experiences that feel simple, smooth, and meaningful.
          </p>
          <p>
          I spend most of my time building with React, Next.js, Tailwind CSS, Node.js, Express, and various Database(MongoDB, PostgreSQL, MySQL, SQLite), but what excites me most is the process of solving problems and watching something go from concept to launch.
          </p>
          <p>
          When I’m not deep in code, I’m usually learning something new, sketching out ideas, or exploring ways to make my projects more creative and impactful.
          </p>
          <p>
          At the heart of it, I enjoy building things that people actually want to use — whether it’s a small feature that makes life easier, or a full application that brings an idea to life.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          {[{ k: 'Experience', v: '3+ yrs' }, { k: 'Projects', v: '10+' }, { k: 'Performance', v: '95+ Lighthouse' }, { k: 'Response', v: '~24h' }].map((s, i) => (
            <div key={i} className="rounded-lg border border-foreground/10 bg-background/60 p-3 sm:p-4 shadow-2xl">
              <p className="text-sm text-foreground/60 dark:text-gray-200">{s.k}</p>
              <p className="text-lg font-semibold">{s.v}</p>
            </div>
          ))}
        </div>
      </header>

      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Skills & tools</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-foreground/80 shadow-sm hover:border-fuchsia-400/40 hover:text-foreground transition-colors"
            >
              <AutoAwesomeIcon className="mr-1 text-fuchsia-500" fontSize="inherit" /> {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">What I value</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/60 p-6 shadow-lg hover:shadow-fuchsia-500/10 transition-shadow">
              <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 blur-2xl group-hover:opacity-80 transition-opacity" />
              <div className="relative space-y-2">
                <div className="text-fuchsia-500">{v.icon}</div>
                <h3 className="font-semibold">{v.title}</h3>
                <p className="text-sm text-foreground/70">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience summary */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Highlights</h2>
        <ol className="relative ps-6">
          <div className="absolute left-2 top-0 bottom-0 w-px bg-foreground/10" />
          {[
            {
              t: 'Full‑stack delivery',
              d: 'Shipped production features end‑to‑end: frontend, APIs, and data modeling.',
            },
            {
              t: 'Performance wins',
              d: 'Improved Web Vitals and Lighthouse to 95+ across multiple projects.',
            },
            { t: 'Collaboration', d: 'Partnered closely with design and product to deliver outcomes.' },
          ].map((item) => (
            <li key={item.t} className="relative mb-6 last:mb-0">
              <div className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 ring-4 ring-background" />
              <div className="relative rounded-xl border border-foreground/10 bg-background/60 p-5 shadow-lg">
                <h3 className="font-medium">{item.t}</h3>
                <p className="mt-1 text-sm text-foreground/80">{item.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      
      <section className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-rose-600/10 p-8 sm:p-10 text-center shadow-xl">
        <div aria-hidden className="pointer-events-none absolute -inset-1 bg-[radial-gradient(ellipse_at_top,rgba(244,114,182,0.15),transparent_60%)]" />
        <div className="relative space-y-3">
          <h3 className="text-2xl font-bold">Let’s work together</h3>
          <p className="text-foreground/70 max-w-2xl mx-auto">Have an ambitious idea or need a reliable engineer? I can help you ship quickly with quality.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-fuchsia-500/20">
              Contact me <ArrowForwardIcon fontSize="small" />
            </Link>
            <Link href="/projects" className="flex items-center gap-2 rounded-lg border border-foreground/15 px-5 py-3 text-sm font-medium hover:bg-foreground/5 transition-colors">
              View projects
            </Link>
          </div>
        </div>
      </section>
    </section>
  )
}


