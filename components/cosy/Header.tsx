import Link from 'next/link';

export type HeaderProps = {
  brand?: string;
  storeName?: string;
  backHref?: string;
  backLabel?: string;
  rightSlot?: React.ReactNode;
  className?: string;
};

export function Header({
  brand = 'CosyPOS',
  storeName,
  backHref,
  backLabel = '← Back',
  rightSlot,
  className = '',
}: HeaderProps) {
  return (
    <header className={`border-b border-cosy-line bg-cosy-bg ${className}`}>
      <div className="container-savdo flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <span aria-hidden className="text-cosy-text">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="3" width="16" height="3" rx="1" fill="currentColor" />
              <rect x="2" y="9" width="16" height="3" rx="1" fill="currentColor" />
              <rect x="2" y="15" width="16" height="3" rx="1" fill="currentColor" />
            </svg>
          </span>
          <span className="text-base font-bold text-cosy-text">{brand}</span>
          {storeName && (
            <span className="ml-2 hidden rounded-md bg-cosy-surface px-3 py-1 text-xs font-medium text-cosy-muted sm:inline">
              {storeName}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          {rightSlot}
          {backHref && (
            <Link
              href={backHref}
              className="text-sm font-medium text-cosy-muted-2 transition hover:text-cosy-text"
            >
              {backLabel}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
