'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'

type TypewriterProps = {
  phrases: string[]
  className?: string
  cursorClassName?: string
  typingDelayMs?: number
  deletingDelayMs?: number
  pauseAfterTypeMs?: number
  pauseBeforeTypeMs?: number
}

export function Typewriter({
  phrases,
  className,
  cursorClassName,
  typingDelayMs = 50,
  deletingDelayMs = 24,
  pauseAfterTypeMs = 1200,
  pauseBeforeTypeMs = 300,
}: TypewriterProps) {
  const sanitizedPhrases = useMemo(() => phrases.filter((p) => p && p.length > 0), [phrases])

  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    if (sanitizedPhrases.length === 0) return

    const currentPhrase = sanitizedPhrases[phraseIndex % sanitizedPhrases.length]
    const atFullPhrase = displayText === currentPhrase
    const atEmpty = displayText.length === 0

    let nextText: string
    let delay: number

    if (!isDeleting) {
      // Typing forward
      nextText = currentPhrase.slice(0, displayText.length + 1)
      delay = typingDelayMs
      if (nextText === currentPhrase) {
        // Completed typing this phrase
        delay = pauseAfterTypeMs
      }
    } else {
      // Deleting backward
      nextText = currentPhrase.slice(0, Math.max(0, displayText.length - 1))
      delay = deletingDelayMs
      if (nextText.length === 0) {
        delay = pauseBeforeTypeMs
      }
    }

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      setDisplayText(nextText)

      if (!isDeleting && atFullPhrase) {
        setIsDeleting(true)
      } else if (isDeleting && atEmpty) {
        setIsDeleting(false)
        setPhraseIndex((i) => (i + 1) % sanitizedPhrases.length)
      }
    }, delay)

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [displayText, isDeleting, phraseIndex, sanitizedPhrases, typingDelayMs, deletingDelayMs, pauseAfterTypeMs, pauseBeforeTypeMs])

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      {displayText}
      <motion.span
        aria-hidden
        className={cursorClassName ?? 'ml-1 inline-block h-[1em] w-[2px] align-[-0.1em] bg-current'}
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.15, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </span>
  )
}


