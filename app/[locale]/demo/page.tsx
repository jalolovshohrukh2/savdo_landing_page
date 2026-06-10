import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/landing/SiteHeader';
import { DemoForm } from '@/components/landing/DemoForm';
import { SiteFooter } from '@/components/landing/SiteFooter';
import { siteConfig, locales, type Locale } from '@/i18n.config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'demo' });
  const url = `${siteConfig.url}/${locale}/demo`;
  return {
    title: `${t('accent')} ${t('rest')} — Refresh`,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(locales.map((l) => [l, `${siteConfig.url}/${l}/demo`])),
    },
  };
}

export default function DemoPage({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <main className="pt-8">
        <DemoForm />
      </main>
      <SiteFooter />
    </>
  );
}
