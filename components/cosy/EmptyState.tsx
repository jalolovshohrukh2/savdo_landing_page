export type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
};

export function EmptyState({ title, description, icon, action, className = '' }: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-cosy-surface-3 bg-cosy-surface-2/40 px-6 py-10 text-center ${className}`}
    >
      {icon && <div className="mb-1 text-cosy-muted-2">{icon}</div>}
      <p className="text-sm font-medium text-cosy-muted">{title}</p>
      {description && (
        <p className="max-w-sm text-xs leading-relaxed text-cosy-muted-2">{description}</p>
      )}
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}
