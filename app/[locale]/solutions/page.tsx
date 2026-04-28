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
        <section className="section">
          <div className="container-savdo">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">{tIndex('eyebrow')}</span>
              <h1 className="h-display mt-5">{tIndex('title')}</h1>
              <p className="mx-auto mt-6 max-w-xl text-lg text-slate-700 sm:text-xl">
                {tIndex('subtitle')}
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SOLUTIONS.map((sol) => (
                <Link
                  key={sol.slug}
                  href={`/${locale}/solutions/${sol.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={sol.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-savdo-100 text-savdo-800">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                        <path d={sol.icon} />
                      </svg>
                    </div>
                    <h2 className="mt-4 font-display text-lg font-bold text-slate-900">
                      {t(`items.${sol.slug}.name`)}
                    </h2>
                    <p className="mt-1 text-sm text-slate-700">
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
