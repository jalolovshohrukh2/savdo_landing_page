export type KbdProps = {
  children: React.ReactNode;
  className?: string;
};

export function Kbd({ children, className = '' }: KbdProps) {
  return (
    <kbd
      className={`inline-flex h-5 min-w-[20px] items-center justify-center rounded border border-cosy-surface-3 bg-cosy-surface px-1.5 font-mono text-[10px] font-medium text-cosy-muted-2 ${className}`}
    >
      {children}
    </kbd>
  );
}
