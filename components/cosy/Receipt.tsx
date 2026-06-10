const ZIGZAG_TEETH = 24;

function buildZigzagClipPath(teeth: number, depthPx: number): string {
  const step = 100 / teeth;
  const points: string[] = [];
  // Top edge zigzag
  for (let i = 0; i <= teeth; i++) {
    const x = (i * step).toFixed(2);
    const y = i % 2 === 0 ? `${depthPx}px` : '0';
    points.push(`${x}% ${y}`);
  }
  // Bottom edge zigzag (right-to-left)
  for (let i = teeth; i >= 0; i--) {
    const x = (i * step).toFixed(2);
    const y = i % 2 === 0 ? `calc(100% - ${depthPx}px)` : '100%';
    points.push(`${x}% ${y}`);
  }
  return `polygon(${points.join(', ')})`;
}

const RECEIPT_CLIP_PATH = buildZigzagClipPath(ZIGZAG_TEETH, 6);

export type ReceiptProps = {
  children: React.ReactNode;
  className?: string;
};

export function Receipt({ children, className = '' }: ReceiptProps) {
  return (
    <div
      className={`bg-white px-5 py-7 font-mono text-sm text-[#111315] ${className}`}
      style={{ clipPath: RECEIPT_CLIP_PATH }}
    >
      {children}
    </div>
  );
}

export type ReceiptLineProps = {
  label: React.ReactNode;
  value?: React.ReactNode;
  bold?: boolean;
};

export function ReceiptLine({ label, value, bold = false }: ReceiptLineProps) {
  if (value == null) {
    return (
      <p className={bold ? 'font-bold' : ''}>
        <span className="font-bold">{label}</span>
      </p>
    );
  }
  return (
    <div className="flex items-baseline gap-2">
      <span className={`flex-1 ${bold ? 'font-bold' : ''}`}>{label}</span>
      <span
        aria-hidden
        className="flex-1 self-end border-b border-dotted border-[#111315]/40"
      />
      <span className={`tabular-nums ${bold ? 'font-bold' : ''}`}>{value}</span>
    </div>
  );
}

export function ReceiptDivider() {
  return <div className="my-2 border-t border-[#111315]" />;
}

export type ReceiptItemProps = {
  index: number;
  name: string;
  qty: number | string;
  unitPrice: string;
  total: string;
};

export function ReceiptItem({ index, name, qty, unitPrice, total }: ReceiptItemProps) {
  return (
    <div className="space-y-0.5">
      <p className="font-bold">
        {index}. {name}
      </p>
      <ReceiptLine
        label={
          <span className="text-[#111315]/70">
            {qty} × {unitPrice}
          </span>
        }
        value={total}
        bold
      />
    </div>
  );
}
