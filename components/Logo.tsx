import Image from 'next/image';

export function Logo({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <span
      aria-label="Refresh"
      className={`inline-flex items-center justify-center rounded-lg bg-lime-300 font-serif text-forest-950 ${className}`}
    >
      <span className="text-lg font-extrabold leading-none">R</span>
    </span>
  );
}

export function LogoWithWordmark({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Logo className="h-8 w-8" />
      <span className="font-serif text-xl font-bold tracking-tight text-lime-300">
        Refresh
      </span>
    </div>
  );
}
