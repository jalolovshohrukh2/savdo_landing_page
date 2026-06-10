import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SOLUTIONS } from '@/lib/solutions';
import { siteConfig, locales, type Locale } from '@/i18n.config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'solutions.index' });
  const url = `${siteConfig.url}/${locale}/solutions`;
  return {
    title: t('seoTitle'),
    description: t('seoDescription'),
    alternates: {
      canonical: url,
      languages: Object.fromEntries(locales.map((l) => [l, `${siteConfig.url}/${l}/solutions`])),
    },
  };
}

export default async function SolutionsIndex({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'solutions' });
  const tIndex = await getTranslations({ locale, namespace: 'solutions.index' });

  return (
    <>
      <Header />
      <main>
        <section className="py-20 sm:py-28">
          <div className="container-refresh">
            <div className="mx-auto max-w-3xl text-center">
              <span className="refresh-eyebrow">{tIndex('eyebrow')}</span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-refresh-text sm:text-5xl">
                {tIndex('title')}
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base text-refresh-muted sm:text-lg">
                {tIndex('subtitle')}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {SOLUTIONS.map((sol) => (
                <Link
                  key={sol.slug}
                  href={`/${locale}/solutions/${sol.slug}`}
                  className="group relative overflow-hidden rounded-xl border border-refresh-line bg-refresh-surface transition hover:-translate-y-1 hover:border-refresh-surface-3 sm:rounded-2xl"
                >
                  <div className="relative aspect-square overflow-hidden sm:aspect-[4/3]">
                    <Image
                      src={sol.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-refresh-bg/70 to-transparent" />
                  </div>
                  <div className="p-3.5 sm:p-5">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-refresh-sage/15 text-refresh-sage sm:h-9 sm:w-9">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor">
                        <path d={sol.icon} />
                      </svg>
                    </div>
                    <h2 className="mt-3 text-sm font-semibold text-refresh-text sm:mt-4 sm:text-lg">
                      {t(`items.${sol.slug}.name`)}
                    </h2>
                    <p className="mt-1 text-xs text-refresh-muted sm:text-sm">
                      {t(`items.${sol.slug}.short`)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
