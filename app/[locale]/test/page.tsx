import { unstable_setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n.config';
import { POSCheckout } from '@/components/POSCheckout';

export default function TestPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);
  return <POSCheckout />;
}
