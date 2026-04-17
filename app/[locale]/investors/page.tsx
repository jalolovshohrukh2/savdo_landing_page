import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { InvestorsPage } from '@/components/investors/InvestorsPage';
import { siteConfig, locales, type Locale } from '@/i18n.config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'investors.seo' });
  const url = `${siteConfig.url}/${locale}/investors`;
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: url,
      languages: Object.fromEntries(locales.map((l) => [l, `${siteConfig.url}/${l}/investors`])),
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
        <InvestorsPage />
      </main>
      <Footer />
    </>
  );
}
