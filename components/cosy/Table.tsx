/* === Table primitives ================================================== */

export function Table({
  className = '',
  children,
  ...rest
}: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <table className={`w-full border-collapse text-sm ${className}`} {...rest}>
      {children}
    </table>
  );
}

export function THead({ children }: { children: React.ReactNode }) {
  return <thead>{children}</thead>;
}

export function TBody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>;
}

export function Tr({
  className = '',
  children,
  ...rest
}: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr className={`border-b border-cosy-line last:border-b-0 ${className}`} {...rest}>
      {children}
    </tr>
  );
}

export function Th({
  align = 'left',
  className = '',
  children,
  ...rest
}: React.ThHTMLAttributes<HTMLTableCellElement> & { align?: 'left' | 'right' | 'center' }) {
  const alignClass = align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : 'text-left';
  return (
    <th
      className={`px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-cosy-muted-2 ${alignClass} ${className}`}
      {...rest}
    >
      {children}
    </th>
  );
}

export function Td({
  align = 'left',
  className = '',
  children,
  ...rest
}: React.TdHTMLAttributes<HTMLTableCellElement> & { align?: 'left' | 'right' | 'center' }) {
  const alignClass = align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : 'text-left';
  return (
    <td className={`px-3 py-2.5 text-cosy-text ${alignClass} ${className}`} {...rest}>
      {children}
    </td>
  );
}

/* === OrderTable (composed example) ===================================== */

export type OrderTableLine = {
  qty: number;
  name: string;
  price: string;
};

export type OrderTableProps = {
  tableLabel: string;
  orderNumber: string;
  lines: OrderTableLine[];
  subtotal: string;
  onPay?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  className?: string;
};

export function OrderTable({
  tableLabel,
  orderNumber,
  lines,
  subtotal,
  onPay,
  onEdit,
  onDelete,
  className = '',
}: OrderTableProps) {
  return (
    <div className={`rounded-xl bg-cosy-surface p-4 ${className}`}>
      <header className="mb-3 flex items-center justify-between">
        <p className="text-base font-bold text-cosy-text">
          Table <span className="text-cosy-blue">{tableLabel}</span>
        </p>
        <p className="text-xs text-cosy-muted-2">Order {orderNumber}</p>
      </header>

      <Table>
        <THead>
          <Tr>
            <Th>QT</Th>
            <Th>Items</Th>
            <Th align="right">Price</Th>
          </Tr>
        </THead>
        <TBody>
          {lines.map((l, i) => (
            <Tr key={i} className="border-b-cosy-bg/40">
              <Td className="w-8 text-cosy-muted-2 tabular-nums">{l.qty}</Td>
              <Td>{l.name}</Td>
              <Td align="right" className="font-semibold tabular-nums">
                {l.price}
              </Td>
            </Tr>
          ))}
        </TBody>
      </Table>

      <div className="mt-3 flex items-center justify-between border-t border-cosy-bg pt-3">
        <p className="text-xs text-cosy-muted-2">Subtotal</p>
        <p className="text-base font-bold text-cosy-text tabular-nums">{subtotal}</p>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={onDelete}
          aria-label="Delete order"
          className="flex h-8 w-8 items-center justify-center rounded-md border border-cosy-surface-3 text-cosy-muted-2 transition hover:border-cosy-pink hover:text-cosy-pink"
        >
          ⌫
        </button>
        <button
          type="button"
          onClick={onEdit}
          aria-label="Edit order"
          className="flex h-8 w-8 items-center justify-center rounded-md border border-cosy-surface-3 text-cosy-muted-2 transition hover:border-cosy-text hover:text-cosy-text"
        >
          ✎
        </button>
        <button
          type="button"
          onClick={onPay}
          className="ml-auto rounded-md bg-cosy-text px-4 py-1.5 text-xs font-semibold text-cosy-bg transition hover:bg-[#e8e8e8]"
        >
          Payment
        </button>
      </div>
    </div>
  );
}
