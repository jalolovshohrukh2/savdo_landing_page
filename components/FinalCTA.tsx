'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { siteConfig } from '@/i18n.config';

export function FinalCTA() {
  const t = useTranslations('finalCta');

  return (
    <section id="trial" className="section">
      <div className="container-savdo">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-savdo to-savdo-700 px-8 py-16 text-center sm:px-16"
        >
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              {t('title')}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white">{t('subtitle')}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={siteConfig.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-savdo-700 shadow transition hover:bg-savdo-50"
              >
                {t('ctaPrimary')}
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {t('ctaSecondary')}
              </a>
            </div>
            <p className="mt-4 text-sm text-white/85">{t('note')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
