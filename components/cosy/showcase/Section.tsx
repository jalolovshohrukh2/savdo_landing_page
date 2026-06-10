type SectionProps = {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-cosy-line py-12 first:pt-4">
      <header className="mb-6">
        <a
          href={`#${id}`}
          className="cosy-eyebrow inline-flex items-center gap-1 hover:opacity-80"
        >
          <span aria-hidden>#</span>
          {id}
        </a>
        <h2 className="mt-1.5 text-3xl font-bold text-cosy-text">{title}</h2>
        {description && (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cosy-muted">
            {description}
          </p>
        )}
      </header>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

type ExampleProps = {
  label?: string;
  children: React.ReactNode;
};

export function Example({ label, children }: ExampleProps) {
  return (
    <div>
      {label && (
        <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-wider text-cosy-muted-2">
          {label}
        </p>
      )}
      <div className="rounded-xl bg-cosy-surface-2 border border-cosy-line p-6">
        {children}
      </div>
    </div>
  );
}

export function Row({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex flex-wrap items-center gap-4 ${className}`}>{children}</div>;
}
