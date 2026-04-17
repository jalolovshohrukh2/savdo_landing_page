'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function PartnersPage() {
  return (
    <>
      <Hero />
      <MarketPotential />
      <WhyUs />
      <ProductFeatures />
      <Demand />
      <Benefits />
      <PartnerTypes />
      <Calculator />
      <FAQ />
      <Apply />
    </>
  );
}

/* ---------------- Repeatable CTA button ---------------- */
function PrimaryCTA({ label }: { label: string }) {
  return (
    <a
      href="#apply"
      className="inline-flex items-center gap-2 rounded-full bg-savdo px-7 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-savdo-600"
    >
      {label}
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor">
        <path d="M6.5 3l5 5-5 5-1.4-1.4L8.7 8 5.1 4.4 6.5 3z" />
      </svg>
    </a>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const t = useTranslations('partners.hero');

  const cards = [
    { key: 'investment', value: '$500 — $10,000' },
    { key: 'earnings', value: '$1,000 — $10,000' },
    { key: 'payback', value: t('cards.paybackValue') },
    { key: 'training', value: t('cards.trainingValue') },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-savdo-900 to-savdo-800 pt-20 pb-28 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_10%,rgba(57,173,168,0.35),transparent_60%),radial-gradient(40%_60%_at_95%_100%,rgba(57,173,168,0.28),transparent_60%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="container-savdo relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur">
            {t('eyebrow')}
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {t('title')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">{t('subtitle')}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="rounded-2xl bg-white/10 p-6 backdrop-blur ring-1 ring-white/15"
            >
              <div className="font-display text-2xl font-extrabold">{c.value}</div>
              <div className="mt-1 text-sm text-white/80">{t(`cards.${c.key}`)}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PrimaryCTA label={t('cta')} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 1. Market Potential ---------------- */
function MarketPotential() {
  const t = useTranslations('partners.market');
  const countries = [
    { key: 'uz', flag: '🇺🇿', value: '$30M+' },
    { key: 'kz', flag: '🇰🇿', value: '$80M+' },
    { key: 'kg', flag: '🇰🇬', value: '$10M+' },
    { key: 'tj', flag: '🇹🇯', value: '$10M+' },
  ];

  return (
    <section id="market" className="section bg-white">
      <div className="container-savdo">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700">{t('subtitle')}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((c, i) => (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl bg-gradient-to-br from-savdo-50 to-white p-6 shadow-card ring-1 ring-slate-200/70"
            >
              <div className="text-3xl">{c.flag}</div>
              <div className="mt-4 font-display text-3xl font-extrabold text-savdo-800">{c.value}</div>
              <div className="mt-1 text-sm font-semibold text-slate-700">{t(`countries.${c.key}`)}</div>
              <div className="mt-1 text-xs text-slate-600">{t('annual')}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PrimaryCTA label={t('cta')} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2. Why us ---------------- */
function WhyUs() {
  const t = useTranslations('partners.why');
  const stats = [
    { key: 'w1', value: t('stats.w1.value') },
    { key: 'w2', value: t('stats.w2.value') },
    { key: 'w3', value: t('stats.w3.value') },
    { key: 'w4', value: t('stats.w4.value') },
    { key: 'w5', value: t('stats.w5.value') },
    { key: 'w6', value: t('stats.w6.value') },
  ];

  return (
    <section className="section bg-slate-50">
      <div className="container-savdo">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700">{t('subtitle')}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-7 shadow-card"
            >
              <div className="font-display text-4xl font-extrabold text-savdo-700">{s.value}</div>
              <div className="mt-2 text-sm font-semibold text-slate-800">{t(`stats.${s.key}.label`)}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PrimaryCTA label={t('cta')} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 3. Product features ---------------- */
function ProductFeatures() {
  const t = useTranslations('partners.product');
  const items = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7'] as const;

  return (
    <section className="section bg-white">
      <div className="container-savdo">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700">{t('subtitle')}</p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
          {items.map((k, i) => (
            <motion.li
              key={k}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="flex items-center gap-3 rounded-xl bg-slate-50 px-5 py-4"
            >
              <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-savdo text-white">
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" />
                </svg>
              </span>
              <span className="font-semibold text-slate-900">{t(`items.${k}`)}</span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <PrimaryCTA label={t('cta')} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 4. Demand / Inbound ---------------- */
function Demand() {
  const t = useTranslations('partners.demand');
  return (
    <section className="section bg-gradient-to-br from-savdo-700 to-savdo-900 text-white">
      <div className="container-savdo">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            <span className="block font-display text-6xl font-extrabold sm:text-7xl">100+</span>
            <span className="mt-4 block">{t('title')}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">{t('body')}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5. Benefits ---------------- */
function Benefits() {
  const t = useTranslations('partners.benefits');
  const items = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'] as const;

  return (
    <section className="section bg-white">
      <div className="container-savdo">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          {items.map((k, i) => (
            <motion.li
              key={k}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-4 rounded-2xl bg-slate-50 p-6"
            >
              <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-savdo-100 font-display text-lg font-extrabold text-savdo-800">
                {i + 1}
              </span>
              <span className="text-base font-medium text-slate-900">{t(`items.${k}`)}</span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <PrimaryCTA label={t('cta')} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 6. Partner Types (the flagship section) ---------------- */
function PartnerTypes() {
  const t = useTranslations('partners.types');

  const tracks = [
    {
      key: 'service',
      featured: false,
      investment: '$500',
      time: t('time.service'),
      clients: '5–6',
      revenue: [
        { k: 'r1', v: '$50 — $100' },
        { k: 'r2', v: '$20/day' },
        { k: 'r3', v: '$50 — $150' },
        { k: 'r4', v: '$300 — $2,000' },
      ],
    },
    {
      key: 'sales',
      featured: true,
      investment: '$5,000 — $10,000',
      time: t('time.sales'),
      clients: '5–15',
      revenue: [
        { k: 'r1', v: '$50 — $100' },
        { k: 'r2', v: '$20/day' },
        { k: 'r3', v: '$50 — $150' },
        { k: 'r5', v: '50%' },
        { k: 'r4', v: '$300 — $2,000' },
      ],
    },
  ];

  return (
    <section id="types" className="section bg-slate-50">
      <div className="container-savdo">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700">{t('subtitle')}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {tracks.map((tr, i) => (
            <motion.div
              key={tr.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-3xl p-8 sm:p-10 ${
                tr.featured
                  ? 'bg-gradient-to-br from-savdo to-savdo-700 text-white shadow-soft'
                  : 'bg-white shadow-card'
              }`}
            >
              {tr.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-savdo-800">
                  {t('popular')}
                </div>
              )}

              <div
                className={`text-xs font-bold uppercase tracking-wider ${
                  tr.featured ? 'text-white/80' : 'text-savdo-700'
                }`}
              >
                {t(`tracks.${tr.key}.tag`)}
              </div>
              <h3
                className={`mt-2 font-display text-3xl font-extrabold ${
                  tr.featured ? 'text-white' : 'text-slate-900'
                }`}
              >
                {t(`tracks.${tr.key}.name`)}
              </h3>
              <p
                className={`mt-2 text-base ${
                  tr.featured ? 'text-white/85' : 'text-slate-700'
                }`}
              >
                {t(`tracks.${tr.key}.description`)}
              </p>

              {/* Top stats row */}
              <dl className="mt-7 grid grid-cols-3 gap-4 border-y border-white/15 py-5">
                <Stat label={t('labels.investment')} value={tr.investment} featured={tr.featured} />
                <Stat label={t('labels.time')} value={tr.time} featured={tr.featured} />
                <Stat label={t('labels.clients')} value={tr.clients} featured={tr.featured} />
              </dl>

              {/* Revenue streams */}
              <div className="mt-7">
                <div
                  className={`text-xs font-bold uppercase tracking-wider ${
                    tr.featured ? 'text-white/75' : 'text-slate-500'
                  }`}
                >
                  {t('revenue')}
                </div>
                <ul className="mt-3 space-y-2.5">
                  {tr.revenue.map((r) => (
                    <li
                      key={r.k}
                      className={`flex items-center justify-between gap-4 rounded-xl px-4 py-3 ${
                        tr.featured ? 'bg-white/10' : 'bg-slate-50'
                      }`}
                    >
                      <span
                        className={`text-sm font-medium ${
                          tr.featured ? 'text-white/95' : 'text-slate-800'
                        }`}
                      >
                        {t(`revenueItems.${r.k}`)}
                      </span>
                      <span
                        className={`font-display text-sm font-extrabold ${
                          tr.featured ? 'text-white' : 'text-savdo-700'
                        }`}
                      >
                        {r.v}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#apply"
                className={
                  tr.featured
                    ? 'mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-bold text-savdo-800 transition hover:bg-savdo-50'
                    : 'mt-8 inline-flex w-full items-center justify-center rounded-full bg-savdo px-6 py-3.5 text-sm font-bold text-white transition hover:bg-savdo-600'
                }
              >
                {t('apply')}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, featured }: { label: string; value: string; featured: boolean }) {
  return (
    <div>
      <dt className={`text-[10px] font-bold uppercase tracking-wider ${featured ? 'text-white/70' : 'text-slate-500'}`}>
        {label}
      </dt>
      <dd className={`mt-1 font-display text-base font-extrabold leading-tight ${featured ? 'text-white' : 'text-slate-900'}`}>
        {value}
      </dd>
    </div>
  );
}

/* ---------------- 7. Earnings Calculator (retained from prior build) ---------------- */
type CalcCountry = 'tj' | 'uz' | 'kz' | 'kg' | 'us';

const LOCALE_TO_COUNTRY: Record<string, CalcCountry> = {
  tj: 'tj',
  uz: 'uz',
  ru: 'kz',
  en: 'us',
};

const FX: Record<string, { code: string; symbol: string; rate: number; arpu: number; format: (n: number) => string; prefix?: boolean }> = {
  uz: { code: 'UZS', symbol: 'soʻm', rate: 12170, arpu: 426000, format: (n) => `${Math.round(n / 1000) * 1000} ` },
  kz: { code: 'KZT', symbol: '₸', rate: 476, arpu: 16500, format: (n) => `${Math.round(n / 100) * 100} ` },
  kg: { code: 'KGS', symbol: 'сом', rate: 87.5, arpu: 3050, format: (n) => `${Math.round(n / 10) * 10} ` },
  tj: { code: 'TJS', symbol: 'сом.', rate: 9.5, arpu: 330, format: (n) => `${Math.round(n)} ` },
  us: { code: 'USD', symbol: '$', rate: 1, arpu: 35, format: (n) => `${Math.round(n).toLocaleString('en-US')}`, prefix: true },
};

function Calculator() {
  const t = useTranslations('partners.calculator');
  const locale = useLocale();
  const [stores, setStores] = useState(20);
  const [country, setCountry] = useState<keyof typeof FX>(LOCALE_TO_COUNTRY[locale] ?? 'uz');

  const fx = FX[country];
  const monthlyMrr = stores * fx.arpu;
  const monthlyCommission = monthlyMrr * 0.5; // Sales Partner = 50% first year
  const yearOneEarnings = monthlyCommission * 12;
  const usdYearOne = yearOneEarnings / fx.rate;

  const formatLocal = (n: number) =>
    fx.prefix ? `${fx.symbol}${fx.format(n)}` : `${fx.format(n)}${fx.symbol}`;
  const formatUsd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;

  const calcCountries: Array<keyof typeof FX> =
    locale === 'en' ? ['us', 'tj', 'uz', 'kz', 'kg'] : ['tj', 'uz', 'kz', 'kg'];

  return (
    <section id="calc" className="section bg-white">
      <div className="container-savdo">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700">{t('subtitle')}</p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-soft sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-white/85">{t('country')}</label>
                <div className={`mt-2 grid gap-2 ${calcCountries.length === 5 ? 'grid-cols-5' : 'grid-cols-4'}`}>
                  {calcCountries.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCountry(c)}
                      className={`rounded-lg px-3 py-2 text-sm font-bold transition ${
                        country === c ? 'bg-savdo text-white' : 'bg-white/10 text-white/85 hover:bg-white/20'
                      }`}
                    >
                      {t(`countries.${c}`)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm font-semibold text-white/85">
                  <label htmlFor="stores">{t('stores')}</label>
                  <span className="font-display text-2xl font-extrabold text-white">{stores}</span>
                </div>
                <input
                  id="stores"
                  type="range"
                  min={1}
                  max={200}
                  value={stores}
                  onChange={(e) => setStores(Number(e.target.value))}
                  className="mt-3 w-full accent-[rgb(57,173,168)]"
                />
                <div className="mt-1 flex justify-between text-xs text-white/60">
                  <span>1</span>
                  <span>200</span>
                </div>
              </div>
              <div className="text-xs text-white/70">{t('arpuNote', { value: formatLocal(fx.arpu) })}</div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <div className="text-xs font-bold uppercase tracking-wider text-white/70">
                  {t('monthlyEarnings')}
                </div>
                <div className="mt-1 font-display text-3xl font-extrabold">
                  {formatLocal(monthlyCommission)}
                </div>
                {country !== 'us' && (
                  <div className="text-sm text-white/70">≈ {formatUsd(monthlyCommission / fx.rate)}</div>
                )}
              </div>
              <div className="rounded-2xl bg-savdo p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-white/85">
                  {t('yearOne')}
                </div>
                <div className="mt-1 font-display text-4xl font-extrabold">
                  {formatLocal(yearOneEarnings)}
                </div>
                {country !== 'us' && (
                  <div className="text-sm text-white/85">≈ {formatUsd(usdYearOne)}</div>
                )}
              </div>
              <div className="text-xs text-white/60">{t('disclaimer')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 8. FAQ ---------------- */
function FAQ() {
  const t = useTranslations('partners.faq');
  const keys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const;
  const [open, setOpen] = useState<string | null>('q1');

  return (
    <section className="section bg-slate-50">
      <div className="container-savdo">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 rounded-2xl bg-white shadow-card">
          {keys.map((k) => (
            <div key={k}>
              <button
                onClick={() => setOpen(open === k ? null : k)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-slate-900">{t(`items.${k}.q`)}</span>
                <svg
                  className={`h-4 w-4 text-slate-500 transition ${open === k ? 'rotate-180' : ''}`}
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path d="M6 8.3L1.7 4l1-1L6 6.3 9.3 3l1 1L6 8.3z" />
                </svg>
              </button>
              {open === k && <p className="px-6 pb-5 text-slate-700">{t(`items.${k}.a`)}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 9. Apply — Billz-style 8-field form ---------------- */
function Apply() {
  const t = useTranslations('partners.apply');

  const [hasBusiness, setHasBusiness] = useState<'yes' | 'no' | null>(null);

  return (
    <section id="apply" className="section bg-white">
      <div className="container-savdo">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700">{t('subtitle')}</p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-12 max-w-3xl rounded-3xl bg-gradient-to-br from-slate-50 to-white p-8 shadow-card ring-1 ring-slate-200/60 sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={t('form.name')}>
              <input
                type="text"
                className="w-full rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-900 ring-1 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-savdo"
                placeholder={t('form.namePh')}
              />
            </Field>
            <Field label={t('form.phone')}>
              <div className="flex gap-2">
                <select className="rounded-xl bg-white px-3 py-3 text-sm font-medium text-slate-900 ring-1 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-savdo">
                  <option>🇹🇯 +992</option>
                  <option>🇺🇿 +998</option>
                  <option>🇰🇿 +7</option>
                  <option>🇰🇬 +996</option>
                </select>
                <input
                  type="tel"
                  className="flex-1 rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-900 ring-1 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-savdo"
                  placeholder="00 000 00 10"
                />
              </div>
            </Field>
          </div>

          <Field className="mt-5" label={t('form.motivation')}>
            <textarea
              rows={3}
              className="w-full rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-900 ring-1 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-savdo"
              placeholder={t('form.motivationPh')}
            />
          </Field>

          <Field className="mt-5" label={t('form.hasBusiness')}>
            <div className="inline-flex rounded-full bg-white p-1 ring-1 ring-slate-300">
              <button
                type="button"
                onClick={() => setHasBusiness('yes')}
                className={`rounded-full px-6 py-2 text-sm font-bold transition ${
                  hasBusiness === 'yes' ? 'bg-savdo text-white' : 'text-slate-700'
                }`}
              >
                {t('form.yes')}
              </button>
              <button
                type="button"
                onClick={() => setHasBusiness('no')}
                className={`rounded-full px-6 py-2 text-sm font-bold transition ${
                  hasBusiness === 'no' ? 'bg-savdo text-white' : 'text-slate-700'
                }`}
              >
                {t('form.no')}
              </button>
            </div>
          </Field>

          <Field className="mt-5" label={t('form.experience')}>
            <textarea
              rows={3}
              className="w-full rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-900 ring-1 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-savdo"
              placeholder={t('form.experiencePh')}
            />
          </Field>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label={t('form.investment')}>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-500">$</span>
                <input
                  type="number"
                  min="0"
                  className="w-full rounded-xl bg-white py-3 pl-8 pr-4 text-sm font-medium text-slate-900 ring-1 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-savdo"
                  placeholder="500"
                />
              </div>
            </Field>
            <Field label={t('form.hours')}>
              <input
                type="number"
                min="0"
                className="w-full rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-900 ring-1 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-savdo"
                placeholder="20"
              />
            </Field>
          </div>

          <Field className="mt-5" label={t('form.city')}>
            <input
              type="text"
              className="w-full rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-900 ring-1 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-savdo"
              placeholder={t('form.cityPh')}
            />
          </Field>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-savdo px-7 py-4 text-base font-bold text-white shadow-soft transition hover:bg-savdo-600"
          >
            {t('form.submit')}
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
              <path d="M6.5 3l5 5-5 5-1.4-1.4L8.7 8 5.1 4.4 6.5 3z" />
            </svg>
          </button>

          <p className="mt-5 text-center text-sm text-slate-600">
            {t('form.or')}{' '}
            <a
              href="https://t.me/savdo_partners"
              className="font-semibold text-savdo-700 hover:underline"
            >
              @savdo_partners
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  className = '',
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-semibold text-slate-900">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
