'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQ() {
  const t = useTranslations('faq');
  const keys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
  const [open, setOpen] = useState<string | null>('q1');

  return (
    <section id="faq" className="section bg-forest-950">
      <div className="container-savdo">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-forest-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-300">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-cream-100 sm:text-5xl">
            {t('title')}
          </h2>
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
              <AnimatePresence>
                {open === k && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-cream-100/80">{t(`items.${k}.a`)}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
