export const locales = ['tj', 'ru', 'en', 'uz'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ru';

export const localeNames: Record<Locale, string> = {
  tj: 'Тоҷикӣ',
  ru: 'Русский',
  en: 'English',
  uz: 'Oʻzbekcha',
};

export const siteConfig = {
  name: 'Savdo',
  url: 'https://savdo.io',
  appUrl: 'https://savdo-pos-web.vercel.app',
  phone: '+992 000 100 010',
  phoneHref: 'tel:+992000100010',
  email: 'hello@savdo.io',
  social: {
    telegram: 'https://t.me/savdo',
    instagram: 'https://instagram.com/savdo',
    facebook: 'https://facebook.com/savdo',
    youtube: 'https://youtube.com/@savdo',
  },
} as const;
