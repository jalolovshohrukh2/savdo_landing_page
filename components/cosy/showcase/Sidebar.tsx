export type TocItem = { id: string; label: string };

export function Sidebar({ items }: { items: TocItem[] }) {
  return (
    <aside className="hidden lg:block">
      <nav className="sticky top-20 space-y-1">
        <p className="cosy-eyebrow mb-3">Components</p>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block rounded-md px-2.5 py-1.5 text-sm text-cosy-muted transition hover:bg-cosy-surface hover:text-cosy-text"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
