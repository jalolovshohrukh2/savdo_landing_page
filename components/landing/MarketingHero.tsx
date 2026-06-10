import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/refresh/Button';
import { Icon } from '@/components/refresh/Icon';
import { PhoneShowcase } from './PhoneShowcase';

export function MarketingHero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-20 lg:pt-24">
      {/* Mobile/tablet: faint grid backdrop for the centered layout (hidden on desktop). */}
      <div aria-hidden className="refresh-hero-grid absolute inset-0 lg:hidden" />
      {/* Soft glows */}
      <div
        aria-hidden
        className="refresh-glow"
        style={{ top: '-140px', left: '50%', width: 620, height: 460, transform: 'translateX(-50%)', background: 'rgb(43 182 115 / 0.10)' }}
      />
      <div
        aria-hidden
        className="refresh-glow hidden lg:block"
        style={{ top: '120px', right: '-120px', width: 420, height: 420, background: 'rgb(58 61 64 / 0.45)' }}
      />

      {/* Centered single column on mobile/tablet; left-aligned two columns on desktop. */}
      <div className="container-refresh relative grid items-center gap-12 text-center lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-14 lg:text-left">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="max-w-4xl text-[2.1rem] font-bold leading-[1.08] tracking-tight text-refresh-text sm:text-6xl sm:leading-[1.03] lg:max-w-none lg:text-5xl xl:text-6xl">
            {t('title')}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-refresh-muted sm:text-lg lg:mx-0 lg:max-w-xl">
            {t('subtitle')}
          </p>

          <div className="mt-7 flex items-center justify-center sm:mt-9 lg:justify-start">
            <a href={`/${locale}/demo`}>
              <Button
                variant="primary"
                size="lg"
                iconRight={<Icon name="arrow-right" size={16} />}
                className="whitespace-nowrap !px-4 !py-2.5 !text-sm sm:!px-6 sm:!py-3.5 sm:!text-base"
              >
                {t('ctaPrimary')}
              </Button>
            </a>
          </div>

          <p className="mt-4 text-xs text-refresh-muted-2">{t('ctaNote')}</p>

          {/* Integrations — fills the left column on desktop */}
          <div className="mt-10 hidden w-full lg:block">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-refresh-muted-2">
              {t('integrations')}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Humo', 'Alif', 'Payme', 'Click', '1С'].map((name) => (
                <span
                  key={name}
                  className="rounded-lg border border-refresh-line bg-refresh-surface-2 px-3.5 py-2 text-sm font-medium text-refresh-muted"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full">
          <PhoneShowcase />
        </div>
      </div>
    </section>
  );
}
