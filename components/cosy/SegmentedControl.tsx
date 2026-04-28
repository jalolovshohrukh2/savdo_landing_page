export type SegmentedItem<T extends string = string> = {
  value: T;
  label: string;
  count?: number | string;
};

export type SegmentedControlProps<T extends string = string> = {
  items: SegmentedItem<T>[];
  value: T;
  onChange?: (next: T) => void;
  size?: 'sm' | 'md';
  className?: string;
};

export function SegmentedControl<T extends string = string>({
  items,
  value,
  onChange,
  size = 'md',
  className = '',
}: SegmentedControlProps<T>) {
  const padding = size === 'sm' ? 'px-3 py-1' : 'px-4 py-1.5';
  const text = size === 'sm' ? 'text-xs' : 'text-sm';
  return (
    <div
      role="tablist"
      className={`inline-flex flex-wrap gap-1 rounded-xl bg-cosy-surface p-1 ${className}`}
    >
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button
            key={it.value}
            type="button"
            role="tab"
            aria-selected={active}
            data-active={active}
            onClick={() => onChange?.(it.value)}
            className={`inline-flex items-center gap-1.5 rounded-lg font-medium transition ${padding} ${text} ${
              active
                ? 'bg-cosy-surface-3 text-cosy-text'
                : 'text-cosy-muted hover:text-cosy-text'
            }`}
          >
            <span>{it.label}</span>
            {it.count != null && (
              <span className="tabular-nums text-cosy-muted-2">({it.count})</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
