export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';

const siteUrl = 'https://whetu-candle-co.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-03-27');

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/shop-contact/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
