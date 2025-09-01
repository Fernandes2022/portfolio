import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience | Timi-tech',
  description: 'A track record of delivering reliable, performant software and collaborating across teams.',
}

type Experience = {
  role: string
  company: string
  period?: string
  details?: string
  points?: string[]
}

const experiences: Experience[] = [
  {
    role: 'Full-Stack Engineer',
    company: 'ByteForge Technologies — Remote',
    period: 'June 2024 – Present',
    points: [
      'Developed scalable full-stack applications with React, Node.js, and PostgreSQL for fintech solutions.',
      'Integrated secure authentication systems and implemented role-based access control.',
      'Led frontend development with Tailwind CSS for a highly responsive user interface.',
      'Designed RESTful APIs and collaborated with QA engineers for automated testing pipelines.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'SkyNet Labs — Lagos',
    period: 'January 2023 – May 2024',
    points: [
      'Built data-intensive dashboards for IoT monitoring using React and WebSockets.',
      'Optimized backend performance and response times using query optimization and caching.',
      'Maintained CI/CD workflows using GitHub Actions and Docker for microservice deployment.',
    ],
  },
  {
    role: 'Nutri-C Locale — Restaurant Ordering App',
    company: 'Full-Stack Project',
    points: [
      'Built a fully functional full-stack restaurant ordering platform from scratch for Nutri-C Locale.',
      'Developed the frontend using React, Tailwind CSS, and responsive design principles to ensure seamless user experience across devices.',
      'Engineered the backend with Node.js, Express, and MongoDB, handling authentication, order tracking, and admin dashboards.',
      'Implemented features such as real-time order status, menu management, and secure payment handling.',
      'Deployed the app with CI/CD pipelines, Docker, and integrated cloud-hosted database for scalability and performance.',
    ],
  },
  {
    role: 'myJob — Freelance Job Marketplace',
    company: 'Full-Stack Project',
    points: [
      'Developed a full-stack, production-ready platform that connects clients with freelancers for task-based work.',
      'Designed the frontend using React, Tailwind CSS, and clean UI components for smooth client–freelancer interactions.',
      'Built the backend with Node.js, Express, and MongoDB, implementing user roles, job posting, application tracking, and messaging.',
      'Integrated authentication, real-time notifications, and secure job/order workflows for seamless collaboration.',
      'Deployed the app with full CI/CD support, and implemented admin tools for managing disputes, users, and payouts.',
    ],
  },
]

export default function ExperiencePage() {
  return (
    <section className="px-3 relative space-y-10 sm:space-y-14 overflow-x-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-gray-900 to-background" />
        <div className="pointer-events-none absolute -top-24 right-10 h-80 w-80 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 opacity-30 blur-3xl" />
      </div>

      <header className="space-y-3 pt-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold">
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent">Experience</span>
        </h1>
        <p className="text-foreground/70 max-w-2xl dark:text-white">
          A track record of delivering reliable, performant software and collaborating across teams.
        </p>
      </header>

      
      <ol className="relative ps-6 py-7">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-foreground/10" />
        {experiences.map((exp, idx) => (
          <li key={idx} className="relative mb-8 last:mb-0">
            <div className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 ring-4 ring-background" />
            <div className="group relative overflow-hidden rounded-xl border border-foreground/10 bg-background/60 p-5 sm:p-6 shadow-lg hover:shadow-fuchsia-500/10 transition-shadow">
              <div aria-hidden className="pointer-events-none absolute -inset-1 opacity-30 blur-2xl bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20" />
              <div className="relative">
                <h3 className="font-semibold">{exp.role} · {exp.company}</h3>
                {exp.period && (
                  <p className="text-xs text-foreground/60">{exp.period}</p>
                )}
                {Array.isArray(exp.points) ? (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  exp.details && (
                    <p className="mt-1.5 text-sm text-foreground/80">{exp.details}</p>
                  )
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}


