'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resolveCountry, type CountryKey } from '@/lib/country';
import { siteConfig } from '@/i18n.config';

type Tiers = [boolean, boolean, boolean]; // [start, advanced, pro]

const CATEGORIES: Array<{
  key: string;
  rows: Array<{ key: string; tiers: Tiers }>;
}> = [
  {
    key: 'inventory',
    rows: [
      { key: 'i1', tiers: [true, true, true] },
      { key: 'i2', tiers: [true, true, true] },
      { key: 'i3', tiers: [true, true, true] },
      { key: 'i4', tiers: [true, true, true] },
      { key: 'i5', tiers: [true, true, true] },
      { key: 'i6', tiers: [true, true, true] },
      { key: 'i7', tiers: [true, true, true] },
      { key: 'i8', tiers: [true, true, true] },
      { key: 'i9', tiers: [false, true, true] },
      { key: 'i10', tiers: [false, true, true] },
      { key: 'i11', tiers: [false, false, true] },
    ],
  },
  {
    key: 'pos',
    rows: [
      { key: 'p1', tiers: [true, true, true] },
      { key: 'p2', tiers: [true, true, true] },
      { key: 'p3', tiers: [true, true, true] },
      { key: 'p4', tiers: [true, true, true] },
      { key: 'p5', tiers: [true, true, true] },
      { key: 'p6', tiers: [false, true, true] },
      { key: 'p7', tiers: [false, true, true] },
      { key: 'p8', tiers: [false, false, true] },
    ],
  },
  {
    key: 'customers',
    rows: [
      { key: 'c1', tiers: [true, true, true] },
      { key: 'c2', tiers: [true, true, true] },
      { key: 'c3', tiers: [false, true, true] },
      { key: 'c4', tiers: [false, true, true] },
      { key: 'c5', tiers: [false, true, true] },
      { key: 'c6', tiers: [false, false, true] },
    ],
  },
  {
    key: 'marketing',
    rows: [
      { key: 'm1', tiers: [false, true, true] },
      { key: 'm2', tiers: [false, true, true] },
      { key: 'm3', tiers: [false, true, true] },
      { key: 'm4', tiers: [false, true, true] },
      { key: 'm5', tiers: [false, false, true] },
    ],
  },
  {
    key: 'finance',
    rows: [
      { key: 'f1', tiers: [true, true, true] },
      { key: 'f2', tiers: [true, true, true] },
      { key: 'f3', tiers: [false, true, true] },
      { key: 'f4', tiers: [false, true, true] },
      { key: 'f5', tiers: [false, false, true] },
    ],
  },
  {
    key: 'reports',
    rows: [
      { key: 'r1', tiers: [true, true, true] },
      { key: 'r2', tiers: [true, true, true] },
      { key: 'r3', tiers: [false, true, true] },
      { key: 'r4', tiers: [false, true, true] },
      { key: 'r5', tiers: [false, false, true] },
      { key: 'r6', tiers: [false, false, true] },
    ],
  },
  {
    key: 'staff',
    rows: [
      { key: 's1', tiers: [true, true, true] },
      { key: 's2', tiers: [true, true, true] },
      { key: 's3', tiers: [false, true, true] },
      { key: 's4', tiers: [false, true, true] },
      { key: 's5', tiers: [false, false, true] },
    ],
  },
  {
    key: 'integrations',
    rows: [
      { key: 'n1', tiers: [true, true, true] },
      { key: 'n2', tiers: [true, true, true] },
      { key: 'n3', tiers: [true, true, true] },
      { key: 'n4', tiers: [false, true, true] },
      { key: 'n5', tiers: [false, true, true] },
      { key: 'n7', tiers: [false, true, true] },
      { key: 'n8', tiers: [false, true, true] },
      { key: 'n9', tiers: [false, true, true] },
      { key: 'n6', tiers: [false, false, true] },
    ],
  },
];

const PRICES: Record<
  CountryKey,
  { suffix: string; prefix?: string; start: string; advanced: string; pro: string }
> = {
  tj: { suffix: ' сом.', start: '179', advanced: '329', pro: '649' },
  uz: { suffix: ' soʻm', start: '229 000', advanced: '419 000', pro: '819 000' },
  kz: { suffix: ' ₸', start: '8 900', advanced: '16 500', pro: '32 500' },
  kg: { suffix: ' сом', start: '1 690', advanced: '2 990', pro: '5 990' },
  us: { prefix: '$', suffix: '', start: '19', advanced: '35', pro: '69' },
};

export function PricingCompare() {
  const t = useTranslations('pricing.compare');
  const locale = useLocale();
  const [openCategories, setOpenCategories] = useState<string[]>(
    CATEGORIES.map((c) => c.key),
  );

  const [country, setCountry] = useState<CountryKey>(() => resolveCountry(locale));
  useEffect(() => {
    setCountry(resolveCountry(locale));
  }, [locale]);

  const toggle = (key: string) =>
    setOpenCategories((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );

  const p = PRICES[country];
  const fmt = (n: string) => (p.prefix ? `${p.prefix}${n}` : `${n}${p.suffix}`);

  const tierLabels = ['Start', 'Advanced', 'Pro'];
  const tierPrices = [p.start, p.advanced, p.pro];

  return (
    <section id="compare" className="section bg-white">
      <div className="container-savdo">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
          <p className="mt-4 text-lg text-slate-700">{t('subtitle')}</p>
        </div>

        {/* Table — no overflow-hidden on wrapper so sticky can escape */}
        <div className="mx-auto mt-12 max-w-5xl rounded-2xl bg-white shadow-card ring-1 ring-slate-200/70">
          {/* Sticky header — stays visible under the site nav (which is top-0 h-16) */}
          <div className="sticky top-16 z-20 grid grid-cols-[1.6fr_repeat(3,1fr)] gap-2 rounded-t-2xl border-b border-slate-200 bg-white/95 px-5 py-4 shadow-sm backdrop-blur sm:px-8">
            <div />
            {tierLabels.map((label, i) => (
              <div key={label} className="text-center">
                <div
                  className={`font-display text-lg font-extrabold sm:text-xl ${
                    i === 1 ? 'text-savdo-700' : 'text-slate-900'
                  }`}
                >
                  {label}
                </div>
                <div className="mt-0.5 text-xs text-slate-600">{fmt(tierPrices[i])}</div>
              </div>
            ))}
          </div>

          {/* Categories */}
          {CATEGORIES.map((cat) => {
            const isOpen = openCategories.includes(cat.key);
            return (
              <div key={cat.key} className="border-b border-slate-200 last:rounded-b-2xl last:border-0">
                <button
                  onClick={() => toggle(cat.key)}
                  className="flex w-full items-center justify-between px-5 py-5 text-left transition hover:bg-slate-50 sm:px-8"
                >
                  <span className="flex items-center gap-3 font-display text-lg font-bold text-slate-900">
                    <svg
                      className={`h-3 w-3 text-savdo transition ${
                        isOpen ? 'rotate-0' : '-rotate-90'
                      }`}
                      viewBox="0 0 12 12"
                      fill="currentColor"
                    >
                      <path d="M6 8.3L1.7 4l1-1L6 6.3 9.3 3l1 1L6 8.3z" />
                    </svg>
                    {t(`categories.${cat.key}`)}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {cat.rows.length}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <div className="divide-y divide-slate-100">
                        {cat.rows.map((row) => (
                          <div
                            key={row.key}
                            className="grid grid-cols-[1.6fr_repeat(3,1fr)] gap-2 px-5 py-4 text-sm sm:px-8"
                          >
                            <div className="pr-2 text-slate-800">
                              {t(`features.${row.key}`)}
                            </div>
                            {row.tiers.map((has, i) => (
                              <div
                                key={i}
                                className={`flex items-center justify-center ${
                                  i === 1 ? 'bg-savdo-50/50' : ''
                                }`}
                              >
                                {has ? <CheckIcon /> : <DashIcon />}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA below table */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={siteConfig.signupFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t('cta')}
          </a>
          <a href="#pricing" className="btn-secondary">
            {t('ctaSecondary')}
          </a>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-savdo text-white">
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
        <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" />
      </svg>
    </span>
  );
}

function DashIcon() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">
      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="rgb(148,163,184)">
        <rect x="4" y="9" width="12" height="2" rx="1" />
      </svg>
    </span>
  );
}
