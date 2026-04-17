import type { MetadataRoute } from 'next';
import { locales, siteConfig } from '@/i18n.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: locale === 'ru' ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${siteConfig.url}/${l}`])),
    },
  }));
}
