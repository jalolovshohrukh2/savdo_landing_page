'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/i18n.config';

type CountryKey = 'tj' | 'uz' | 'kz' | 'kg' | 'us';

const LOCALE_TO_COUNTRY: Record<string, CountryKey> = {
  tj: 'tj',
  uz: 'uz',
  ru: 'kz', // Russian is the lingua franca, default to Kazakhstan (largest RU-speaking market)
  en: 'us', // International — show USD by default
};

const COUNTRIES: Record<
  CountryKey,
  {
    flag: string;
    code: string;
    suffix: string;
    plans: { start: number; pro: number; business: number };
    addLocation: number;
    format: (n: number) => string;
  }
> = {
  tj: {
    flag: '🇹🇯',
    code: 'TJS',
    suffix: 'сом.',
    plans: { start: 179, pro: 329, business: 649 },
    addLocation: 99,
    format: (n) => `${n.toLocaleString('en-US')} `,
  },
  uz: {
    flag: '🇺🇿',
    code: 'UZS',
    suffix: 'soʻm',
    plans: { start: 229000, pro: 419000, business: 819000 },
    addLocation: 149000,
    format: (n) => `${n.toLocaleString('en-US').replace(/,/g, ' ')} `,
  },
  kz: {
    flag: '🇰🇿',
    code: 'KZT',
    suffix: '₸',
    plans: { start: 8900, pro: 16500, business: 32500 },
    addLocation: 5900,
    format: (n) => `${n.toLocaleString('en-US').replace(/,/g, ' ')} `,
  },
  kg: {
    flag: '🇰🇬',
    code: 'KGS',
    suffix: 'сом',
    plans: { start: 1690, pro: 2990, business: 5990 },
    addLocation: 1090,
    format: (n) => `${n.toLocaleString('en-US').replace(/,/g, ' ')} `,
  },
  us: {
    flag: '🇺🇸',
    code: 'USD',
    suffix: '',
    plans: { start: 19, pro: 35, business: 69 },
    addLocation: 12,
    format: (n) => `$${n}`,
  },
};

export function Pricing() {
  const t = useTranslations('pricing');
  const locale = useLocale();
  const [yearly, setYearly] = useState(false);
  const [country, setCountry] = useState<CountryKey>(LOCALE_TO_COUNTRY[locale] ?? 'uz');

  const c = COUNTRIES[country];
  const visibleCountries: CountryKey[] =
    locale === 'en' ? ['us', 'tj', 'uz', 'kz', 'kg'] : ['tj', 'uz', 'kz', 'kg'];

  const plans = (
    [
      { key: 'start' as const, featured: false, base: c.plans.start },
      { key: 'pro' as const, featured: true, base: c.plans.pro },
      { key: 'business' as const, featured: false, base: c.plans.business },
    ]
  ).map((p) => ({
    ...p,
    price: yearly ? Math.round(p.base * 0.8) : p.base,
  }));

  return (
    <section id="pricing" className="section bg-forest-900">
      <div className="container-savdo">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-forest-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-300">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-cream-100 sm:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-cream-100/80">{t('subtitle')}</p>

          {/* Country switcher */}
          <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-forest-800 p-1 ring-1 ring-forest-700">
            {visibleCountries.map((k) => (
              <button
                key={k}
                onClick={() => setCountry(k)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  country === k ? 'bg-lime-300 text-forest-950' : 'text-cream-100/80 hover:bg-forest-700'
                }`}
              >
                <span className="mr-1.5">{COUNTRIES[k].flag}</span>
                {t(`countries.${k}`)}
              </button>
            ))}
          </div>

          {/* Monthly / yearly toggle */}
          <div className="mt-4 inline-flex items-center gap-1 rounded-full border border-forest-700 bg-forest-800 p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                !yearly ? 'bg-lime-300 text-forest-950' : 'text-cream-100/80'
              }`}
            >
              {t('monthly')}
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                yearly ? 'bg-lime-300 text-forest-950' : 'text-cream-100/80'
              }`}
            >
              {t('yearly')} <span className="ml-1 text-[10px] opacity-90">−20%</span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-3xl p-7 ${
                p.featured
                  ? 'bg-lime-300 text-forest-950 lg:scale-105'
                  : 'bg-cream-100 text-forest-950'
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-forest-950 px-3 py-1 text-xs font-bold uppercase tracking-wide text-lime-300">
                  {t('popular')}
                </div>
              )}
              <div className="font-serif text-2xl font-bold">
                {t(`plans.${p.key}.name`)}
              </div>
              <div className="mt-1 text-sm text-forest-900/70">{t(`plans.${p.key}.tagline`)}</div>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-serif text-4xl font-bold">
                  {c.format(p.price)}
                </span>
                <span className="font-serif text-lg font-bold">{c.suffix}</span>
                <span className="ml-1 text-forest-900/70">/ {t('perMonth')}</span>
              </div>
              {yearly && (
                <div className="mt-1 text-xs font-semibold text-forest-900/80">
                  {t('billedYearly', { value: `${c.format(p.price * 12)}${c.suffix}` })}
                </div>
              )}
              <a
                href={siteConfig.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  p.featured
                    ? 'mt-6 inline-flex w-full items-center justify-center rounded-full bg-forest-950 px-6 py-3 text-sm font-bold text-lime-300 transition hover:bg-forest-900'
                    : 'mt-6 inline-flex w-full items-center justify-center rounded-full bg-forest-950 px-6 py-3 text-sm font-bold text-cream-100 transition hover:bg-forest-900'
                }
              >
                {t('cta')}
              </a>
              <ul className="mt-6 space-y-2.5">
                {(['f1', 'f2', 'f3', 'f4', 'f5'] as const).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-forest-900">
                    <svg className="mt-0.5 h-4 w-4 flex-none text-forest-950" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" />
                    </svg>
                    {t(`plans.${p.key}.features.${f}`)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-cream-100/80">
          {t('addLocation', { value: `${c.format(c.addLocation)}${c.suffix}` })}
        </p>
        <p className="mt-2 text-center text-xs text-cream-100/60">{t('billzNote')}</p>
      </div>
    </section>
  );
}
