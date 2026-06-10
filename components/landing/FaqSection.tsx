'use client';

import { useTranslations } from 'next-intl';
import { Accordion } from '@/components/refresh/Accordion';

const ITEM_IDS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const;

export function FaqSection() {
  const t = useTranslations('faq');

  const items = ITEM_IDS.map((id) => ({
    id,
    title: t(`items.${id}.q`),
    children: <p>{t(`items.${id}.a`)}</p>,
  }));

  return (
    <section className="border-t border-refresh-line bg-refresh-surface-2/40 py-12 sm:py-24">
      <div className="container-refresh">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="refresh-eyebrow">{t('eyebrow')}</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-refresh-text sm:text-4xl">
              {t('title')}
            </h2>
          </div>
          <div className="mt-10">
            <Accordion items={items} type="single" defaultOpen={['q1']} variant="card" />
          </div>
        </div>
      </div>
    </section>
  );
}
