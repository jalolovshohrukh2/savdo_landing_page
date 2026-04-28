type Tone = 'sage' | 'lavender' | 'blue' | 'pink' | 'periwinkle' | 'surface';

const toneMap: Record<Tone, string> = {
  sage: 'bg-cosy-sage text-cosy-bg',
  lavender: 'bg-cosy-lavender text-cosy-bg',
  blue: 'bg-cosy-blue text-cosy-bg',
  pink: 'bg-cosy-pink text-cosy-bg',
  periwinkle: 'bg-cosy-periwinkle text-cosy-bg',
  surface: 'bg-cosy-surface text-cosy-text',
};

export type TagProps = {
  tone?: Tone;
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  className?: string;
};

export function Tag({ tone = 'lavender', children, iconLeft, className = '' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${toneMap[tone]} ${className}`}
    >
      {iconLeft && <span aria-hidden>{iconLeft}</span>}
      {children}
    </span>
  );
}
