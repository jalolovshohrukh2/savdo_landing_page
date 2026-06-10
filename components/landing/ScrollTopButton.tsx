'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@/components/refresh/Icon';

/**
 * Floating back-to-top button. Fades in once the page is scrolled past a
 * threshold and smooth-scrolls to the top on click. Fixed to the bottom-right.
 */
export function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Наверх"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-refresh-line bg-refresh-surface/90 text-refresh-text backdrop-blur-md transition-all duration-300 refresh-shadow-soft hover:bg-refresh-surface-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-refresh-text focus-visible:ring-offset-2 focus-visible:ring-offset-refresh-bg ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <Icon name="arrow-up" size={18} />
    </button>
  );
}
