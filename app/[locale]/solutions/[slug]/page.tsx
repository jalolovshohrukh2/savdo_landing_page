import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SolutionPage } from '@/components/solutions/SolutionPage';
import { SOLUTIONS, type SolutionSlug } from '@/lib/solutions';
import { siteConfig, locales, type Locale } from '@/i18n.config';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    SOLUTIONS.map((s) => ({ locale, slug: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: SolutionSlug };
}): Promise<Metadata> {
  if (!SOLUTIONS.find((s) => s.slug === params.slug)) return {};
  const t = await getTranslations({
    locale: params.locale,
    namespace: `solutions.items.${params.slug}`,
  });
  const url = `${siteConfig.url}/${params.locale}/solutions/${params.slug}`;
  return {
    title: t('seoTitle'),
    description: t('seoDescription'),
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${siteConfig.url}/${l}/solutions/${params.slug}`]),
      ),
    },
  };
}

export default function Page({
  params,
}: {
  params: { locale: Locale; slug: SolutionSlug };
}) {
  if (!SOLUTIONS.find((s) => s.slug === params.slug)) notFound();
  unstable_setRequestLocale(params.locale);
  return (
    <>
      <Header />
      <main>
        <SolutionPage slug={params.slug} locale={params.locale} />
      </main>
      <Footer />
    </>
  );
}
