import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://timi-techportfolio.vercel.app'
  return [
    '',
    '/about',
    '/projects',
    '/experience',
    '/contact',
  ].map((p) => ({ url: `${base}${p}`, changeFrequency: 'monthly', priority: p === '' ? 1 : 0.7 }))
}


