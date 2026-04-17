'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQ() {
  const t = useTranslations('faq');
  const keys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
  const [open, setOpen] = useState<string | null>('q1');

  return (
    <section id="faq" className="section">
      <div className="container-savdo">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
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
              <AnimatePresence>
                {open === k && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-slate-700">{t(`items.${k}.a`)}</p>
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
