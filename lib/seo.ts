import type { Metadata } from 'next';
import { locales, type Locale, siteConfig } from '@/i18n.config';

const ogLocale: Record<Locale, string> = {
  tj: 'tg_TJ',
  ru: 'ru_RU',
  en: 'en_US',
  uz: 'uz_UZ',
};

export function buildMetadata(locale: Locale, t: (key: string) => string): Metadata {
  const title = t('seo.title');
  const description = t('seo.description');
  const url = `${siteConfig.url}/${locale}`;

  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [l, `${siteConfig.url}/${l}`]),
  );
  languages['x-default'] = `${siteConfig.url}/ru`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: 'website',
      locale: ogLocale[locale],
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og.png'],
    },
    keywords: t('seo.keywords'),
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    telephone: siteConfig.phone,
    sameAs: Object.values(siteConfig.social),
  };
}

export function softwareJsonLd(t: (key: string) => string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteConfig.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android, iOS, Windows',
    description: t('seo.description'),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: t('seo.trial'),
    },
  };
}
