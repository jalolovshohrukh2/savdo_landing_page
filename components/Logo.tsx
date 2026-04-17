import Image from 'next/image';

export function Logo({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <Image
      src="/brand/mini-logo.svg"
      alt="Savdo"
      width={36}
      height={40}
      className={className}
      priority
    />
  );
}

export function LogoWithWordmark({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Logo className="h-8 w-auto" />
      <span className="font-display text-xl font-extrabold tracking-tight text-slate-900">
        Savdo
      </span>
    </div>
  );
}
