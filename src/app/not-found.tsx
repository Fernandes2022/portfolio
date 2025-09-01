import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] grid place-items-center text-center">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="text-foreground/70">The page you’re looking for doesn’t exist.</p>
        <Link href="/" className="underline">Go back home</Link>
      </div>
    </section>
  )
}


