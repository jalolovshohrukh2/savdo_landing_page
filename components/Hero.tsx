'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { siteConfig } from '@/i18n.config';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="top" className="relative overflow-hidden bg-forest-950">
      <div className="container-savdo relative pt-14 pb-20 sm:pt-20 lg:pt-24 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-10 xl:gap-16">
          {/* --- Copy column --- */}
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-forest-800 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-lime-300 ring-1 ring-forest-700"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-300" />
              </span>
              {t('eyebrow')}
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-6 inline-block w-fit max-w-full rounded-3xl bg-lime-300 px-7 py-5"
            >
              <h1 className="font-serif text-4xl font-bold leading-[1.05] tracking-tight text-forest-950 sm:text-5xl lg:text-6xl">
                {t('title')}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-4 inline-block w-fit max-w-full rounded-3xl bg-cream-100 px-7 py-5 lg:ml-12"
            >
              <p className="font-serif text-xl font-semibold text-forest-950 sm:text-2xl">
                {t('subtitle')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href={siteConfig.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-lime-300 px-7 py-3.5 text-sm font-bold text-forest-950 transition hover:bg-lime-200"
              >
                {t('ctaPrimary')}
                <svg
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  fill="currentColor"
                >
                  <path d="M6.5 3l5 5-5 5-1.4-1.4L8.7 8 5.1 4.4 6.5 3z" />
                </svg>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center rounded-full border border-lime-300/60 px-7 py-3.5 text-sm font-bold text-lime-300 transition hover:bg-lime-300 hover:text-forest-950"
              >
                {t('ctaSecondary')}
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-5 text-sm text-cream-100/70"
            >
              {t('ctaNote')}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-forest-800 pt-6 text-sm font-medium text-cream-100/80"
            >
              {[
                { flag: '🇹🇯', label: 'Тоҷикӣ' },
                { flag: '🇷🇺', label: 'Русский' },
                { flag: '🇺🇿', label: 'Oʻzbekcha' },
                { flag: '🇬🇧', label: 'English' },
              ].map((l) => (
                <li key={l.label} className="flex items-center gap-1.5">
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </li>
              ))}
              <li className="flex items-center gap-1.5">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-forest-800">
                  <svg viewBox="0 0 20 20" className="h-2.5 w-2.5" fill="currentColor" color="#c8f262">
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" />
                  </svg>
                </span>
                {t('chips.offline')}
              </li>
              <li className="flex items-center gap-1.5">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-forest-800">
                  <svg viewBox="0 0 20 20" className="h-2.5 w-2.5" fill="currentColor" color="#c8f262">
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" />
                  </svg>
                </span>
                {t('chips.currencies')}
              </li>
            </motion.ul>
          </div>

          {/* --- Visual column --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[520px] sm:h-[580px] lg:h-auto"
          >
            <ProductVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Product visual: dashboard card on dark bg ---------- */
function ProductVisual() {
  return (
    <div className="relative mx-auto h-full w-full max-w-xl lg:max-w-none">
      {/* Main dashboard card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10 overflow-hidden rounded-3xl bg-forest-800 ring-1 ring-forest-700"
      >
        <div className="flex items-center gap-1.5 bg-forest-900 px-5 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime-400" />
          <span className="ml-3 text-xs font-medium text-cream-100/60">app.refresh.io</span>
        </div>

        <div className="bg-forest-800 p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-cream-100/60">
                Dashboard
              </div>
              <div className="mt-0.5 font-serif text-lg font-bold text-cream-100">
                Thursday · April 17
              </div>
            </div>
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 font-serif text-xs font-bold text-forest-950">
              AS
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { k: 'Today', v: '$12,430', c: '+18%' },
              { k: 'Orders', v: '284', c: '+12%' },
              { k: 'Customers', v: '196', c: '+9%' },
            ].map((m) => (
              <div key={m.k} className="rounded-xl bg-forest-900 p-3.5 ring-1 ring-forest-700">
                <div className="text-[10px] font-bold uppercase tracking-wider text-cream-100/60">
                  {m.k}
                </div>
                <div className="mt-1 font-serif text-xl font-bold text-cream-100">
                  {m.v}
                </div>
                <div className="mt-0.5 text-[10px] font-bold text-lime-300">{m.c}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl bg-forest-900 p-4 ring-1 ring-forest-700">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-cream-100">Revenue</div>
              <div className="inline-flex gap-1.5">
                {['1D', '7D', '1M'].map((r, i) => (
                  <span
                    key={r}
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      i === 1 ? 'bg-lime-300 text-forest-950' : 'bg-forest-800 text-cream-100/60'
                    }`}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
            <svg viewBox="0 0 400 80" className="mt-3 h-20 w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="revGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#c8f262" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#c8f262" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,62 C40,56 80,48 120,44 C160,40 200,50 240,42 C280,34 320,22 400,14 L400,80 L0,80 Z"
                fill="url(#revGrad)"
              />
              <path
                d="M0,62 C40,56 80,48 120,44 C160,40 200,50 240,42 C280,34 320,22 400,14"
                fill="none"
                stroke="#c8f262"
                strokeWidth="2"
              />
              <circle cx="400" cy="14" r="4" fill="#c8f262" />
              <circle cx="400" cy="14" r="2" fill="#0f3824" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Floating: Sale toast */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, type: 'spring', stiffness: 70 }}
        className="absolute -left-4 top-1/3 z-20 hidden w-60 rounded-2xl bg-lime-300 p-4 text-forest-950 sm:block lg:-left-8"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-forest-950 text-lime-300">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M16 3a5 5 0 014.9 4h.1a2 2 0 012 2v9a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2h.1A5 5 0 018 3h8zm0 2H8a3 3 0 00-2.82 2h13.64A3 3 0 0016 5zm-3 7a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
          </div>
          <div className="min-w-0">
            <div className="text-[11px] font-bold uppercase tracking-wider text-forest-900/70">
              New sale
            </div>
            <div className="mt-0.5 font-serif text-base font-bold">
              +$148.50
            </div>
            <div className="truncate text-xs text-forest-900/70">Jeans — Slim Fit · POS #2</div>
          </div>
        </div>
      </motion.div>

      {/* Floating: Low stock alert */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9, type: 'spring', stiffness: 70 }}
        className="absolute -right-4 bottom-6 z-20 hidden w-60 rounded-2xl bg-cream-100 p-4 text-forest-950 sm:block lg:-right-8"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-amber-400/30">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-700" fill="currentColor">
              <path d="M12 2l11 19H1L12 2zm0 7v5h0a1 1 0 002 0V9a1 1 0 00-2 0zm1 9a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" />
            </svg>
          </div>
          <div className="min-w-0">
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
              Low stock
            </div>
            <div className="mt-0.5 font-serif text-base font-bold">3 items left</div>
            <div className="truncate text-xs text-forest-900/70">Sneakers — White · Size 42</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
