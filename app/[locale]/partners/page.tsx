import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { siteConfig, locales, type Locale } from '@/i18n.config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'partners.seo' });
  const url = `${siteConfig.url}/${locale}/partners`;
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: url,
      languages: Object.fromEntries(locales.map((l) => [l, `${siteConfig.url}/${l}/partners`])),
    },
    openGraph: {
      type: 'website',
      url,
      title: t('title'),
      description: t('description'),
      siteName: siteConfig.name,
    },
  };
}

// Temporarily disabled — the Partners page is hidden from the site for now
// (no nav/footer links). The component is kept; remove this notFound() to restore.
export default function Page({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  notFound();
}
