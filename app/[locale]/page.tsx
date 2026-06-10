import { unstable_setRequestLocale } from 'next-intl/server';
import { SiteHeader } from '@/components/landing/SiteHeader';
import { MarketingHero } from '@/components/landing/MarketingHero';
import { TrustStrip } from '@/components/landing/TrustStrip';
import { FeaturesGrid } from '@/components/landing/FeaturesGrid';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { PricingGrid } from '@/components/landing/PricingGrid';
import { FaqSection } from '@/components/landing/FaqSection';
import { CtaBanner } from '@/components/landing/CtaBanner';
import { SiteFooter } from '@/components/landing/SiteFooter';
import type { Locale } from '@/i18n.config';

export default function HomePage({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <main>
        <MarketingHero />
        <TrustStrip />
        <FeaturesGrid />
        <HowItWorks />
        <PricingGrid />
        <FaqSection />
        <CtaBanner />
      </main>
      <SiteFooter />
    </>
  );
}
