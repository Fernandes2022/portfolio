import Link from 'next/link'
import { MotionDiv } from '@/components/primitives/MotionDiv'
import { Typewriter } from '@/components/Typewriter'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import DnsIcon from '@mui/icons-material/Dns'
import CloudIcon from '@mui/icons-material/Cloud'
import SpeedIcon from '@mui/icons-material/Speed'
import SecurityIcon from '@mui/icons-material/Security'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import WebIcon from '@mui/icons-material/Web'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import EmailIcon from '@mui/icons-material/Email'

export default function Home() {
  const features = [
    { title: 'Frontend Craft', text: 'Next.js 14, React 18, Tailwind, Framer Motion', icon: <CodeIcon /> },
    { title: 'Backend APIs', text: 'Node.js, Express, REST & GraphQL', icon: <DnsIcon /> },
    { title: 'Databases', text: 'PostgreSQL, MySQL, MongoDB, SQLite', icon: <StorageIcon /> },
    { title: 'Cloud & DevOps', text: 'Vercel, Docker, CI/CD', icon: <CloudIcon /> },
    { title: 'Performance', text: 'Lighthouse 95+, Web Vitals, caching', icon: <SpeedIcon /> },
    { title: 'Security', text: 'Auth, validation, OWASP best practices', icon: <SecurityIcon /> },
  ]

  const techStack = [
    'TypeScript',
    'Next.js',
    'React',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'Tailwind CSS',
    'Framer Motion',
    'JWT',
    'Docker',
    'Vercel',
  ]

  const projects = [
    {
      title: 'Analytics Dashboard',
      text: 'Real-time analytics with role-based access and fast charts.',
      icon: <WebIcon fontSize="small" />,
      href: '/projects',
      gradient: 'from-violet-500/80 to-fuchsia-500/80',
      accent: 'from-violet-400 to-fuchsia-400',
      tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
    },
    {
      title: 'E‑commerce API',
      text: 'Robust cart, payments, and admin with JWT security.',
      icon: <IntegrationInstructionsIcon fontSize="small" />,
      href: '/projects',
      gradient: 'from-cyan-500/80 to-indigo-500/80',
      accent: 'from-cyan-400 to-indigo-400',
      tags: ['Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Mobile Web App',
      text: 'Responsive PWA with offline support and push notifications.',
      icon: <PhoneIphoneIcon fontSize="small" />,
      href: '/projects',
      gradient: 'from-emerald-500/80 to-teal-500/80',
      accent: 'from-emerald-400 to-teal-400',
      tags: ['React', 'PWA', 'Vercel'],
    },
  ]

  return (
    <section className=" px-4 pt-6 relative space-y-14 sm:space-y-20 overflow-x-hidden">
      
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-gray-900 to-background" />
        <div className="pointer-events-none absolute -top-24 right-10 h-80 w-80 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 opacity-30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-0 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-25 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] bg-[linear-gradient(to_right,rgba(120,120,120,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Hero Section */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center max-w-4xl mx-auto space-y-7"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-3 pt-4 py-1 text-xs shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/40">
          <RocketLaunchIcon className="text-fuchsia-500" fontSize="inherit" />
          <span className="tracking-wide">Available for freelance & full‑time</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-snug sm:leading-tight">
          <Typewriter
            phrases={[
              'Hey, I\'m Jelili Rokeeb Adeyeye(Timi-tech)',
              'I design, build, and scale delightful web experiences',
              'I craft performant interfaces and robust backends',
            ]}
            typingDelayMs={50}
            deletingDelayMs={34}
            pauseAfterTypeMs={1100}
            className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent"
            cursorClassName="text-fuchsia-500"
          />
        </h1>
        <p className="text-foreground/70 max-w-2xl mx-auto dark:text-white">
          Full‑stack engineer focused on modern UX, robust APIs, and measurable results.
          I ship fast, accessible, and maintainable products that users love.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2.5 sm:px-5 sm:py-3 text-sm font-medium shadow-lg shadow-fuchsia-500/20 hover:scale-[1.03] active:scale-[0.99] transition-transform"
          >
            Hire Me <ArrowForwardIcon fontSize="small" />
          </Link>
          <Link
            href="/projects"
            className="flex items-center gap-2 rounded-lg border border-foreground/15 px-4 py-2.5 sm:px-5 sm:py-3 text-sm font-medium hover:bg-foreground/5 transition-colors"
          >
            View Projects
          </Link>
          <div className="flex items-center gap-2 sm:ml-2">
            <a aria-label="GitHub" href="https://github.com" className="rounded-md border border-foreground/10 p-2 hover:bg-foreground/5 transition-colors">
              <GitHubIcon fontSize="small" />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com" className="rounded-md border border-foreground/10 p-2 hover:bg-foreground/5 transition-colors">
              <LinkedInIcon fontSize="small" />
            </a>
            <a aria-label="Email" href="mailto:jelilirokeebadeyeye@gmail.com" className="rounded-md border border-foreground/10 p-2 hover:bg-foreground/5 transition-colors">
              <EmailIcon fontSize="small" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          {[{ k: 'Projects', v: '10+' }, { k: 'Stack', v: '12+' }, { k: 'Performance', v: '95+ Lighthouse' }, { k: 'Clients', v: 'Global' }].map((s, i) => (
            <div key={i} className="rounded-lg border border-foreground/10 bg-background/60 p-3 sm:p-4 shadow-sm">
              <p className="text-sm text-foreground/60">{s.k}</p>
              <p className="text-lg font-semibold">{s.v}</p>
            </div>
          ))}
        </div>
      </MotionDiv>

      {/* Tech stack chips */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-foreground/80 shadow-sm hover:border-fuchsia-400/40 hover:text-foreground transition-colors"
            >
              <AutoAwesomeIcon className="mr-1 text-fuchsia-500" fontSize="inherit" /> {t}
            </span>
          ))}
        </div>
      </MotionDiv>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((card, i) => (
          <MotionDiv
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/60 p-5 sm:p-6 shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-fuchsia-500/10 transition-all"
          >
            <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 blur-2xl group-hover:opacity-80 transition-opacity" />
            <div className="text-fuchsia-500 mb-3 group-hover:scale-110 transition-transform">
              {card.icon}
            </div>
            <h3 className="font-semibold">{card.title}</h3>
            <p className="text-sm text-foreground/70">{card.text}</p>
          </MotionDiv>
        ))}
      </div>

      {/* Projects Preview */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <h2 className="text-2xl font-bold">Featured Work</h2>
          <Link href="/projects" className="text-sm text-fuchsia-600 hover:underline flex items-center gap-1">
            Browse all <ArrowForwardIcon fontSize="inherit" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <MotionDiv
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/60 p-5 sm:p-6 shadow-lg hover:shadow-fuchsia-500/20 transition-shadow"
            >
              <div aria-hidden className={`pointer-events-none absolute -inset-1 opacity-30 blur-2xl bg-gradient-to-r ${p.gradient}`} />
              <div className="relative">
                <div className={`mb-4 inline-flex items-center gap-2 rounded-md bg-gradient-to-r ${p.accent} px-3 py-1 text-xs text-white shadow`}> {p.icon} {p.title}</div>
                <p className="text-sm text-foreground/70 mb-3">{p.text}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-foreground/10 bg-foreground/5 px-2 py-0.5 text-[11px] text-foreground/70">
                      {t}
                    </span>
                  ))}
                </div>
                <Link href={p.href} className="mt-4 inline-flex items-center gap-1 text-sm text-fuchsia-600 hover:underline">
                  View case study <ArrowForwardIcon fontSize="inherit" />
                </Link>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-rose-600/10 p-8 sm:p-10 text-center shadow-xl"
      >
        <div aria-hidden className="pointer-events-none absolute -inset-1 bg-[radial-gradient(ellipse_at_top,rgba(244,114,182,0.15),transparent_60%)]" />
        <div className="relative space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Let’s build something exceptional together
          </h3>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Whether it’s a polished MVP or a complex platform, I can help you move from idea to shipping with speed and quality.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-fuchsia-500/20 hover:scale-[1.03] active:scale-[0.99] transition-transform"
            >
              Start a conversation <ArrowForwardIcon fontSize="small" />
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-lg border border-foreground/15 px-5 py-3 text-sm font-medium hover:bg-foreground/5 transition-colors"
            >
              See my work
            </Link>
          </div>
        </div>
      </MotionDiv>
    </section>
  )
}
