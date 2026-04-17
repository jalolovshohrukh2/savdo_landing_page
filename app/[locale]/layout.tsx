import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter, Manrope } from 'next/font/google';
import { locales, type Locale } from '@/i18n.config';
import { buildMetadata, organizationJsonLd, softwareJsonLd } from '@/lib/seo';
import '../globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
  weight: ['700', '800'],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale });
  return buildMetadata(locale, t as unknown as (key: string) => string);
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  if (!locales.includes(locale)) notFound();
  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations({ locale });

  return (
    <html lang={locale} className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(softwareJsonLd(t as unknown as (key: string) => string)),
            }}
          />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
