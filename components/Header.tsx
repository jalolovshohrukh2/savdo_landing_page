'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { siteConfig } from '@/i18n.config';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const homeBase = `/${locale}`;
  const isHome = pathname === homeBase || pathname === `${homeBase}/`;
  const anchor = (hash: string) => (isHome ? hash : `${homeBase}${hash}`);

  const links = [
    { href: anchor('#features'), label: t('features') },
    { href: anchor('#pricing'), label: t('pricing') },
    { href: `${homeBase}/partners`, label: t('partners') },
    { href: `${homeBase}/investors`, label: t('investors') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream-100 rounded-b-[28px] shadow-[0_8px_24px_-12px_rgba(8,32,24,0.35)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-7 lg:h-20 lg:px-10">
        <Link href={homeBase} className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-lime-300 text-lg font-black leading-none text-forest-950">
            R
          </span>
          <span className="text-xl font-bold tracking-tight text-forest-950">
            Refresh
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-semibold text-forest-950 transition hover:text-forest-700"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <a
            href={siteConfig.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-forest-950 px-5 py-2.5 text-sm font-semibold text-forest-950 transition hover:bg-forest-950 hover:text-lime-300 sm:inline-flex"
          >
            {t('signIn')}
          </a>
          <a
            href={siteConfig.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-forest-950 px-5 py-2.5 text-sm font-semibold text-lime-300 transition hover:bg-forest-900 sm:inline-flex"
          >
            {t('tryFree')}
          </a>
          <button
            className="lg:hidden rounded-lg p-2 text-forest-950"
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              {mobileOpen ? (
                <path d="M18.3 5.7L12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3 1.4 1.4z" />
              ) : (
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-forest-950/10 bg-cream-100 lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-7">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-forest-950 hover:bg-forest-950/5"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={siteConfig.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-forest-950 px-5 py-3 text-sm font-semibold text-lime-300"
              >
                {t('tryFree')}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
