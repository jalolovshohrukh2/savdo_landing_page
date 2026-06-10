export type PaymentMethodButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  icon: React.ReactNode;
  selected?: boolean;
};

export function PaymentMethodButton({
  label,
  icon,
  selected = false,
  className = '',
  type = 'button',
  ...rest
}: PaymentMethodButtonProps) {
  return (
    <button
      type={type}
      aria-pressed={selected}
      className={`group flex flex-col items-center gap-1.5 ${className}`}
      {...rest}
    >
      <span
        className={`inline-flex h-11 w-11 items-center justify-center rounded-[10px] border transition ${
          selected
            ? 'border-cosy-text bg-cosy-surface text-cosy-text'
            : 'border-cosy-surface text-cosy-muted-2 group-hover:border-cosy-surface-3 group-hover:text-cosy-muted'
        }`}
      >
        {icon}
      </span>
      <span
        className={`text-[10px] font-medium transition ${
          selected ? 'text-cosy-text' : 'text-cosy-muted-2'
        }`}
      >
        {label}
      </span>
    </button>
  );
}

export function PaymentMethodGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex items-start gap-3">{children}</div>;
}
