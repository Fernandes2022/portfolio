'use client'

import { useState, useEffect, type FormEvent } from 'react'
import SendIcon from '@mui/icons-material/Send'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

      
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timeoutId = setTimeout(() => {
        setStatus('idle')
        setErrorMessage(null)
      }, 5000) 
      return () => clearTimeout(timeoutId)
    }
  }, [status])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setErrorMessage(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: { 'Content-Type': 'application/json' },
      })
      const body = await res.json().catch(() => null)
      if (!res.ok) {
        const details = Array.isArray(body?.issues)
          ? body.issues.map((i: any) => i?.message).filter(Boolean).join(', ')
          : undefined
        const message = body?.error
          ? `${body.error}${details ? `: ${details}` : ''}`
          : `Request failed (${res.status})`
        console.error('CONTACT_API_ERROR', body)
        setErrorMessage(message)
        throw new Error(message)
      }
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
      
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm">Name</label>
          <input id="name" name="name" required minLength={2} value={name} onChange={(e) => setName(e.target.value)} className="rounded-lg border border-foreground/15 bg-background px-3 py-2.5 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/40" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm">Email</label>
          <input id="email" name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-lg border border-foreground/15 bg-background px-3 py-2.5 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/40" />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm">Message</label>
        <textarea id="message" name="message" required minLength={10} rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className="rounded-lg border border-foreground/15 bg-background px-3 py-2.5 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/40" />
      </div>
      <div className="flex items-center gap-3">
        <button 
          type="submit" 
          disabled={status === 'loading'} 
          className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-fuchsia-500/20 disabled:opacity-60"
        >
          {status === 'loading' ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              <SendIcon fontSize="small" /> Send message
            </>
          )}
        </button>
        {status === 'success' && (
          <p className="text-sm text-green-600">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-600" role="status" aria-live="polite">
            {errorMessage || 'Something went wrong. Please try again.'}
          </p>
        )}
      </div>
    </form>
  )
}
