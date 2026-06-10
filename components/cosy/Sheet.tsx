'use client';

import { useEffect, useRef, useState } from 'react';

type Side = 'left' | 'right' | 'top' | 'bottom';

type SheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  side: Side;
  size?: string;
  children: React.ReactNode;
  ariaLabel: string;
  className?: string;
};

const sideDefaults: Record<Side, { size: string; edge: string; rounded: string; closed: string }> = {
  left: {
    size: 'w-80 max-w-[85vw]',
    edge: 'top-0 left-0 h-full',
    rounded: 'rounded-r-2xl',
    closed: '-translate-x-full',
  },
  right: {
    size: 'w-96 max-w-[90vw]',
    edge: 'top-0 right-0 h-full',
    rounded: 'rounded-l-2xl',
    closed: 'translate-x-full',
  },
  top: {
    size: 'h-72 max-h-[60vh]',
    edge: 'top-0 left-0 right-0 w-full',
    rounded: 'rounded-b-2xl',
    closed: '-translate-y-full',
  },
  bottom: {
    size: 'h-72 max-h-[60vh]',
    edge: 'bottom-0 left-0 right-0 w-full',
    rounded: 'rounded-t-2xl',
    closed: 'translate-y-full',
  },
};

export function Sheet({
  open,
  onOpenChange,
  side,
  size,
  children,
  ariaLabel,
  className = '',
}: SheetProps) {
  const [mounted, setMounted] = useState(open);
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);

  // Mount/unmount with transition delay so the close animation can play.
  useEffect(() => {
    if (open) {
      setMounted(true);
      return;
    }
    const t = setTimeout(() => setMounted(false), 220);
    return () => clearTimeout(t);
  }, [open]);

  // ESC + body scroll lock + focus management.
  useEffect(() => {
    if (!open) return;

    lastFocusRef.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false);
    };
    window.addEventListener('keydown', onKey);

    // Move focus into the panel after it has rendered.
    const focusTimer = setTimeout(() => {
      const panel = panelRef.current;
      if (!panel) return;
      const focusable = panel.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      (focusable ?? panel).focus();
    }, 30);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      clearTimeout(focusTimer);
      lastFocusRef.current?.focus?.();
    };
  }, [open, onOpenChange]);

  if (!mounted && !open) return null;

  const cfg = sideDefaults[side];
  const sizeClass = size ?? cfg.size;

  return (
    <div className="fixed inset-0 z-50" aria-hidden={!open}>
      {/* backdrop */}
      <button
        type="button"
        aria-label="Close panel"
        onClick={() => onOpenChange(false)}
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        tabIndex={-1}
        className={`absolute ${cfg.edge} ${sizeClass} ${cfg.rounded} bg-cosy-surface-2 border border-cosy-line cosy-shadow-soft transition-transform duration-200 ease-out outline-none ${
          open ? 'translate-x-0 translate-y-0' : cfg.closed
        } ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
