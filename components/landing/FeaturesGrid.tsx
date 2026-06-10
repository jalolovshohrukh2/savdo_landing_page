import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Icon } from '@/components/refresh/Icon';
import { Tag } from '@/components/refresh/Tag';

type FeatureKey = 'inventory' | 'customers' | 'pos' | 'analytics' | 'marketing' | 'finance';

type FeatureDef = {
  key: FeatureKey;
  icon: string;
  tone: 'sage' | 'lavender' | 'blue' | 'pink' | 'periwinkle';
};

const features: FeatureDef[] = [
  { key: 'inventory', icon: 'package', tone: 'sage' },
  { key: 'pos', icon: 'shopping-cart', tone: 'blue' },
  { key: 'customers', icon: 'users', tone: 'lavender' },
  { key: 'analytics', icon: 'bar-chart-3', tone: 'periwinkle' },
  { key: 'marketing', icon: 'megaphone', tone: 'pink' },
  { key: 'finance', icon: 'wallet', tone: 'sage' },
];

const toneBg: Record<FeatureDef['tone'], string> = {
  sage: 'bg-refresh-sage/15 text-refresh-sage',
  lavender: 'bg-refresh-lavender/15 text-refresh-lavender',
  blue: 'bg-refresh-blue/15 text-refresh-blue',
  pink: 'bg-refresh-pink/15 text-refresh-pink',
  periwinkle: 'bg-refresh-periwinkle/15 text-refresh-periwinkle',
};

export function FeaturesGrid() {
  const t = useTranslations('features');
  const locale = useLocale();

  return (
    <section id="features" className="py-12 sm:py-28">
      <div className="container-refresh">
        <div className="mx-auto max-w-2xl text-center">
          <span className="refresh-eyebrow">{t('eyebrow')}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-refresh-text sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-refresh-muted sm:text-lg">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.key}
              className="group relative flex flex-col gap-4 rounded-2xl border border-refresh-line bg-refresh-surface p-6 transition hover:border-refresh-surface-3 hover:bg-refresh-surface/80"
            >
              <span
                aria-hidden
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${toneBg[f.tone]}`}
              >
                <Icon name={f.icon} size={20} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-refresh-text">
                  {t(`items.${f.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-refresh-muted">
                  {t(`items.${f.key}.description`)}
                </p>
              </div>
              <div className="mt-auto">
                <Tag tone={f.tone}>{t(`items.${f.key}.stat`)}</Tag>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`/${locale}/solutions`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-refresh-sage transition hover:opacity-80"
          >
            {t('more')}
            <Icon name="arrow-right" size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
