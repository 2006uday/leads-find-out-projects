import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];
  const base = siteUrl.replace(/\/$/, '');
  return ['', '/rooms', '/services', '/gallery', '/location', '/reviews', '/book'].map((path) => ({ url: `${base}${path}`, changeFrequency: path === '' ? 'weekly' : 'monthly', priority: path === '' ? 1 : 0.7 }));
}
