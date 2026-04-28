export type StatCardProps = {
  label: string;
  value: string;
  icon?: React.ReactNode;
  active?: boolean;
  className?: string;
};

export function StatCard({ label, value, icon, active = false, className = '' }: StatCardProps) {
  return (
    <div
      className={`rounded-xl p-4 ${
        active ? 'bg-cosy-text text-cosy-bg' : 'bg-cosy-surface text-cosy-text'
      } ${className}`}
    >
      {icon && (
        <span
          className={`mb-6 inline-flex h-9 w-9 items-center justify-center rounded-full ${
            active ? 'bg-cosy-bg/10 text-cosy-bg' : 'bg-cosy-bg text-cosy-text'
          }`}
        >
          {icon}
        </span>
      )}
      <p className={`text-xs ${active ? 'text-cosy-bg/60' : 'text-cosy-muted-2'}`}>{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
  );
}
