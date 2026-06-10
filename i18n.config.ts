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
  name: 'Refresh',
  url: 'https://savdo.io',
  appUrl: 'https://savdo-pos-web.vercel.app',
  signupFormUrl: 'https://forms.gle/savdo-signup',
  phone: '+992 985 36 65 60',
  phoneHref: 'tel:+992985366560',
  email: 'info@refresh.tj',
  social: {
    telegram: 'https://t.me/refresh_tj',
    instagram: 'https://instagram.com/refresh.tj',
    whatsapp: 'https://wa.me/992985366560',
    facebook: 'https://facebook.com/refresh.tj',
  },
} as const;
