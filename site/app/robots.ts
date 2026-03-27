export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';

const siteUrl = 'https://whetu-candle-co.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
