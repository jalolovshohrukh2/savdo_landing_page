export type NavRailItem = {
  id: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href?: string;
};

export type NavRailProps = {
  brand?: React.ReactNode;
  items: NavRailItem[];
  bottomItems?: NavRailItem[];
  collapseSlot?: React.ReactNode;
  className?: string;
};

export function NavRail({
  brand,
  items,
  bottomItems,
  collapseSlot,
  className = '',
}: NavRailProps) {
  return (
    <aside
      className={`flex w-20 flex-col items-center gap-2 rounded-2xl bg-cosy-surface-2 py-3 ${className}`}
    >
      {(brand || collapseSlot) && (
        <div className="mb-2 flex w-full items-center justify-center gap-1.5 px-2">
          {brand && (
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cosy-text text-sm font-bold text-cosy-bg">
              {brand}
            </div>
          )}
          {collapseSlot && <span className="text-cosy-muted-2">{collapseSlot}</span>}
        </div>
      )}
      <nav aria-label="Primary" className="flex flex-1 flex-col gap-1">
        {items.map((it) => (
          <NavRailButton key={it.id} {...it} />
        ))}
      </nav>
      {bottomItems && bottomItems.length > 0 && (
        <div className="mt-auto flex flex-col gap-2">
          {bottomItems.map((it) => (
            <NavRailButton key={it.id} {...it} />
          ))}
        </div>
      )}
    </aside>
  );
}

function NavRailButton({ icon, label, active, href }: NavRailItem) {
  const cls = `flex h-10 w-10 items-center justify-center rounded-lg transition ${
    active
      ? 'bg-cosy-surface-3 text-cosy-text'
      : 'text-cosy-muted hover:bg-cosy-surface hover:text-cosy-text'
  }`;
  if (href) {
    return (
      <a href={href} aria-label={label} title={label} className={cls}>
        <span aria-hidden>{icon}</span>
      </a>
    );
  }
  return (
    <button type="button" aria-label={label} title={label} className={cls}>
      <span aria-hidden>{icon}</span>
    </button>
  );
}
