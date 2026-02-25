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
    role: "DevOps / Full-Stack Infrastructure Engineer",
    company: "Australia based tech company — Remote",
    period: "February 2026",
    points: [
      "Architected and deployed a production monorepo merging 5 independent repositories (Next.js frontend, Express/TypeScript API, AI service, worker service, social automation) into a single Docker Compose orchestration with 8 containerized services.",
      "Configured Hetzner Cloud VPS (Ubuntu 22.04) with full security hardening: SSH key-only auth, UFW firewall, Fail2Ban, kernel-level SYN flood protection, non-root Docker containers, unattended security updates, and HSTS/TLS 1.2+ enforcement.",
      "Built multi-stage Dockerfiles for each service, resolving complex build issues including pnpm symlink handling for Prisma client generation, native module compilation (sharp on Alpine), and cross-stage artifact management.",
      "Deployed Nginx reverse proxy with SSL termination (Let's Encrypt/Certbot auto-renewal), rate limiting (per-endpoint zones for auth, API, and general traffic), security headers, and WebSocket upgrade support.",
      "Configured PostgreSQL and Redis within internal Docker networking (no external exposure), with automated daily database backups, 30-day retention, and cron-based maintenance schedules.",
      "Wrote production deployment scripts handling environment validation, BOM stripping, domain placeholder replacement, database migrations (Prisma), health check polling, and graceful rollback via git stash.",
      "Conducted a 97-issue full-stack audit across all 5 services covering security vulnerabilities, broken integrations, mocked payment/AI flows, unprotected admin routes, and cross-service communication gaps — delivered as a prioritized remediation report."
    ],
  },
  {
    role: 'DevOps / Infrastructure Engineer',
    company: 'Australia based tech company — Remote',
    period: 'January 2026',
    points: [
      'Cloud DevOps / Infrastructure on Hetzner (Ubuntu VPS, Node, Postgres, PM2)',
      'Deployed and operated a two-service Node/TypeScript system on Hetzner Cloud (VPS)',
      'Production‑ready deployment and hardening of a two‑service Node + Postgres system on a VPS (PM2, Postgres, health/readiness/metrics, DLQ, env validation).',
    ],
  },
  {
    role: 'Backend Engineer',
    company: 'Australia based tech company — Remote',
    period: 'January 2026',
    points: [
      'I built Orbit, a reliability‑focused backend framework that coordinates complex, multi‑phase workflows with checkpointing, idempotency, and safe rollback behavior. The system includes DLQ‑based dispatch handling, schema‑validated configuration, telemetry and audit ledgers, health/metrics endpoints, and Prisma‑backed migrations to support production deployments.',
    ],
  },
  {
    role: 'Backend Engineer',
    company: 'Australia based tech company — Remote',
    period: 'December 2025',
    points: [
      'Built a Node.js/TypeScript microservice that orchestrates multi-day customer engagement campaigns across email and voice, with JWT-secured APIs, BullMQ/Redis background jobs, and OpenAI-powered message personalization and response analysis.',
    ],
  },
  {
    role: 'Backend/Automation Engineer',
    company: 'Australia based tech company — Remote',
    period: 'November 2025',
    points: [
      'Built and productionized a secure Node.js/n8n backend, including Docker/PM2 setup, deep health checks with Redis, robust job queues with DLQs, strict CORS and secret validation, MongoDB indexes/migrations, and PII‑safe logging with strong idempotency and test coverage.',
    ],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Australia based tech company — Remote',
    period: 'October 2025',
    points: [
      'Developed a production-ready SaaS content distribution platform: Next.js + TS frontend (dashboards, auth, billing, uploads UI) integrated with an Express/Prisma/BullMQ backend for queued uploads, real-time job tracking over WebSockets, and Stripe-based subscription plans (Free/Pro/Agency) with enforced quotas.',
    ],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'ByteForge Technologies — Remote',
    period: 'June 2024 - December 2025',
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
        <p className="text-foreground/70 max-w-2xl dark:text-white text-center mx-auto">
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


