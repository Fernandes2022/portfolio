'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

// In development, avoid framer-motion overhead to speed up navigation & HMR
const isDev = process.env.NODE_ENV !== 'production'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (isDev) return <>{children}</>

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}


