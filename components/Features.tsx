'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const ICONS: Record<string, JSX.Element> = {
  inventory: (
    <path d="M12 2L3 6.5v11L12 22l9-4.5v-11L12 2zm0 2.2l6.8 3.4L12 11 5.2 7.6 12 4.2zM5 9.3l6 3v8.2l-6-3V9.3zm8 11.2v-8.2l6-3v8.2l-6 3z" />
  ),
  customers: (
    <path d="M9 11a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 5v2h14v-2c0-3-3-5-7-5zm8.5-2a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm.5 2c-1 0-1.9.2-2.7.6 1.1 1 1.7 2.2 1.7 3.4v2H22v-2c0-2.4-2-4-4-4z" />
  ),
  pos: (
    <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 0v10h14V5H5zm-1 14a1 1 0 100 2h16a1 1 0 100-2H4z" />
  ),
  analytics: (
    <path d="M3 21V10h4v11H3zm7 0V4h4v17h-4zm7 0v-8h4v8h-4zM2 22h20v-1H2v1z" />
  ),
  marketing: (
    <path d="M21 4l-3 1.5v13L21 20V4zM3 10a2 2 0 012-2h10v8H5a2 2 0 01-2-2v-4zm4 8v3a1 1 0 001 1h2a1 1 0 001-1v-3H7z" />
  ),
  finance: (
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15.5v1.5h-2v-1.5c-1.8-.3-3-1.5-3.2-3.3l2-.4c.1.9.8 1.7 2.2 1.7 1.1 0 1.9-.5 1.9-1.2 0-.6-.5-1-1.8-1.3l-1.3-.3c-1.8-.4-2.9-1.4-2.9-2.9 0-1.5 1.2-2.7 3.1-3V5.5h2v1.4c1.7.3 2.7 1.4 3 2.9l-2 .5c-.1-.8-.7-1.4-1.9-1.4-1 0-1.7.4-1.7 1.1 0 .5.4.9 1.6 1.1l1.4.3c2 .4 3 1.4 3 3 0 1.6-1.3 2.8-3.4 3z" />
  ),
};

export function Features() {
  const t = useTranslations('features');
  const keys = ['inventory', 'customers', 'pos', 'analytics', 'marketing', 'finance'];

  return (
    <section id="features" className="section bg-white">
      <div className="container-savdo">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section mt-4">{t('title')}</h2>
          <p className="mt-4 text-lg text-slate-700">{t('subtitle')}</p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {keys.map((k, i) => (
            <motion.article
              key={k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-savdo-100 text-savdo-700">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  {ICONS[k]}
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
                {t(`items.${k}.title`)}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
                {t(`items.${k}.description`)}
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
