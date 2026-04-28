import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './i18n.config';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: true,
});

const SUPPORTED_COUNTRIES = new Set(['UZ', 'KZ', 'KG', 'TJ']);

/** Map IP country → preferred UI locale. Everyone outside our 4 markets → English. */
const COUNTRY_TO_LOCALE: Record<string, 'tj' | 'uz' | 'ru' | 'en'> = {
  TJ: 'tj',
  UZ: 'uz',
  KZ: 'ru', // Russian is the primary business language in Kazakhstan
  KG: 'ru', // Russian is the primary business language in Kyrgyzstan
};

export default function middleware(request: NextRequest) {
  // Detect country from Vercel geo / edge headers (empty locally).
  const raw =
    (request as any).geo?.country ||
    request.headers.get('x-vercel-ip-country') ||
    '';
  const country = raw.toUpperCase();

  // Hint next-intl which locale to use on first-visit redirects.
  // URL-encoded locale wins if the user explicitly clicks a flag.
  // Default = Russian for everyone outside our 4 detected markets.
  const preferredLocale = COUNTRY_TO_LOCALE[country] ?? 'ru';
  const hasNextLocale = request.cookies.has('NEXT_LOCALE');
  if (!hasNextLocale) {
    // Mutate the request so next-intl sees our chosen default.
    request.cookies.set('NEXT_LOCALE', preferredLocale);
  }

  const response = intlMiddleware(request);

  // Cookie the client pricing components read to pick the right currency.
  const resolvedCountry = SUPPORTED_COUNTRIES.has(country) ? country : '';
  response.cookies.set('savdo-country', resolvedCountry, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    sameSite: 'lax',
  });

  // Persist the locale hint so subsequent pages stay consistent.
  if (!hasNextLocale) {
    response.cookies.set('NEXT_LOCALE', preferredLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
