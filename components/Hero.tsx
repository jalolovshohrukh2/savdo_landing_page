'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { siteConfig } from '@/i18n.config';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient background: soft mesh + dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_10%,rgba(57,173,168,0.14),transparent_60%),radial-gradient(40%_60%_at_95%_0%,rgba(57,173,168,0.12),transparent_60%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:radial-gradient(rgb(148,163,184)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]"
      />

      <div className="container-savdo relative pt-14 pb-20 sm:pt-20 lg:pt-24 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10 xl:gap-16">
          {/* --- Copy column --- */}
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-savdo-800 shadow-sm ring-1 ring-savdo-200/60 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-savdo opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-savdo" />
              </span>
              {t('eyebrow')}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-slate-900 sm:text-6xl lg:text-[68px] xl:text-7xl"
            >
              {t('title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700 sm:text-xl"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href={siteConfig.signupFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-savdo px-7 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-savdo-600"
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
                className="inline-flex items-center rounded-full border border-slate-300 bg-white/80 px-7 py-3.5 text-sm font-bold text-slate-900 backdrop-blur transition hover:border-savdo hover:text-savdo"
              >
                {t('ctaSecondary')}
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-5 text-sm text-slate-600"
            >
              {t('ctaNote')}
            </motion.p>

            {/* Capability strip — product truths only, no language flags */}
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200/70 pt-6 text-sm font-medium text-slate-700"
            >
              <li className="flex items-center gap-1.5 text-slate-700">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-savdo-100">
                  <svg viewBox="0 0 20 20" className="h-2.5 w-2.5" fill="rgb(57,173,168)">
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" />
                  </svg>
                </span>
                {t('chips.offline')}
              </li>
              <li className="flex items-center gap-1.5 text-slate-700">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-savdo-100">
                  <svg viewBox="0 0 20 20" className="h-2.5 w-2.5" fill="rgb(57,173,168)">
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" />
                  </svg>
                </span>
                {t('chips.currencies')}
              </li>
              <li className="flex items-center gap-1.5 text-slate-700">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-savdo-100">
                  <svg viewBox="0 0 20 20" className="h-2.5 w-2.5" fill="rgb(57,173,168)">
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" />
                  </svg>
                </span>
                {t('chips.support')}
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

/* ---------- Product visual: live dashboard ---------- */

const RANGES = ['1D', '7D', '1M'] as const;
type Range = (typeof RANGES)[number];

/** Locale → BCP47 for Intl.DateTimeFormat. */
const DATE_LOCALES: Record<string, string> = {
  tj: 'ru-RU',
  ru: 'ru-RU',
  uz: 'uz-UZ',
  en: 'en-US',
};

/** Generate a smooth wavy chart path that trends upward. `phase` shifts the wave for animation. */
function generateChartPath(range: Range, tick: number): { area: string; ribbon: string; endY: number } {
  // Different amplitudes/roughness per range
  const config: Record<Range, { points: number; amp: number; drift: number; start: number; end: number }> = {
    '1D': { points: 24, amp: 6, drift: 0.8, start: 55, end: 22 },
    '7D': { points: 14, amp: 10, drift: 1.2, start: 62, end: 14 },
    '1M': { points: 20, amp: 8, drift: 1.5, start: 68, end: 8 },
  };
  const { points, amp, drift, start, end } = config[range];
  const width = 400;
  const step = width / (points - 1);
  const baseline = start + Math.sin(tick * 0.3) * drift;

  const pts: Array<[number, number]> = [];
  for (let i = 0; i < points; i++) {
    const t = i / (points - 1);
    const x = i * step;
    const y =
      baseline +
      (end - baseline) * t +
      Math.sin(i * 0.8 + tick * 0.25) * amp * (1 - t * 0.3);
    pts.push([x, y]);
  }

  // Smooth bezier curve through points (returns a curve path string)
  const toCurve = (series: Array<[number, number]>) => {
    let d = `M${series[0][0]},${series[0][1].toFixed(2)}`;
    for (let i = 1; i < series.length; i++) {
      const [x0, y0] = series[i - 1];
      const [x1, y1] = series[i];
      const cp1x = x0 + (x1 - x0) * 0.5;
      const cp2x = x1 - (x1 - x0) * 0.5;
      d += ` C${cp1x},${y0.toFixed(2)} ${cp2x},${y1.toFixed(2)} ${x1},${y1.toFixed(2)}`;
    }
    return d;
  };

  // Area fill (from line down to bottom)
  const topCurve = toCurve(pts);
  const area = `${topCurve} L${width},80 L0,80 Z`;

  // Thin filled ribbon that approximates a 2px line (no stroke attribute used)
  const topOffset: Array<[number, number]> = pts.map(([x, y]) => [x, y - 1]);
  const bottomOffset: Array<[number, number]> = pts.map(([x, y]) => [x, y + 1]);
  const topPath = toCurve(topOffset);
  // Traverse the bottom curve in reverse so the ribbon closes cleanly
  const reversedBottom = [...bottomOffset].reverse();
  const bottomPath = toCurve(reversedBottom).replace(/^M/, 'L'); // continue the current sub-path
  const ribbon = `${topPath} ${bottomPath} Z`;

  const endY = pts[pts.length - 1][1];
  return { area, ribbon, endY };
}

function ProductVisual() {
  const locale = useLocale();
  const [range, setRange] = useState<Range>('7D');
  const [tick, setTick] = useState(0);
  const [date, setDate] = useState<string>('');

  // Live date on mount (avoid SSR hydration mismatch)
  useEffect(() => {
    const now = new Date();
    const fmt = new Intl.DateTimeFormat(DATE_LOCALES[locale] ?? 'en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    let formatted = fmt.format(now);
    // Capitalize first letter (some locales return lowercase weekday)
    formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
    // Replace comma with middle-dot for consistency
    setDate(formatted.replace(/, /g, ' · '));
  }, [locale]);

  // Tick: refresh stats + chart every 20s
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 20_000);
    return () => clearInterval(id);
  }, []);

  // Slow chart breathing: shift phase every 2s for gentle live motion
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPhase((p) => p + 1), 2_000);
    return () => clearInterval(id);
  }, []);

  // Deterministic stats from tick — gently drift upward
  const stats = useMemo(() => {
    const t = tick;
    const rand = (seed: number) => {
      const x = Math.sin(seed * 9301 + 49297) * 233280;
      return x - Math.floor(x);
    };
    return {
      today: Math.round(12430 + t * 110 + rand(t + 1) * 400 - 100),
      orders: Math.round(284 + t * 2.4 + rand(t + 2) * 8 - 2),
      customers: Math.round(196 + t * 1.3 + rand(t + 3) * 4),
      todayDelta: (18 + Math.sin(t * 0.4) * 3).toFixed(1),
      ordersDelta: (12 + Math.cos(t * 0.3) * 2).toFixed(1),
      customersDelta: (9 + Math.sin(t * 0.5) * 1.5).toFixed(1),
    };
  }, [tick]);

  const chart = useMemo(() => generateChartPath(range, phase), [range, phase]);

  const fmtNum = (n: number) => n.toLocaleString('en-US').replace(/,/g, ',');

  return (
    <div className="relative mx-auto h-full w-full max-w-xl lg:max-w-none">
      {/* Glow behind */}
      <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-savdo-200/70 via-savdo-100/40 to-transparent blur-2xl" />

      {/* Main dashboard card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10 overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-20px_rgba(15,23,42,0.25)] ring-1 ring-slate-200/70"
      >
        {/* Chrome */}
        <div className="flex items-center gap-1.5 bg-white px-5 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-3 text-xs font-medium text-slate-500">app.savdo.io</span>
        </div>

        <div className="bg-gradient-to-br from-white to-savdo-50/50 p-6 sm:p-7">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Dashboard
              </div>
              <div
                suppressHydrationWarning
                className="mt-0.5 font-display text-lg font-bold text-slate-900"
              >
                {date || '\u00A0'}
              </div>
            </div>
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-savdo-100 font-display text-xs font-extrabold text-savdo-800">
              AS
            </div>
          </div>

          {/* Live stats */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { k: 'Today', v: `$${fmtNum(stats.today)}`, c: `+${stats.todayDelta}%` },
              { k: 'Orders', v: fmtNum(stats.orders), c: `+${stats.ordersDelta}%` },
              { k: 'Customers', v: fmtNum(stats.customers), c: `+${stats.customersDelta}%` },
            ].map((m) => (
              <div key={m.k} className="rounded-xl bg-white p-3.5 ring-1 ring-slate-200/70">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {m.k}
                </div>
                <motion.div
                  key={m.v}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-1 font-display text-xl font-extrabold text-slate-900"
                >
                  {m.v}
                </motion.div>
                <div className="mt-0.5 text-[10px] font-bold text-savdo-700">{m.c}</div>
              </div>
            ))}
          </div>

          {/* Chart with clickable range tabs */}
          <div className="mt-4 rounded-xl bg-white p-4 ring-1 ring-slate-200/70">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-slate-900">Revenue</div>
              <div className="inline-flex gap-1.5">
                {RANGES.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRange(r)}
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold transition ${
                      r === range
                        ? 'bg-savdo text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
            <svg viewBox="0 0 400 80" className="mt-3 h-20 w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="revGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgb(57,173,168)" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="rgb(57,173,168)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                animate={{ d: chart.area }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
                fill="url(#revGrad)"
              />
              <motion.path
                animate={{ d: chart.ribbon }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
                fill="rgb(57,173,168)"
              />
              <motion.circle
                animate={{ cy: chart.endY }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
                cx="400"
                r="4"
                fill="rgb(57,173,168)"
              />
              <motion.circle
                animate={{ cy: chart.endY }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
                cx="400"
                r="2"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Floating: Sale toast */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, type: 'spring', stiffness: 70 }}
        className="absolute -left-4 top-1/3 z-20 hidden w-60 rounded-2xl bg-white p-4 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.25)] ring-1 ring-slate-200/70 sm:block lg:-left-8"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-savdo-100">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="rgb(57,173,168)">
              <path d="M16 3a5 5 0 014.9 4h.1a2 2 0 012 2v9a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2h.1A5 5 0 018 3h8zm0 2H8a3 3 0 00-2.82 2h13.64A3 3 0 0016 5zm-3 7a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
          </div>
          <div className="min-w-0">
            <div className="text-[11px] font-bold uppercase tracking-wider text-savdo-700">
              New sale
            </div>
            <div className="mt-0.5 font-display text-base font-extrabold text-slate-900">
              +$148.50
            </div>
            <div className="truncate text-xs text-slate-600">Jeans — Slim Fit · POS #2</div>
          </div>
        </div>
      </motion.div>

      {/* Floating: Low stock alert */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9, type: 'spring', stiffness: 70 }}
        className="absolute -right-4 bottom-6 z-20 hidden w-60 rounded-2xl bg-slate-900 p-4 text-white shadow-[0_20px_50px_-15px_rgba(15,23,42,0.35)] sm:block lg:-right-8"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-amber-400/20">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="rgb(251,191,36)">
              <path d="M12 2l11 19H1L12 2zm0 7v5h0a1 1 0 002 0V9a1 1 0 00-2 0zm1 9a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" />
            </svg>
          </div>
          <div className="min-w-0">
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
              Low stock
            </div>
            <div className="mt-0.5 font-display text-base font-extrabold">3 items left</div>
            <div className="truncate text-xs text-white/70">Sneakers — White · Size 42</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
