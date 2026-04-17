import { unstable_setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import type { Locale } from '@/i18n.config';

export default function HomePage({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
