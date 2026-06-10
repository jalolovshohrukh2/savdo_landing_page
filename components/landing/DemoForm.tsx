'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/refresh/Button';
import { Icon } from '@/components/refresh/Icon';
import {
  Input,
  PhoneInput,
  Select,
  DEFAULT_PHONE_COUNTRIES,
  type PhoneCountry,
} from '@/components/refresh/Form';

const STORE_TYPES = [
  'clothing',
  'shoes',
  'grocery',
  'electronics',
  'cosmetics',
  'pharmacy',
  'other',
] as const;

export function DemoForm() {
  const t = useTranslations('demo');

  const [name, setName] = useState('');
  const [country, setCountry] = useState<PhoneCountry>(DEFAULT_PHONE_COUNTRIES[0]);
  const [phone, setPhone] = useState('');
  const [store, setStore] = useState('');
  const [storeType, setStoreType] = useState<string>('');
  const [touched, setTouched] = useState(false);
  const [sent, setSent] = useState(false);

  const nameInvalid = touched && name.trim().length === 0;
  const phoneInvalid = touched && phone.replace(/\D/g, '').length < 5;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (name.trim().length === 0 || phone.replace(/\D/g, '').length < 5) return;
    // No backend wired yet — capture locally and show confirmation.
    setSent(true);
  };

  const typeOptions = STORE_TYPES.map((value) => ({ value, label: t(`types.${value}`) }));

  return (
    <section id="demo" className="relative scroll-mt-24 py-12 sm:py-28">
      <div
        aria-hidden
        className="refresh-glow"
        style={{ top: '40px', left: '50%', width: 520, height: 360, transform: 'translateX(-50%)', background: 'rgb(194 219 233 / 0.08)' }}
      />

      <div className="container-refresh relative">
        <div className="mx-auto max-w-2xl rounded-3xl border border-refresh-line bg-refresh-surface-2 p-6 refresh-shadow-soft sm:p-10">
          {sent ? (
            <div className="flex flex-col items-center py-10 text-center">
              <span
                aria-hidden
                className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-refresh-sage/15 text-refresh-sage"
              >
                <Icon name="check" size={28} />
              </span>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-refresh-text">
                {t('success.title')}
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-refresh-muted">
                {t('success.body')}
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-center text-2xl font-bold leading-tight tracking-tight text-refresh-text sm:text-3xl">
                <span className="text-refresh-blue">{t('accent')}</span> {t('rest')}
              </h2>

              <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
                <Input
                  name="name"
                  label={t('name.label')}
                  placeholder={t('name.placeholder')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  invalid={nameInvalid}
                  hint={nameInvalid ? t('errors.required') : undefined}
                  autoComplete="name"
                />

                <div>
                  <PhoneInput
                    label={t('phone.label')}
                    required
                    countries={DEFAULT_PHONE_COUNTRIES}
                    country={country.code}
                    onCountryChange={setCountry}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {phoneInvalid && (
                    <p className="mt-1 text-[11px] text-refresh-pink">{t('errors.required')}</p>
                  )}
                </div>

                <Input
                  name="store"
                  label={t('store.label')}
                  placeholder={t('store.placeholder')}
                  value={store}
                  onChange={(e) => setStore(e.target.value)}
                  autoComplete="organization"
                />

                <Select
                  label={t('type.label')}
                  placeholder={t('type.placeholder')}
                  options={typeOptions}
                  value={storeType}
                  onChange={setStoreType}
                />

                <Button type="submit" variant="primary" size="lg" fullWidth className="mt-2">
                  {t('submit')}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
