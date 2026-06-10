'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Button } from '@/components/refresh/Button';
import { Icon } from '@/components/refresh/Icon';
import { LanguagePicker } from '@/components/refresh/LanguagePicker';
import { locales, localeNames, type Locale } from '@/i18n.config';
import { RefreshLogo } from './RefreshLogo';

export function SiteHeader() {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const homeBase = `/${locale}`;
  const isHome = pathname === homeBase || pathname === `${homeBase}/`;
  const anchor = (hash: string) => (isHome ? hash : `${homeBase}${hash}`);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: anchor('#features'), label: t('features') },
    { href: `${homeBase}/solutions`, label: t('solutions') },
    { href: anchor('#pricing'), label: t('pricing') },
  ];

  const langOptions = locales.map((code) => ({ value: code, label: localeNames[code] }));

  const switchLocale = (next: string) => {
    const rest = pathname.replace(new RegExp(`^/(${locales.join('|')})`), '') || '/';
    router.push(`/${next}${rest === '/' ? '' : rest}`);
  };

  // On the home page, clicking the logo smooth-scrolls to the top instead of
  // doing an instant same-route navigation.
  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 pt-2 transition-colors duration-300 lg:bg-transparent lg:pt-5 ${
        scrolled
          ? 'border-b border-refresh-line bg-refresh-bg/90 backdrop-blur-md lg:border-transparent lg:backdrop-blur-none'
          : 'bg-transparent'
      }`}
    >
      <div className="container-refresh flex h-16 items-center justify-between lg:justify-center">
        {/* Mobile: logo */}
        <Link href={homeBase} onClick={handleLogoClick} className="transition hover:opacity-80 lg:hidden">
          <RefreshLogo className="h-7 w-auto" />
        </Link>

        {/* Desktop: single centered capsule with everything inside */}
        <div className="hidden items-center gap-1.5 rounded-full border border-refresh-line bg-refresh-surface/80 py-1.5 pl-4 pr-1.5 backdrop-blur-md refresh-shadow-soft lg:flex">
          <Link href={homeBase} onClick={handleLogoClick} className="mr-1 transition hover:opacity-80" aria-label="Refresh">
            <RefreshLogo className="h-6 w-auto" />
          </Link>

          <nav className="flex items-center gap-0.5" aria-label="Primary">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-refresh-muted transition hover:bg-refresh-surface-3 hover:text-refresh-text"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <span aria-hidden className="mx-1 h-5 w-px bg-refresh-surface-3" />

          <div className="w-[128px] [&_[aria-haspopup]]:!rounded-full">
            <LanguagePicker
              value={locale}
              options={langOptions}
              onChange={switchLocale}
              size="md"
              placement="bottom-end"
              ariaLabel="Язык"
            />
          </div>

          <Link href={`${homeBase}/demo`}>
            <Button
              variant="primary"
              size="md"
              className="!rounded-full !px-4 !py-2 !text-sm"
            >
              {t('tryFree')}
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={mobileOpen}
          className="inline-flex items-center justify-center rounded-lg border border-refresh-line bg-refresh-surface p-2 text-refresh-text transition hover:bg-refresh-surface-3 lg:hidden"
        >
          <Icon name={mobileOpen ? 'x' : 'menu'} size={20} />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-refresh-line bg-refresh-bg lg:hidden">
          <nav className="container-refresh flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-refresh-text transition hover:bg-refresh-surface"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 w-full">
              <LanguagePicker
                value={locale}
                options={langOptions}
                onChange={switchLocale}
                size="md"
                ariaLabel="Язык"
              />
            </div>
            <Link href={`${homeBase}/demo`} className="mt-2">
              <Button variant="primary" size="md" fullWidth>
                {t('tryFree')}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
