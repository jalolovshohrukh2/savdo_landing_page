import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PartnersPage } from '@/components/partners/PartnersPage';
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

export default function Page({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Header />
      <main>
        <PartnersPage />
      </main>
      <Footer />
    </>
  );
}
