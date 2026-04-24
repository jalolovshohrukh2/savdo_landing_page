'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { siteConfig } from '@/i18n.config';

export function FinalCTA() {
  const t = useTranslations('finalCta');

  return (
    <section id="trial" className="section bg-forest-950">
      <div className="container-savdo">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-lime-300 px-8 py-16 text-center sm:px-16"
        >
          <div className="relative">
            <h2 className="font-serif text-4xl font-bold text-forest-950 sm:text-5xl lg:text-6xl">
              {t('title')}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-forest-900/80 sm:text-lg">{t('subtitle')}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={siteConfig.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-forest-950 px-7 py-3 text-sm font-bold text-lime-300 transition hover:bg-forest-900"
              >
                {t('ctaPrimary')}
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full border border-forest-950/40 px-7 py-3 text-sm font-bold text-forest-950 transition hover:bg-forest-950 hover:text-lime-300"
              >
                {t('ctaSecondary')}
              </a>
            </div>
            <p className="mt-4 text-sm text-forest-900/70">{t('note')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
