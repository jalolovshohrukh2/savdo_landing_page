'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { LogoWithWordmark } from './Logo';
import { SolutionsMenu } from './SolutionsMenu';
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
    { href: anchor('#pricing'), label: t('pricing') },
    { href: `${homeBase}/partners`, label: t('partners') },
    { href: `${homeBase}/investors`, label: t('investors') },
    { href: `${homeBase}/test`, label: 'POS Demo' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container-savdo flex h-16 items-center justify-between">
        <Link href={homeBase} className="flex items-center">
          <LogoWithWordmark />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <SolutionsMenu />
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-700 transition hover:text-savdo"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.signupFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden btn-primary sm:inline-flex"
          >
            {t('tryFree')}
          </a>
          <button
            className="lg:hidden rounded-lg p-2 text-slate-700"
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
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <nav className="container-savdo flex flex-col gap-1 py-4">
              <Link
                href={`${homeBase}/solutions`}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-savdo-50 hover:text-savdo"
              >
                {t('solutions')}
              </Link>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-savdo-50 hover:text-savdo"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={siteConfig.signupFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2"
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
