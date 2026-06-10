import { useTranslations } from 'next-intl';
import { Icon } from '@/components/refresh/Icon';
import { siteConfig } from '@/i18n.config';

export function AnnouncementBar() {
  const t = useTranslations('topbar');

  return (
    <div className="hidden border-b border-refresh-line bg-refresh-surface-2 sm:block">
      <div className="container-refresh flex h-9 items-center justify-between text-xs text-refresh-muted">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-refresh-sage refresh-pulse" />
          <span>
            {t('contact')}{' '}
            <a href={siteConfig.phoneHref} className="font-medium text-refresh-text transition hover:text-refresh-sage">
              {siteConfig.phone}
            </a>
          </span>
        </div>
        <a
          href={siteConfig.appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-refresh-muted transition hover:text-refresh-text"
        >
          {t('signIn')}
          <Icon name="arrow-up-right" size={12} />
        </a>
      </div>
    </div>
  );
}
