'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import EmailIcon from '@mui/icons-material/Email'
import ThemeToggle  from './ThemeToggle'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock scroll when mobile menu is open
  useEffect(() => {
    const root = document.documentElement
    if (open) {
      const previousOverflow = root.style.overflow
      root.style.overflow = 'hidden'
      return () => {
        root.style.overflow = previousOverflow
      }
    }
  }, [open])

  // Close on route change
  useEffect(() => {
    if (open) setOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Close on Escape key
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      {/* Gradient-tinted backdrop and bottom glow */}
      <div aria-hidden className="absolute inset-0 -z-10 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-gradient-to-r from-violet-600/5 via-fuchsia-600/5 to-rose-600/5" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" />

      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link prefetch href="/" className="font-semibold bg-gradient-to-r from-green-600 to-fuchsia-300 bg-clip-text text-transparent">Timi-tech</Link>

        <nav className="hidden md:flex gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                aria-current={isActive ? 'page' : undefined}
                className={`inline-flex items-center rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 text-foreground border border-foreground/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://github.com/fernandes2022" target="_blank" aria-label="GitHub" className="text-foreground/70 hover:text-foreground">
            <GitHubIcon fontSize="small" />
          </a>
          <a href="https://www.linkedin.com/in/timi-tech" target="_blank" aria-label="LinkedIn" className="text-foreground/70 hover:text-foreground">
            <LinkedInIcon fontSize="small" />
          </a>
          <a href="https://wa.me/2349067977261" target="_blank" aria-label="WhatsApp" className="text-foreground/70 hover:text-foreground">
            <WhatsAppIcon fontSize="small" />
          </a>
          <ThemeToggle />
          <button
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-foreground/20 p-2.5 hover:bg-foreground/5 active:scale-[0.98] transition"
            onClick={() => setOpen(true)}
          >
            <MenuIcon fontSize="small" />
          </button>
        </div>
      </div>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {open ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="md:hidden fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm"
                  onClick={() => setOpen(false)}
                  aria-hidden="true"
                >
                  <motion.aside
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'tween', duration: 0.25 }}
                    drag="x"
                    dragConstraints={{ left: -80, right: 80 }}
                    dragElastic={0.04}
                    onDragEnd={(_, info) => {
                      if (info.offset.x > 60 || info.velocity.x > 600) setOpen(false)
                    }}
                    className="absolute right-0 top-0 h-full w-80 max-w-[85%] sm:w-96 bg-background border-s border-foreground/10 p-6 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] flex flex-col shadow-2xl overflow-hidden"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="mobile-menu-title"
                    id="mobile-menu"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Gradient aura + grid pattern to match landing page */}
                    <div aria-hidden className="pointer-events-none absolute -inset-1 opacity-40 blur-2xl bg-gradient-to-b from-violet-500/10 via-fuchsia-500/10 to-rose-500/10" />
                    <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,white,transparent_70%)] bg-[linear-gradient(to_right,rgba(120,120,120,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="flex items-center justify-between py-6">
                      <span id="mobile-menu-title" className="font-semibold">Menu</span>
                      <button aria-label="Close menu" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-md border border-foreground/20 p-2.5 hover:bg-foreground/5">
                        <CloseIcon fontSize="small" />
                      </button>
                    </div>
                    <nav className="mt-6 grid gap-1.5">
                      {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            aria-current={isActive ? 'page' : undefined}
                            className={`px-3 py-3 rounded-lg text-base ${
                              isActive
                                ? 'bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 text-foreground border border-foreground/10'
                                : 'text-foreground/80 hover:text-foreground hover:bg-foreground/5'
                            }`}
                          >
                            {item.label}
                          </Link>
                        )
                      })}
                    </nav>
                    <div className="mt-4">
                      <Link
                        href="/contact"
                        prefetch
                        onClick={() => setOpen(false)}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2.5 text-sm font-medium shadow-lg shadow-fuchsia-500/20 w-full"
                      >
                        Hire Me
                      </Link>
                    </div>
                    <div className="mt-auto flex items-center gap-4 pb-6">
                      <a href="https://github.com/fernandes2022" target="_blank" aria-label="GitHub" className="text-foreground/70 hover:text-foreground">
                        <GitHubIcon fontSize="small" />
                      </a>
                      <a href="https://www.linkedin.com/in/timi-tech" target="_blank" aria-label="LinkedIn" className="text-foreground/70 hover:text-foreground">
                        <LinkedInIcon fontSize="small" />
                      </a>
                      <a href="https://wa.me/2349067977261" target="_blank" aria-label="WhatsApp" className="text-foreground/70 hover:text-foreground">
                        <WhatsAppIcon fontSize="small" />
                      </a>
                      <a aria-label="Email" href="mailto:jelilirokeebadeyeye@gmail.com" className="text-foreground/70 hover:text-foreground">
                      <EmailIcon fontSize="small" />
                      </a>      
                    </div>
                  </motion.aside>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body
          )
        : null}
    </header>
  )
}


