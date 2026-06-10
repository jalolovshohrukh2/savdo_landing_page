import Link from 'next/link';

export type FooterProps = {
  note?: React.ReactNode;
  backHref?: string;
  backLabel?: string;
  className?: string;
};

export function Footer({
  note = 'Cosy POS theme · Savdo prototype',
  backHref,
  backLabel = '← Back to Savdo home',
  className = '',
}: FooterProps) {
  return (
    <footer className={`border-t border-cosy-line bg-cosy-bg ${className}`}>
      <div className="container-savdo flex flex-col items-start justify-between gap-2 py-8 text-sm text-cosy-muted-2 sm:flex-row sm:items-center">
        <p>{note}</p>
        {backHref && (
          <Link
            href={backHref}
            className="font-medium text-cosy-muted transition hover:text-cosy-text"
          >
            {backLabel}
          </Link>
        )}
      </div>
    </footer>
  );
}
