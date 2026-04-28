'use client';

import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';
import { siteConfig } from '@/i18n.config';

export function TopBar() {
  const t = useTranslations('topbar');

  return (
    <div className="hidden border-b border-slate-100 bg-white md:block">
      <div className="container-savdo flex h-12 items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-slate-600">
          <svg className="h-3.5 w-3.5 text-slate-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4h4l2 5-2.5 1.5a11 11 0 006 6L15 14l5 2v4a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1z" />
          </svg>
          <span>{t('contact')}</span>
          <a
            href={siteConfig.phoneHref}
            className="font-bold text-slate-900 transition hover:text-savdo"
          >
            {siteConfig.phone}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href={siteConfig.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-slate-800 transition hover:border-savdo hover:text-savdo"
          >
            {t('signIn')}
            <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor">
              <path d="M6.5 3l5 5-5 5-1.4-1.4L8.7 8 5.1 4.4 6.5 3z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
