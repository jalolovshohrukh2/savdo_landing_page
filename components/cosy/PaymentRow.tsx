import { Kbd } from './Kbd';

export type PaymentRowProps = {
  icon: React.ReactNode;
  name: string;
  shortcut?: string;
  onAdd?: () => void;
  className?: string;
};

export function PaymentRow({
  icon,
  name,
  shortcut,
  onAdd,
  className = '',
}: PaymentRowProps) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl bg-cosy-surface px-3 py-2.5 ${className}`}
    >
      <span
        aria-hidden
        className="flex h-7 w-9 shrink-0 items-center justify-center rounded-md bg-cosy-surface-3 text-cosy-blue"
      >
        {icon}
      </span>
      <span className="flex-1 text-sm font-medium text-cosy-text">{name}</span>
      {shortcut && <Kbd>{shortcut}</Kbd>}
      <button
        type="button"
        onClick={onAdd}
        aria-label={`Add ${name}`}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-lg text-cosy-blue transition hover:bg-cosy-surface-3"
      >
        +
      </button>
    </div>
  );
}
