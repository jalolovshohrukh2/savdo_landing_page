'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { motion } from 'framer-motion';

/* Shared tokens for the Mode-inspired theme */
const H_SECTION = 'font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl';
const H_SUB = 'font-serif text-3xl font-bold tracking-tight sm:text-4xl';

export function PartnersPage() {
  return (
    <div className="bg-forest-950 text-cream-100">
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
    </div>
  );
}

/* ---------------- Repeatable CTAs ---------------- */
function PrimaryCTA({ label }: { label: string }) {
  return (
    <a
      href="#apply"
      className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-7 py-3.5 text-sm font-bold text-forest-950 transition hover:bg-lime-200"
    >
      {label}
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor">
        <path d="M6.5 3l5 5-5 5-1.4-1.4L8.7 8 5.1 4.4 6.5 3z" />
      </svg>
    </a>
  );
}

function GhostCTA({ label }: { label: string }) {
  return (
    <a
      href="#apply"
      className="inline-flex items-center gap-2 rounded-full border border-lime-300/60 px-7 py-3.5 text-sm font-bold text-lime-200 transition hover:bg-lime-300 hover:text-forest-950"
    >
      {label}
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

  const bars = [
    { h: 18, c: 'low' },
    { h: 26, c: 'low' },
    { h: 20, c: 'low' },
    { h: 34, c: 'mid' },
    { h: 30, c: 'mid' },
    { h: 44, c: 'mid' },
    { h: 38, c: 'hi' },
    { h: 54, c: 'hi' },
    { h: 48, c: 'hi' },
    { h: 64, c: 'hi' },
  ];

  return (
    <section className="relative overflow-hidden bg-forest-950 p-3 pt-4 pb-6 sm:p-5 sm:pt-6 sm:pb-8 lg:p-6">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-3 sm:gap-4">
          {/* Row 1 — Headline panel (lime) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-12 rounded-[28px] bg-lime-300 p-8 sm:p-12 lg:col-span-8 lg:rounded-[36px] lg:p-14"
          >
            <span className="inline-flex rounded-full bg-forest-950 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-lime-300">
              {t('eyebrow')}
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[0.95] tracking-tight text-forest-950 sm:text-5xl lg:text-6xl xl:text-[84px]">
              {t('title')}
            </h1>
          </motion.div>

          {/* Row 1 — Chart card (dark) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-12 flex flex-col rounded-[28px] bg-forest-800 p-6 lg:col-span-4 lg:rounded-[36px] lg:p-7"
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-cream-100/60">
              {t('cards.earnings')} · mo
            </div>
            <div className="mt-5 flex flex-1 items-end gap-1.5">
              {bars.map((b, i) => (
                <div
                  key={i}
                  style={{ height: `${b.h}px` }}
                  className={`flex-1 rounded-sm ${
                    b.c === 'hi'
                      ? 'bg-lime-300'
                      : b.c === 'mid'
                      ? 'bg-lime-300/70'
                      : 'bg-lime-300/30'
                  }`}
                />
              ))}
            </div>
            <div className="mt-6 text-[11px] font-bold uppercase tracking-wider text-cream-100/60">
              {t('cards.earnings')}
            </div>
            <div className="mt-1 text-2xl font-black text-lime-300 sm:text-3xl">
              $1K — $10K
            </div>
          </motion.div>

          {/* Row 2 — Stats panel (lime, lower) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="col-span-12 rounded-[28px] bg-lime-300 p-8 sm:p-10 lg:col-span-7 lg:rounded-[36px]"
          >
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-5">
              {cards.map((c) => (
                <div key={c.key}>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-forest-950/60">
                    {t(`cards.${c.key}`)}
                  </div>
                  <div className="mt-2 text-lg font-black leading-tight text-forest-950 sm:text-xl">
                    {c.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Row 2 — Subtitle + CTAs panel (dark) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-12 flex flex-col justify-between gap-6 rounded-[28px] bg-forest-800 p-8 text-cream-100 lg:col-span-5 lg:rounded-[36px]"
          >
            <p className="text-base leading-relaxed text-cream-100/85 sm:text-lg">
              {t('subtitle')}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryCTA label={t('cta')} />
              <GhostCTA label={t('eyebrow')} />
            </div>
          </motion.div>
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
    <section id="market" className="bg-forest-950 py-24">
      <div className="container-savdo">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-forest-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-300">
            {t('eyebrow')}
          </span>
          <h2 className={`${H_SECTION} mt-4 text-cream-100`}>{t('title')}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-cream-100/80">{t('subtitle')}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((c, i) => (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-3xl bg-lime-300 p-7 text-forest-950"
            >
              <div className="text-3xl">{c.flag}</div>
              <div className="mt-4 font-serif text-4xl font-bold">{c.value}</div>
              <div className="mt-1 text-sm font-semibold">{t(`countries.${c.key}`)}</div>
              <div className="mt-1 text-xs text-forest-900/70">{t('annual')}</div>
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
    <section className="bg-forest-900 py-24">
      <div className="container-savdo">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-forest-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-300">
            {t('eyebrow')}
          </span>
          <h2 className={`${H_SECTION} mt-4 text-cream-100`}>{t('title')}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-cream-100/80">{t('subtitle')}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-3xl bg-forest-800 p-7 ring-1 ring-forest-700"
            >
              <div className="font-serif text-5xl font-bold text-lime-300">{s.value}</div>
              <div className="mt-3 text-sm font-semibold text-cream-100">{t(`stats.${s.key}.label`)}</div>
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
    <section className="bg-cream-100 py-24 text-forest-950">
      <div className="container-savdo">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <span className="inline-block rounded-full bg-forest-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-300">
              {t('eyebrow')}
            </span>
            <h2 className={`${H_SECTION} mt-4 text-forest-950`}>{t('title')}</h2>
            <p className="mt-5 text-lg text-forest-900/80">{t('subtitle')}</p>
            <div className="mt-8">
              <PrimaryCTA label={t('cta')} />
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {items.map((k, i) => (
              <motion.li
                key={k}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="flex items-center gap-3 rounded-2xl bg-lime-300 px-5 py-4 text-forest-950"
              >
                <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-forest-900 text-lime-300">
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" />
                  </svg>
                </span>
                <span className="font-semibold">{t(`items.${k}`)}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 4. Demand / Inbound ---------------- */
function Demand() {
  const t = useTranslations('partners.demand');
  return (
    <section className="bg-forest-950 py-28">
      <div className="container-savdo">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block rounded-3xl bg-lime-300 px-10 py-6 text-forest-950">
            <div className="font-serif text-7xl font-extrabold sm:text-8xl">100+</div>
          </div>
          <h2 className={`${H_SUB} mt-8 text-cream-100`}>{t('title')}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-cream-100/80">{t('body')}</p>
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
    <section className="bg-forest-900 py-24">
      <div className="container-savdo">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-forest-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-300">
            {t('eyebrow')}
          </span>
          <h2 className={`${H_SECTION} mt-4 text-cream-100`}>{t('title')}</h2>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          {items.map((k, i) => (
            <motion.li
              key={k}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-4 rounded-3xl bg-forest-800 p-6 ring-1 ring-forest-700"
            >
              <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-lime-300 font-serif text-lg font-bold text-forest-950">
                {i + 1}
              </span>
              <span className="text-base font-medium text-cream-100">{t(`items.${k}`)}</span>
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

/* ---------------- 6. Partner Types ---------------- */
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
    <section id="types" className="bg-forest-950 py-24">
      <div className="container-savdo">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-forest-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-300">
            {t('eyebrow')}
          </span>
          <h2 className={`${H_SECTION} mt-4 text-cream-100`}>{t('title')}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-cream-100/80">{t('subtitle')}</p>
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
                  ? 'bg-lime-300 text-forest-950'
                  : 'bg-cream-100 text-forest-950'
              }`}
            >
              {tr.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-forest-950 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-300">
                  {t('popular')}
                </div>
              )}

              <div className="text-xs font-bold uppercase tracking-wider text-forest-900/70">
                {t(`tracks.${tr.key}.tag`)}
              </div>
              <h3 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
                {t(`tracks.${tr.key}.name`)}
              </h3>
              <p className="mt-2 text-base text-forest-900/80">
                {t(`tracks.${tr.key}.description`)}
              </p>

              {/* Top stats row */}
              <dl className="mt-7 grid grid-cols-3 gap-4 border-y border-forest-900/20 py-5">
                <Stat label={t('labels.investment')} value={tr.investment} />
                <Stat label={t('labels.time')} value={tr.time} />
                <Stat label={t('labels.clients')} value={tr.clients} />
              </dl>

              {/* Revenue streams */}
              <div className="mt-7">
                <div className="text-xs font-bold uppercase tracking-wider text-forest-900/70">
                  {t('revenue')}
                </div>
                <ul className="mt-3 space-y-2.5">
                  {tr.revenue.map((r) => (
                    <li
                      key={r.k}
                      className={`flex items-center justify-between gap-4 rounded-xl px-4 py-3 ${
                        tr.featured ? 'bg-forest-950/10' : 'bg-forest-950/5'
                      }`}
                    >
                      <span className="text-sm font-medium">
                        {t(`revenueItems.${r.k}`)}
                      </span>
                      <span className="font-serif text-base font-bold">
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
                    ? 'mt-8 inline-flex w-full items-center justify-center rounded-full bg-forest-950 px-6 py-3.5 text-sm font-bold text-lime-300 transition hover:bg-forest-900'
                    : 'mt-8 inline-flex w-full items-center justify-center rounded-full bg-forest-950 px-6 py-3.5 text-sm font-bold text-cream-100 transition hover:bg-forest-900'
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

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] font-bold uppercase tracking-wider text-forest-900/60">
        {label}
      </dt>
      <dd className="mt-1 font-serif text-base font-bold leading-tight">
        {value}
      </dd>
    </div>
  );
}

/* ---------------- 7. Earnings Calculator ---------------- */
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
  const monthlyCommission = monthlyMrr * 0.5;
  const yearOneEarnings = monthlyCommission * 12;
  const usdYearOne = yearOneEarnings / fx.rate;

  const formatLocal = (n: number) =>
    fx.prefix ? `${fx.symbol}${fx.format(n)}` : `${fx.format(n)}${fx.symbol}`;
  const formatUsd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;

  const calcCountries: Array<keyof typeof FX> =
    locale === 'en' ? ['us', 'tj', 'uz', 'kz', 'kg'] : ['tj', 'uz', 'kz', 'kg'];

  return (
    <section id="calc" className="bg-cream-100 py-24 text-forest-950">
      <div className="container-savdo">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-forest-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-300">
            {t('eyebrow')}
          </span>
          <h2 className={`${H_SECTION} mt-4 text-forest-950`}>{t('title')}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-forest-900/80">{t('subtitle')}</p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-forest-950 p-8 text-cream-100 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-cream-100/85">{t('country')}</label>
                <div className={`mt-2 grid gap-2 ${calcCountries.length === 5 ? 'grid-cols-5' : 'grid-cols-4'}`}>
                  {calcCountries.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCountry(c)}
                      className={`rounded-lg px-3 py-2 text-sm font-bold transition ${
                        country === c
                          ? 'bg-lime-300 text-forest-950'
                          : 'bg-forest-800 text-cream-100/85 hover:bg-forest-700'
                      }`}
                    >
                      {t(`countries.${c}`)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm font-semibold text-cream-100/85">
                  <label htmlFor="stores">{t('stores')}</label>
                  <span className="font-serif text-2xl font-bold text-lime-300">{stores}</span>
                </div>
                <input
                  id="stores"
                  type="range"
                  min={1}
                  max={200}
                  value={stores}
                  onChange={(e) => setStores(Number(e.target.value))}
                  className="mt-3 w-full accent-lime-300"
                />
                <div className="mt-1 flex justify-between text-xs text-cream-100/60">
                  <span>1</span>
                  <span>200</span>
                </div>
              </div>
              <div className="text-xs text-cream-100/70">{t('arpuNote', { value: formatLocal(fx.arpu) })}</div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-forest-800 p-5 ring-1 ring-forest-700">
                <div className="text-xs font-bold uppercase tracking-wider text-cream-100/70">
                  {t('monthlyEarnings')}
                </div>
                <div className="mt-1 font-serif text-3xl font-bold text-cream-100">
                  {formatLocal(monthlyCommission)}
                </div>
                {country !== 'us' && (
                  <div className="text-sm text-cream-100/70">≈ {formatUsd(monthlyCommission / fx.rate)}</div>
                )}
              </div>
              <div className="rounded-2xl bg-lime-300 p-5 text-forest-950">
                <div className="text-xs font-bold uppercase tracking-wider text-forest-900/70">
                  {t('yearOne')}
                </div>
                <div className="mt-1 font-serif text-4xl font-bold">
                  {formatLocal(yearOneEarnings)}
                </div>
                {country !== 'us' && (
                  <div className="text-sm text-forest-900/80">≈ {formatUsd(usdYearOne)}</div>
                )}
              </div>
              <div className="text-xs text-cream-100/60">{t('disclaimer')}</div>
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
    <section className="bg-forest-900 py-24">
      <div className="container-savdo">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-forest-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-300">
            {t('eyebrow')}
          </span>
          <h2 className={`${H_SECTION} mt-4 text-cream-100`}>{t('title')}</h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-forest-700 overflow-hidden rounded-3xl bg-forest-800 ring-1 ring-forest-700">
          {keys.map((k) => (
            <div key={k}>
              <button
                onClick={() => setOpen(open === k ? null : k)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-cream-100">{t(`items.${k}.q`)}</span>
                <svg
                  className={`h-4 w-4 text-lime-300 transition ${open === k ? 'rotate-180' : ''}`}
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path d="M6 8.3L1.7 4l1-1L6 6.3 9.3 3l1 1L6 8.3z" />
                </svg>
              </button>
              {open === k && <p className="px-6 pb-5 text-cream-100/80">{t(`items.${k}.a`)}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 9. Apply ---------------- */
function Apply() {
  const t = useTranslations('partners.apply');
  const [hasBusiness, setHasBusiness] = useState<'yes' | 'no' | null>(null);

  const inputCls =
    'w-full rounded-xl bg-forest-800 px-4 py-3 text-sm font-medium text-cream-100 placeholder:text-cream-100/40 ring-1 ring-forest-700 focus:outline-none focus:ring-2 focus:ring-lime-300';

  return (
    <section id="apply" className="bg-forest-950 py-24">
      <div className="container-savdo">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-forest-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-300">
            {t('eyebrow')}
          </span>
          <h2 className={`${H_SECTION} mt-4 text-cream-100`}>{t('title')}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-cream-100/80">{t('subtitle')}</p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-12 max-w-3xl rounded-3xl bg-forest-900 p-8 ring-1 ring-forest-700 sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={t('form.name')}>
              <input type="text" className={inputCls} placeholder={t('form.namePh')} />
            </Field>
            <Field label={t('form.phone')}>
              <div className="flex gap-2">
                <select className={inputCls + ' max-w-[130px]'}>
                  <option>🇹🇯 +992</option>
                  <option>🇺🇿 +998</option>
                  <option>🇰🇿 +7</option>
                  <option>🇰🇬 +996</option>
                </select>
                <input type="tel" className={inputCls} placeholder="00 000 00 10" />
              </div>
            </Field>
          </div>

          <Field className="mt-5" label={t('form.motivation')}>
            <textarea rows={3} className={inputCls} placeholder={t('form.motivationPh')} />
          </Field>

          <Field className="mt-5" label={t('form.hasBusiness')}>
            <div className="inline-flex rounded-full bg-forest-800 p-1 ring-1 ring-forest-700">
              <button
                type="button"
                onClick={() => setHasBusiness('yes')}
                className={`rounded-full px-6 py-2 text-sm font-bold transition ${
                  hasBusiness === 'yes' ? 'bg-lime-300 text-forest-950' : 'text-cream-100/80'
                }`}
              >
                {t('form.yes')}
              </button>
              <button
                type="button"
                onClick={() => setHasBusiness('no')}
                className={`rounded-full px-6 py-2 text-sm font-bold transition ${
                  hasBusiness === 'no' ? 'bg-lime-300 text-forest-950' : 'text-cream-100/80'
                }`}
              >
                {t('form.no')}
              </button>
            </div>
          </Field>

          <Field className="mt-5" label={t('form.experience')}>
            <textarea rows={3} className={inputCls} placeholder={t('form.experiencePh')} />
          </Field>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label={t('form.investment')}>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-cream-100/60">$</span>
                <input
                  type="number"
                  min="0"
                  className={inputCls + ' pl-8'}
                  placeholder="500"
                />
              </div>
            </Field>
            <Field label={t('form.hours')}>
              <input type="number" min="0" className={inputCls} placeholder="20" />
            </Field>
          </div>

          <Field className="mt-5" label={t('form.city')}>
            <input type="text" className={inputCls} placeholder={t('form.cityPh')} />
          </Field>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-300 px-7 py-4 text-base font-bold text-forest-950 transition hover:bg-lime-200"
          >
            {t('form.submit')}
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
              <path d="M6.5 3l5 5-5 5-1.4-1.4L8.7 8 5.1 4.4 6.5 3z" />
            </svg>
          </button>

          <p className="mt-5 text-center text-sm text-cream-100/70">
            {t('form.or')}{' '}
            <a href="https://t.me/savdo_partners" className="font-semibold text-lime-300 hover:underline">
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
      <span className="block text-sm font-semibold text-cream-100">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
