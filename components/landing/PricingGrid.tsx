'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/refresh/Button';
import { Icon } from '@/components/refresh/Icon';
import { Tag } from '@/components/refresh/Tag';
import { SegmentedControl } from '@/components/refresh/SegmentedControl';
import { siteConfig } from '@/i18n.config';

type PlanKey = 'start' | 'pro' | 'business';

const planMeta: Record<
  PlanKey,
  { monthly: number; yearly: number; featured?: boolean; tone: 'sage' | 'blue' | 'periwinkle' }
> = {
  start: { monthly: 290, yearly: 232, tone: 'blue' },
  pro: { monthly: 590, yearly: 472, featured: true, tone: 'sage' },
  business: { monthly: 1190, yearly: 952, tone: 'periwinkle' },
};

const planFeatureKeys = ['f1', 'f2', 'f3', 'f4', 'f5'] as const;

export function PricingGrid() {
  const t = useTranslations('pricing');
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-12 sm:py-28">
      <div className="container-refresh">
        <div className="mx-auto max-w-2xl text-center">
          <span className="refresh-eyebrow">{t('eyebrow')}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-refresh-text sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-refresh-muted">{t('subtitle')}</p>
        </div>

        <div className="mt-10 flex justify-center">
          <SegmentedControl
            value={billing}
            onChange={(v) => setBilling(v as 'monthly' | 'yearly')}
            items={[
              { value: 'monthly', label: t('monthly') },
              { value: 'yearly', label: t('yearly'), icon: <Icon name="sparkles" size={12} /> },
            ]}
            shape="pill"
            size="md"
            ariaLabel="Период оплаты"
          />
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {(['start', 'pro', 'business'] as PlanKey[]).map((key) => {
            const meta = planMeta[key];
            const price = billing === 'monthly' ? meta.monthly : meta.yearly;

            return (
              <article
                key={key}
                className={`relative flex flex-col gap-5 rounded-2xl border p-5 transition sm:gap-6 sm:p-7 ${
                  meta.featured
                    ? 'border-refresh-sage bg-refresh-surface refresh-shadow-soft'
                    : 'border-refresh-line bg-refresh-surface'
                }`}
              >
                {meta.featured && (
                  <span className="absolute -top-3 left-5 sm:left-7">
                    <Tag tone="sage">{t('popular')}</Tag>
                  </span>
                )}

                <div>
                  <h3 className="text-base font-semibold text-refresh-text">
                    {t(`plans.${key}.name`)}
                  </h3>
                  <p className="mt-1 text-sm text-refresh-muted-2">{t(`plans.${key}.tagline`)}</p>
                </div>

                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-bold tabular-nums text-refresh-text sm:text-4xl">
                      {price}
                    </span>
                    <span className="text-sm font-medium text-refresh-muted">TJS / {t('perMonth')}</span>
                  </div>
                  {billing === 'yearly' && (
                    <p className="mt-1 text-xs text-refresh-sage">
                      Экономия {Math.round((1 - meta.yearly / meta.monthly) * 100)}% при оплате за год
                    </p>
                  )}
                </div>

                <ul className="flex flex-1 flex-col gap-2 border-t border-refresh-line pt-4 sm:gap-2.5 sm:pt-5">
                  {planFeatureKeys.map((fkey) => (
                    <li key={fkey} className="flex items-start gap-2.5 text-[13px] text-refresh-text sm:text-sm">
                      <span className="mt-0.5 text-refresh-sage">
                        <Icon name="check" size={16} />
                      </span>
                      <span className="text-refresh-muted">{t(`plans.${key}.features.${fkey}`)}</span>
                    </li>
                  ))}
                </ul>

                <a href={siteConfig.signupFormUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant={meta.featured ? 'primary' : 'secondary'} size="md" fullWidth>
                    {t('cta')}
                  </Button>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
