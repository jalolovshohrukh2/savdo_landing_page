import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/refresh/Button';
import { Icon } from '@/components/refresh/Icon';

export function CtaBanner() {
  const t = useTranslations('finalCta');
  const tn = useTranslations('nav');
  const locale = useLocale();

  return (
    <section className="py-12 sm:py-28">
      <div className="container-refresh">
        <div className="relative overflow-hidden rounded-3xl border border-refresh-line bg-refresh-surface p-8 text-center sm:p-14">
          <div
            aria-hidden
            className="refresh-glow"
            style={{
              top: '-120px',
              left: '50%',
              width: 420,
              height: 360,
              transform: 'translateX(-50%)',
              background: 'rgb(194 219 233 / 0.10)',
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-refresh-text sm:text-4xl">
              {t('title')}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-refresh-muted sm:text-lg">
              {t('subtitle')}
            </p>
            <div className="mt-7 flex justify-center">
              <Link href={`/${locale}/demo`}>
                <Button
                  variant="primary"
                  size="lg"
                  iconRight={<Icon name="arrow-right" size={16} />}
                >
                  {tn('tryFree')}
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-xs text-refresh-muted-2">{t('note')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
