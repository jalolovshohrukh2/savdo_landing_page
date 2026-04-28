'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SOLUTIONS_BY_SLUG, type SolutionSlug } from '@/lib/solutions';
import { siteConfig } from '@/i18n.config';

export function SolutionPage({
  slug,
  locale,
}: {
  slug: SolutionSlug;
  locale: string;
}) {
  const sol = SOLUTIONS_BY_SLUG[slug];
  const t = useTranslations('solutions');
  const tItem = useTranslations(`solutions.items.${slug}`);
  const tShared = useTranslations('solutions.shared');

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_10%,rgba(57,173,168,0.14),transparent_60%),radial-gradient(40%_60%_at_95%_0%,rgba(57,173,168,0.12),transparent_60%)]" />
        <div className="container-savdo relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href={`/${locale}/solutions`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-savdo-700 transition hover:text-savdo-800"
              >
                <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor">
                  <path d="M9.5 3l-5 5 5 5 1.4-1.4L7.3 8l3.6-3.6L9.5 3z" />
                </svg>
                {t('backAll')}
              </Link>
              <h1 className="mt-4 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-[64px]">
                {tItem('title')}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700 sm:text-xl">
                {tShared('subtitle')}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={siteConfig.signupFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {tShared('ctaPrimary')}
                </a>
                <Link href={`/${locale}#pricing`} className="btn-secondary">
                  {tShared('ctaSecondary')}
                </Link>
              </div>
              {/* Stat strip — up to 40% time saved, 0% loss, etc. */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
                {(['stat1', 'stat2', 'stat3'] as const).map((k) => (
                  <div key={k}>
                    <div className="font-display text-2xl font-extrabold text-savdo-700 sm:text-3xl">
                      {tShared(`stats.${k}.value`)}
                    </div>
                    <div className="mt-1 text-xs font-semibold text-slate-600">
                      {tShared(`stats.${k}.label`)}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft lg:aspect-[4/5]"
            >
              <Image
                src={sol.image}
                alt={tItem('title')}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-savdo-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 backdrop-blur">
                <div className="text-xs font-bold uppercase tracking-wider text-savdo-700">
                  {t('categoryLabel')}
                </div>
                <div className="mt-1 font-display text-xl font-extrabold text-slate-900">
                  {tItem('name')}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry-specific benefits */}
      <section className="section bg-white">
        <div className="container-savdo">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{tShared('benefitsEyebrow')}</span>
            <h2 className="h-section mt-4">{tItem('benefitsTitle')}</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {(['b1', 'b2', 'b3'] as const).map((k, i) => (
              <motion.div
                key={k}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-2xl bg-slate-50 p-7"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-savdo-100 text-savdo-800">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d={sol.icon} />
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  {tItem(`benefits.${k}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {tItem(`benefits.${k}.body`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared platform features recap */}
      <section className="section bg-slate-50">
        <div className="container-savdo">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{tShared('platformEyebrow')}</span>
            <h2 className="h-section mt-4">{tShared('platformTitle')}</h2>
            <p className="mt-4 text-lg text-slate-700">{tShared('platformSubtitle')}</p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
            {(['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'] as const).map((k) => (
              <li
                key={k}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-card"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-savdo text-white">
                  <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor">
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-slate-900">
                  {tShared(`platform.${k}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container-savdo">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-savdo to-savdo-700 p-10 text-center text-white shadow-soft sm:p-14">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <h2 className="relative font-display text-3xl font-extrabold sm:text-4xl">
              {tShared('finalTitle')}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/90">
              {tShared('finalSubtitle')}
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={siteConfig.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-bold text-savdo-800 transition hover:bg-savdo-50"
              >
                {tShared('ctaPrimary')}
              </a>
              <Link
                href={`/${locale}/partners`}
                className="inline-flex items-center rounded-full border border-white/30 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {tShared('finalContact')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
