export type HeroProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
  illustration?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
};

export function Hero({ eyebrow, title, lede, illustration, actions, className = '' }: HeroProps) {
  return (
    <section className={`relative ${className}`}>
      <div className="container-savdo grid gap-10 py-14 md:grid-cols-[1.2fr_1fr] md:py-16">
        <div>
          {eyebrow && <span className="cosy-eyebrow">{eyebrow}</span>}
          <h1 className={`text-4xl font-bold leading-[1.05] text-cosy-text sm:text-5xl ${eyebrow ? 'mt-3' : ''}`}>
            {title}
          </h1>
          {lede && (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-cosy-muted sm:text-lg">
              {lede}
            </p>
          )}
          {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
        </div>

        {illustration && (
          <div className="relative h-48 overflow-hidden rounded-xl bg-cosy-surface md:h-auto">
            <div className="relative flex h-full items-center justify-center gap-6 text-5xl">
              {illustration}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
