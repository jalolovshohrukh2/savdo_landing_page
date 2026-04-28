export type CountryKey = 'tj' | 'uz' | 'kz' | 'kg' | 'us';

const LOCALE_FALLBACK: Record<string, CountryKey> = {
  tj: 'tj',
  uz: 'uz',
  ru: 'kz', // Russian-language default market
  en: 'us', // English = international → USD
};

const CODE_TO_KEY: Record<string, CountryKey> = {
  TJ: 'tj',
  UZ: 'uz',
  KZ: 'kz',
  KG: 'kg',
};

/** Read the `savdo-country` cookie the middleware sets (or fall back to locale). */
export function readCountryCookie(): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/(?:^|;\s*)savdo-country=([^;]*)/);
  return match ? decodeURIComponent(match[1]).toUpperCase() : null;
}

/** Resolve the country to show pricing for, based on IP → locale fallback. */
export function resolveCountry(locale: string): CountryKey {
  const code = readCountryCookie();
  if (code && CODE_TO_KEY[code]) return CODE_TO_KEY[code];
  return LOCALE_FALLBACK[locale] ?? 'uz';
}

/** Full country name (English) used for the "Showing prices for X" line. */
export const COUNTRY_NAME: Record<CountryKey, string> = {
  tj: 'Tajikistan',
  uz: 'Uzbekistan',
  kz: 'Kazakhstan',
  kg: 'Kyrgyzstan',
  us: 'International (USD)',
};

export const COUNTRY_FLAG: Record<CountryKey, string> = {
  tj: '🇹🇯',
  uz: '🇺🇿',
  kz: '🇰🇿',
  kg: '🇰🇬',
  us: '🌐',
};
