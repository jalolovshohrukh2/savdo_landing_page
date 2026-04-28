export type ChipProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  iconLeft?: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
  removeLabel?: string;
};

export function Chip({
  active = false,
  iconLeft,
  removable,
  onRemove,
  removeLabel = 'Remove',
  className = '',
  children,
  type = 'button',
  ...rest
}: ChipProps) {
  const showRemove = removable || !!onRemove;
  return (
    <button
      type={type}
      data-active={active}
      className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
        active
          ? 'bg-cosy-surface text-cosy-text ring-2 ring-cosy-text'
          : 'bg-cosy-surface text-cosy-muted hover:bg-cosy-surface-3 hover:text-cosy-text'
      } ${className}`}
      {...rest}
    >
      {iconLeft && <span aria-hidden>{iconLeft}</span>}
      <span>{children}</span>
      {showRemove && (onRemove ? (
        <span
          role="button"
          tabIndex={0}
          aria-label={removeLabel}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onRemove();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onRemove();
            }
          }}
          className="ml-0.5 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full text-cosy-muted-2 hover:text-cosy-text"
        >
          ×
        </span>
      ) : (
        <span
          aria-hidden
          className="ml-0.5 flex h-4 w-4 items-center justify-center rounded-full text-cosy-muted-2"
        >
          ×
        </span>
      ))}
    </button>
  );
}
