'use client'

import React from 'react'

// In development, avoid framer-motion overhead to speed up navigation & HMR
const isDev = process.env.NODE_ENV !== 'production'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  if (isDev) return <>{children}</>

  // Lazy import only in production to keep dev lean
  const AnimatePresence = require('framer-motion').AnimatePresence as typeof import('framer-motion').AnimatePresence
  const motion = require('framer-motion').motion as typeof import('framer-motion').motion
  const usePathname = require('next/navigation').usePathname as () => string

  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      {motion.div({
        key: pathname,
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.25 },
        children,
      })}
    </AnimatePresence>
  )
}


