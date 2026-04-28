type Tone = 'sage' | 'lavender' | 'blue' | 'pink' | 'periwinkle' | 'surface';

const toneMap: Record<Tone, string> = {
  sage: 'bg-cosy-sage text-cosy-bg',
  lavender: 'bg-cosy-lavender text-cosy-bg',
  blue: 'bg-cosy-blue text-cosy-bg',
  pink: 'bg-cosy-pink text-cosy-bg',
  periwinkle: 'bg-cosy-periwinkle text-cosy-bg',
  surface: 'bg-cosy-surface text-cosy-text',
};

export type CategoryCardProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  name: string;
  count?: number;
  icon?: React.ReactNode;
  tone?: Tone;
  active?: boolean;
};

export function CategoryCard({
  name,
  count,
  icon,
  tone = 'surface',
  active = false,
  className = '',
  type = 'button',
  ...rest
}: CategoryCardProps) {
  return (
    <button
      type={type}
      className={`group flex min-h-[110px] w-full flex-col justify-between rounded-xl p-4 text-left transition hover:-translate-y-0.5 hover:shadow-lg ${
        toneMap[tone]
      } ${active ? 'ring-2 ring-cosy-text ring-offset-2 ring-offset-cosy-bg' : ''} ${className}`}
      {...rest}
    >
      {icon && <span className="text-xl opacity-70" aria-hidden>{icon}</span>}
      <div>
        <p className="text-base font-semibold">{name}</p>
        {count !== undefined && (
          <p className={`mt-0.5 text-xs ${tone === 'surface' ? 'text-cosy-muted-2' : 'text-cosy-bg/60'}`}>
            {count} items
          </p>
        )}
      </div>
    </button>
  );
}
