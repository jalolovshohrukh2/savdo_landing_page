'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function InvestorsPage() {
  const t = useTranslations('investors');

  return (
    <>
      <Hero />
      <Mission />
      <Opportunity />
      <Problem />
      <Solution />
      <WhyNow />
      <Traction />
      <Roadmap />
      <Team />
      <Ask />
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const t = useTranslations('investors.hero');
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-savdo-900 via-savdo-700 to-savdo-500 pt-20 pb-28 text-white">
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-savdo-300 opacity-20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-savdo-200 opacity-20 blur-3xl" />
      <div className="container-savdo relative">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur"
          >
            {t('eyebrow')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-5xl font-extrabold tracking-tight sm:text-6xl"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl"
          >
            {t('subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#ask"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-savdo-800 transition hover:bg-savdo-50"
            >
              {t('ctaPrimary')}
            </a>
            <a
              href="#deck"
              className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              {t('ctaSecondary')}
            </a>
          </motion.div>
        </div>

        {/* Headline numbers */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: '$87B+', k: 'retail' },
            { v: '2.4M+', k: 'smbs' },
            { v: '18.2%', k: 'cagr' },
            { v: '4', k: 'markets' },
          ].map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
              className="rounded-2xl bg-white/10 p-6 backdrop-blur"
            >
              <div className="font-display text-4xl font-extrabold">{s.v}</div>
              <div className="mt-1 text-sm text-white/85">{t(`stats.${s.k}`)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Mission ---------------- */
function Mission() {
  const t = useTranslations('investors.mission');
  return (
    <section className="section">
      <div className="container-savdo">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
          <p className="mt-6 text-xl leading-relaxed text-slate-800">{t('body')}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Opportunity ---------------- */
function Opportunity() {
  const t = useTranslations('investors.opportunity');
  const countries = [
    { key: 'uz', smbs: '358K', retail: '~$24–26B', internet: '83.3%' },
    { key: 'kz', smbs: '2.03M', retail: '$42.5B', internet: '96.2%' },
    { key: 'kg', smbs: '25.5K', retail: '$14.4B', internet: '79.8%' },
    { key: 'tj', smbs: 'n/a', retail: '$6.0B', internet: '41.6%' },
  ];

  return (
    <section className="section bg-slate-50">
      <div className="container-savdo">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
          <p className="mt-4 text-lg text-slate-700">{t('subtitle')}</p>
        </div>

        {/* TAM / SAM / SOM */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {(['tam', 'sam', 'som'] as const).map((k, i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-white p-7 shadow-card"
            >
              <div className="inline-flex rounded-full bg-savdo-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-savdo-800">
                {t(`${k}.tag`)}
              </div>
              <div className="mt-4 font-display text-4xl font-extrabold text-slate-900">
                {t(`${k}.value`)}
              </div>
              <div className="mt-2 text-sm font-semibold text-savdo-700">{t(`${k}.title`)}</div>
              <p className="mt-3 text-sm text-slate-700">{t(`${k}.description`)}</p>
            </motion.div>
          ))}
        </div>

        {/* Country table */}
        <div className="mt-14 overflow-hidden rounded-2xl bg-white shadow-card">
          <div className="grid grid-cols-4 bg-savdo px-6 py-4 text-xs font-bold uppercase tracking-wider text-white">
            <div>{t('table.country')}</div>
            <div>{t('table.smbs')}</div>
            <div>{t('table.retail')}</div>
            <div>{t('table.internet')}</div>
          </div>
          {countries.map((c) => (
            <div
              key={c.key}
              className="grid grid-cols-4 items-center border-t border-slate-100 px-6 py-4 text-sm"
            >
              <div className="font-semibold text-slate-900">{t(`countries.${c.key}`)}</div>
              <div className="text-slate-800">{c.smbs}</div>
              <div className="text-slate-800">{c.retail}</div>
              <div className="text-slate-800">{c.internet}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-600">{t('sources')}</p>
      </div>
    </section>
  );
}

/* ---------------- Problem ---------------- */
function Problem() {
  const t = useTranslations('investors.problem');
  const pains = ['p1', 'p2', 'p3', 'p4'] as const;

  return (
    <section className="section">
      <div className="container-savdo grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
          <p className="mt-5 text-lg text-slate-700">{t('body')}</p>
          <ul className="mt-8 space-y-4">
            {pains.map((p) => (
              <li key={p} className="flex gap-3 rounded-xl bg-slate-50 p-4">
                <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-red-100 text-red-700">
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
                    <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm1 13H9v-2h2v2zm0-4H9V5h2v5z" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-slate-900">{t(`pains.${p}.title`)}</div>
                  <div className="mt-1 text-sm text-slate-700">{t(`pains.${p}.body`)}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80&auto=format&fit=crop"
            alt="Small retail shop"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 backdrop-blur">
            <div className="text-xs font-bold uppercase tracking-wider text-savdo-700">
              {t('quote.label')}
            </div>
            <blockquote className="mt-2 text-sm font-semibold text-slate-900">
              "{t('quote.text')}"
            </blockquote>
            <div className="mt-2 text-xs text-slate-600">— {t('quote.author')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Solution ---------------- */
function Solution() {
  const t = useTranslations('investors.solution');
  const items = ['s1', 's2', 's3', 's4'] as const;

  return (
    <section className="section bg-slate-50">
      <div className="container-savdo">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
          <p className="mt-4 text-lg text-slate-700">{t('subtitle')}</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((k, i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl bg-white p-6 shadow-card"
            >
              <div className="font-display text-5xl font-extrabold text-savdo">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-slate-900">
                {t(`items.${k}.title`)}
              </h3>
              <p className="mt-2 text-sm text-slate-700">{t(`items.${k}.body`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why now ---------------- */
function WhyNow() {
  const t = useTranslations('investors.whynow');
  const items = ['w1', 'w2', 'w3'] as const;

  return (
    <section className="section">
      <div className="container-savdo">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((k, i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-white p-7 shadow-card"
            >
              <div className="font-display text-4xl font-extrabold text-savdo">
                {t(`items.${k}.stat`)}
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-600">{t(`items.${k}.label`)}</div>
              <p className="mt-4 text-slate-800">{t(`items.${k}.body`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Traction / Projections ---------------- */
function Traction() {
  const t = useTranslations('investors.traction');
  const projections = [
    { year: '2026', stores: 500, bar: 8 },
    { year: '2027', stores: 2500, bar: 18 },
    { year: '2028', stores: 8000, bar: 40 },
    { year: '2029', stores: 20000, bar: 70 },
    { year: '2030', stores: 40000, bar: 100 },
  ];

  return (
    <section className="section bg-slate-50">
      <div className="container-savdo">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
          <p className="mt-4 text-lg text-slate-700">{t('subtitle')}</p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-2xl bg-white p-8 shadow-card sm:p-10">
          <div className="flex items-end justify-between">
            <div>
              <div className="font-display text-xl font-bold text-slate-900">
                {t('chart.title')}
              </div>
              <div className="mt-1 text-sm text-slate-600">{t('chart.subtitle')}</div>
            </div>
            <div className="inline-flex rounded-full bg-savdo-100 px-3 py-1 text-xs font-bold text-savdo-800">
              {t('chart.tag')}
            </div>
          </div>

          <div className="mt-10 flex items-end justify-between gap-3 sm:gap-5">
            {projections.map((p, i) => (
              <div key={p.year} className="flex flex-1 flex-col items-center">
                <div className="text-xs font-bold text-slate-900">
                  {p.stores.toLocaleString()}
                </div>
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${p.bar * 2.4}px` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: 'easeOut' }}
                  className="mt-2 w-full max-w-[60px] rounded-t-xl bg-gradient-to-t from-savdo-600 to-savdo-400"
                />
                <div className="mt-2 text-xs font-semibold text-slate-700">{p.year}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-savdo-50 p-4 text-sm text-savdo-900">
            <span className="font-bold">{t('chart.calloutLabel')} </span>
            {t('chart.callout')}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Roadmap ---------------- */
function Roadmap() {
  const t = useTranslations('investors.roadmap');
  const items = ['r1', 'r2', 'r3', 'r4'] as const;

  return (
    <section className="section">
      <div className="container-savdo">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-savdo-200 md:left-1/2" />
          {items.map((k, i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative mb-10 flex items-start gap-6 md:w-1/2 ${
                i % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:flex-row-reverse md:pl-12'
              }`}
            >
              <div className="absolute left-5 top-3 flex h-3 w-3 -translate-x-1/2 rounded-full bg-savdo ring-4 ring-white md:left-auto md:right-0 md:translate-x-1/2">
                <span className={i % 2 === 1 ? 'md:-translate-x-full' : ''} />
              </div>
              <div className="ml-12 flex-1 rounded-2xl bg-white p-6 shadow-card md:ml-0">
                <div className="text-xs font-bold uppercase tracking-wider text-savdo-700">
                  {t(`items.${k}.when`)}
                </div>
                <h3 className="mt-1 font-display text-lg font-bold text-slate-900">
                  {t(`items.${k}.title`)}
                </h3>
                <p className="mt-2 text-sm text-slate-700">{t(`items.${k}.body`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Team ---------------- */
function Team() {
  const t = useTranslations('investors.team');
  return (
    <section className="section bg-slate-50">
      <div className="container-savdo">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
          <p className="mt-4 text-lg text-slate-700">{t('body')}</p>
        </div>
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-4">
          {['Engineering', 'Product', 'Sales', 'Support', 'Design'].map((g) => (
            <span
              key={g}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-card"
            >
              {g}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Ask ---------------- */
function Ask() {
  const t = useTranslations('investors.ask');
  return (
    <section id="ask" className="section">
      <div className="container-savdo">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 text-white sm:px-16">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-savdo opacity-20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-savdo/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-savdo-200">
                {t('eyebrow')}
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
                {t('title')}
              </h2>
              <p className="mt-5 max-w-lg text-lg text-white/85">{t('body')}</p>
              <dl className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-sm text-white/70">{t('raising.label')}</dt>
                  <dd className="mt-1 font-display text-3xl font-extrabold">{t('raising.value')}</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/70">{t('stage.label')}</dt>
                  <dd className="mt-1 font-display text-3xl font-extrabold">{t('stage.value')}</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/70">{t('use.label')}</dt>
                  <dd className="mt-1 text-sm text-white/90">{t('use.value')}</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/70">{t('runway.label')}</dt>
                  <dd className="mt-1 font-display text-3xl font-extrabold">{t('runway.value')}</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-2xl bg-white p-8 text-slate-900">
              <div className="font-display text-xl font-bold">{t('form.title')}</div>
              <p className="mt-2 text-sm text-slate-700">{t('form.subtitle')}</p>
              <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="w-full rounded-lg bg-slate-100 px-4 py-3 text-sm font-medium text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-savdo"
                  placeholder={t('form.name')}
                />
                <input
                  className="w-full rounded-lg bg-slate-100 px-4 py-3 text-sm font-medium text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-savdo"
                  placeholder={t('form.fund')}
                />
                <input
                  type="email"
                  className="w-full rounded-lg bg-slate-100 px-4 py-3 text-sm font-medium text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-savdo"
                  placeholder={t('form.email')}
                />
                <textarea
                  rows={3}
                  className="w-full rounded-lg bg-slate-100 px-4 py-3 text-sm font-medium text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-savdo"
                  placeholder={t('form.message')}
                />
                <button className="btn-primary w-full" type="submit">
                  {t('form.submit')}
                </button>
              </form>
              <div className="mt-4 text-center text-xs text-slate-600">
                {t('form.or')}{' '}
                <a href="mailto:investors@savdo.io" className="font-semibold text-savdo-700 hover:underline">
                  investors@savdo.io
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
