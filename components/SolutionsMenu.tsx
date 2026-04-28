'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SOLUTIONS } from '@/lib/solutions';

export function SolutionsMenu() {
  const t = useTranslations('solutions');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const schedule = (cb: () => void, ms: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(cb, ms);
  };
  const cancel = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const triggerHandlers = {
    onMouseEnter: () => {
      cancel();
      setOpen(true);
    },
    onMouseLeave: () => schedule(() => setOpen(false), 120),
  };

  const menuHandlers = {
    onMouseEnter: () => cancel(),
    onMouseLeave: () => schedule(() => setOpen(false), 120),
  };

  return (
    <>
      <div className="relative" {...triggerHandlers}>
        <Link
          href={`/${locale}/solutions`}
          className="flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-savdo"
        >
          {tNav('solutions')}
          <svg
            className={`h-3 w-3 transition ${open ? 'rotate-180' : ''}`}
            viewBox="0 0 12 12"
            fill="currentColor"
          >
            <path d="M6 8.3L1.7 4l1-1L6 6.3 9.3 3l1 1L6 8.3z" />
          </svg>
        </Link>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <div
                {...menuHandlers}
                className="fixed left-1/2 top-[116px] z-50 w-[min(1100px,calc(100vw-2rem))] -translate-x-1/2"
              >
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-slate-200/70 sm:p-10"
                >
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  {t('megaHeading')}
                </div>
                <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-3 lg:grid-cols-4">
                  {SOLUTIONS.map((sol) => (
                    <Link
                      key={sol.slug}
                      href={`/${locale}/solutions/${sol.slug}`}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-savdo-50"
                    >
                      <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-savdo-100 text-savdo-800 transition group-hover:bg-savdo group-hover:text-white">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                          <path d={sol.icon} />
                        </svg>
                      </span>
                      <span className="text-[15px] font-semibold text-slate-900 group-hover:text-savdo-800">
                        {t(`items.${sol.slug}.name`)}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 border-t border-slate-100 pt-6">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    {t('megaOther')}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-3 lg:grid-cols-4">
                    <Link
                      href={`/${locale}#features`}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-savdo-50"
                    >
                      <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-savdo group-hover:text-white">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                          <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z" />
                        </svg>
                      </span>
                      <span className="text-[15px] font-semibold text-slate-900">
                        {t('megaAllFeatures')}
                      </span>
                    </Link>
                    <Link
                      href={`/${locale}/partners`}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-savdo-50"
                    >
                      <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-savdo group-hover:text-white">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                          <path d="M4 4h7l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 6h16v8H4v-8z" />
                        </svg>
                      </span>
                      <span className="text-[15px] font-semibold text-slate-900">
                        {t('megaPartners')}
                      </span>
                    </Link>
                  </div>
                </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
