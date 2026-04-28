'use client';

type AccentTone = 'lavender' | 'sage' | 'blue' | 'pink' | 'periwinkle';

const accentTextMap: Record<AccentTone, string> = {
  lavender: 'text-cosy-lavender',
  sage: 'text-cosy-sage',
  blue: 'text-cosy-blue',
  pink: 'text-cosy-pink',
  periwinkle: 'text-cosy-periwinkle',
};

const accentBorderMap: Record<AccentTone, string> = {
  lavender: 'border-cosy-lavender',
  sage: 'border-cosy-sage',
  blue: 'border-cosy-blue',
  pink: 'border-cosy-pink',
  periwinkle: 'border-cosy-periwinkle',
};

export type ProductCardProps = {
  name: string;
  price: string;
  flow?: string;
  qty?: number;
  accent?: AccentTone;
  onIncrement?: () => void;
  onDecrement?: () => void;
  className?: string;
};

export function ProductCard({
  name,
  price,
  flow = 'Orders → Kitchen',
  qty = 0,
  accent = 'lavender',
  onIncrement,
  onDecrement,
  className = '',
}: ProductCardProps) {
  const inCart = qty > 0;
  return (
    <div
      className={`flex flex-col gap-3 rounded-xl bg-cosy-surface p-3.5 border-[1.5px] transition ${
        inCart ? accentBorderMap[accent] : 'border-transparent hover:border-cosy-surface-3'
      } ${className}`}
    >
      <p className={`text-[11px] font-medium ${inCart ? accentTextMap[accent] : 'text-cosy-muted-2'}`}>
        {flow}
      </p>
      <div>
        <p className="text-sm font-semibold text-cosy-text">{name}</p>
        <p className="mt-0.5 text-[13px] text-cosy-muted-2">{price}</p>
      </div>
      <div className="mt-1 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={onDecrement}
          aria-label="Decrease"
          className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-cosy-surface-3 text-cosy-muted-2 transition hover:border-cosy-text hover:text-cosy-text"
        >
          −
        </button>
        <span className="text-sm font-semibold text-cosy-text tabular-nums">{qty}</span>
        <button
          type="button"
          onClick={onIncrement}
          aria-label="Increase"
          className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-cosy-text text-cosy-text transition hover:bg-cosy-text hover:text-cosy-bg"
        >
          +
        </button>
      </div>
    </div>
  );
}
