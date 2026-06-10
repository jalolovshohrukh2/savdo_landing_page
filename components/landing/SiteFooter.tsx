import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Icon } from '@/components/refresh/Icon';
import { siteConfig } from '@/i18n.config';
import { RefreshLogo } from './RefreshLogo';
import { TelegramIcon, InstagramIcon, WhatsAppIcon, FacebookIcon } from './SocialIcons';

/** Store types we actually have pages for (subset of lib/solutions SOLUTIONS). */
const SOLUTION_LINKS = ['clothing', 'shoes', 'cosmetics', 'electronics', 'grocery'] as const;

const socials: { Glyph: (p: { className?: string }) => JSX.Element; href: string; label: string }[] = [
  { Glyph: TelegramIcon, href: siteConfig.social.telegram, label: 'Telegram' },
  { Glyph: InstagramIcon, href: siteConfig.social.instagram, label: 'Instagram' },
  { Glyph: WhatsAppIcon, href: siteConfig.social.whatsapp, label: 'WhatsApp' },
  { Glyph: FacebookIcon, href: siteConfig.social.facebook, label: 'Facebook' },
];

const chips = [
  { icon: 'wifi-off', key: 'offline' },
  { icon: 'banknote', key: 'currencies' },
  { icon: 'headphones', key: 'support' },
] as const;

export function SiteFooter() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const th = useTranslations('hero');
  const locale = useLocale();

  const productLinks = [
    { label: tn('features'), href: `/${locale}#features` },
    { label: tn('pricing'), href: `/${locale}#pricing` },
    { label: tn('solutions'), href: `/${locale}/solutions` },
    { label: tn('tryFree'), href: `/${locale}/demo` },
  ];

  return (
    <footer className="border-t border-refresh-line bg-refresh-bg">
      <div className="container-refresh py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_3fr]">
          <div>
            <RefreshLogo className="h-8 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-refresh-muted">
              {t('tagline')}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c.key}
                  className="inline-flex items-center gap-1.5 rounded-full border border-refresh-line bg-refresh-surface-2 px-2.5 py-1 text-[11px] font-medium text-refresh-muted"
                >
                  <span className="text-refresh-sage">
                    <Icon name={c.icon} size={12} />
                  </span>
                  {th(`chips.${c.key}`)}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-2 text-sm">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 text-refresh-text transition hover:text-refresh-sage"
              >
                <Icon name="phone" size={14} className="text-refresh-muted-2" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-refresh-text transition hover:text-refresh-sage"
              >
                <Icon name="mail" size={14} className="text-refresh-muted-2" />
                {siteConfig.email}
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-refresh-line bg-refresh-surface-2 text-refresh-muted-2 transition-colors duration-150 hover:border-refresh-surface-3 hover:text-refresh-text"
                >
                  <s.Glyph className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-refresh-muted-2">
                {t('cols.solutions')}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {SOLUTION_LINKS.map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/${locale}/solutions/${slug}`}
                      className="text-sm text-refresh-muted transition hover:text-refresh-text"
                    >
                      {t(`links.solutions.${slug}` as never)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-refresh-muted-2">
                {t('cols.product')}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {productLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-refresh-muted transition hover:text-refresh-text"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-refresh-line pt-8 text-xs text-refresh-muted-2">
          <p>
            © {new Date().getFullYear()} Refresh. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
