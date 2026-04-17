'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { locales, localeNames, type Locale } from '@/i18n.config';

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    const segments = pathname.split('/');
    segments[1] = next;
    const newPath = segments.join('/') || `/${next}`;
    startTransition(() => router.replace(newPath));
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 transition hover:border-savdo hover:text-savdo"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="uppercase">{locale}</span>
        <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
          <path d="M6 8.3L1.7 4l1-1L6 6.3 9.3 3l1 1L6 8.3z" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-slate-300 bg-white shadow-card"
        >
          {locales.map((l) => (
            <li key={l}>
              <button
                onClick={() => switchTo(l)}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition hover:bg-savdo-50 ${
                  l === locale ? 'text-savdo font-semibold' : 'text-slate-800'
                }`}
              >
                <span>{localeNames[l]}</span>
                <span className="text-xs uppercase text-slate-500">{l}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
