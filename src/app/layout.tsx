import '@/app/globals.css'
import type { Metadata } from 'next'
import Providers from './providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import { inter } from './fonts'

export const metadata: Metadata = {
  title: 'Timi-tech | Portfolio',
  description: 'Full-stack developer specializing in React, Next.js, Node.js, and databases (SQL & NoSQL).',
  openGraph: {
    title: 'Timi-tech | Portfolio',
    description: 'Modern portfolio showcasing projects, experience, and contact.',
    url: 'https://your-domain.com',
    siteName: 'Developer Portfolio',
    images: [{ url: '/restaurant.PNG', width: 1200, height: 630, alt: 'Portfolio' }],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://your-domain.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Providers>
          <Navbar />
          <main className="container mx-auto py-2 min-h-[calc(100dvh-140px)]">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
