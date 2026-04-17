'use client';

import { useTranslations } from 'next-intl';
import { LogoWithWordmark } from './Logo';
import { siteConfig } from '@/i18n.config';

export function Footer() {
  const t = useTranslations('footer');

  const columns = [
    {
      heading: t('cols.solutions'),
      items: ['clothing', 'shoes', 'cosmetics', 'electronics', 'grocery', 'pharmacy'],
      group: 'solutions',
    },
    {
      heading: t('cols.why'),
      items: ['features', 'integrations', 'security', 'mobile'],
      group: 'why',
    },
    {
      heading: t('cols.resources'),
      items: ['blog', 'academy', 'updates', 'support', 'api'],
      group: 'resources',
    },
    {
      heading: t('cols.partners'),
      items: ['referral', 'agency', 'affiliates'],
      group: 'partners',
    },
    {
      heading: t('cols.company'),
      items: ['about', 'careers', 'press', 'contact'],
      group: 'company',
    },
  ];

  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="container-savdo py-16">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <LogoWithWordmark />
            <p className="mt-4 max-w-xs text-sm text-slate-700">{t('tagline')}</p>
            <div className="mt-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {t('contact')}
              </div>
              <a
                href={siteConfig.phoneHref}
                className="mt-1 block font-display text-xl font-bold text-slate-900 hover:text-savdo"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-sm text-slate-700 hover:text-savdo"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="mt-5 flex gap-3">
              {[
                { href: siteConfig.social.telegram, label: 'Telegram', path: 'M11.9 2C6.4 2 2 6.4 2 12c0 5.5 4.4 10 9.9 10s9.9-4.5 9.9-10C21.8 6.4 17.4 2 11.9 2zm4.6 6.8l-1.5 7.4c-.1.5-.4.7-.8.4l-2.3-1.7-1.1 1.1c-.1.1-.2.2-.5.2l.2-2.5 4.5-4.1c.2-.2 0-.3-.3-.1L8.1 13l-2.4-.8c-.5-.2-.5-.5.1-.8l9.3-3.6c.4-.2.8.1.7.8z' },
                { href: siteConfig.social.instagram, label: 'Instagram', path: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM17.5 6a1 1 0 100 2 1 1 0 000-2z' },
                { href: siteConfig.social.facebook, label: 'Facebook', path: 'M13 22v-8h3l.5-4H13V7.5c0-1 .3-1.7 1.8-1.7H17V2.2C16.7 2.1 15.4 2 14 2c-3 0-5 1.8-5 5.1V10H6v4h3v8h4z' },
                { href: siteConfig.social.youtube, label: 'YouTube', path: 'M22 12s0-3.3-.4-4.9c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.3c-.9.2-1.6.9-1.8 1.8C2 8.7 2 12 2 12s0 3.3.4 4.9c.2.9.9 1.6 1.8 1.8 1.6.3 7.8.3 7.8.3s6.2 0 7.8-.3c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.9.4-4.9zM10 15.5v-7l6 3.5-6 3.5z' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-savdo hover:text-savdo"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.group}>
              <div className="font-display text-sm font-bold text-slate-900">{col.heading}</div>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-700 transition hover:text-savdo">
                      {t(`links.${col.group}.${item}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-300 pt-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Savdo. {t('rights')}</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-savdo">{t('legal.privacy')}</a>
            <a href="#" className="hover:text-savdo">{t('legal.terms')}</a>
            <a href="#" className="hover:text-savdo">{t('legal.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
