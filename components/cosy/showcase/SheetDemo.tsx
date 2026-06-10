'use client';

import { useState } from 'react';
import { Sheet } from '../Sheet';
import { Button } from '../Button';
import { Avatar } from '../Avatar';

export function SheetDemo() {
  const [open, setOpen] = useState<null | 'left' | 'right' | 'top' | 'bottom'>(null);
  const close = () => setOpen(null);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <Button variant="secondary" onClick={() => setOpen('left')}>
          ← Open from left
        </Button>
        <Button variant="secondary" onClick={() => setOpen('top')}>
          ↑ Open from top
        </Button>
        <Button variant="secondary" onClick={() => setOpen('bottom')}>
          ↓ Open from bottom
        </Button>
        <Button onClick={() => setOpen('right')}>Open from right →</Button>
      </div>

      <p className="text-sm text-cosy-muted-2">
        One <code className="rounded bg-cosy-surface px-1.5 py-0.5 font-mono text-xs text-cosy-text">{'<Sheet side="…" />'}</code> primitive,
        four edges. Backdrop click and ESC both close. Body scroll is locked while open.
      </p>

      <Sheet open={open === 'left'} onOpenChange={close} side="left" ariaLabel="Account">
        <div className="flex h-full flex-col p-6">
          <header className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-cosy-text">Account</h3>
            <Button variant="ghost" size="sm" onClick={close}>✕</Button>
          </header>
          <div className="flex items-center gap-3">
            <Avatar name="Leslie K" size="lg" tone="lavender" status="online" />
            <div>
              <p className="font-semibold text-cosy-text">Leslie K.</p>
              <p className="text-sm text-cosy-muted-2">Cafe Demo · Tashkent</p>
            </div>
          </div>
          <Button variant="secondary" className="mt-6" fullWidth>Switch store</Button>
          <Button variant="ghost" className="mt-2 text-cosy-pink" fullWidth>Sign out</Button>
        </div>
      </Sheet>

      <Sheet open={open === 'right'} onOpenChange={close} side="right" ariaLabel="Cart">
        <div className="flex h-full flex-col p-6">
          <header className="mb-6 flex items-center justify-between">
            <div>
              <p className="cosy-eyebrow">Order #042</p>
              <h3 className="text-lg font-bold text-cosy-text">Table 5</h3>
            </div>
            <Button variant="ghost" size="sm" onClick={close}>✕</Button>
          </header>
          <ul className="flex-1 space-y-2 text-sm">
            <li className="flex justify-between text-cosy-text"><span>2 × Roast chicken</span><span className="font-semibold">$25.50</span></li>
            <li className="flex justify-between text-cosy-text"><span>1 × Carbonara Paste</span><span className="font-semibold">$17.50</span></li>
            <li className="flex justify-between text-cosy-text"><span>1 × Cheesecake</span><span className="font-semibold">$6.50</span></li>
          </ul>
          <div className="mt-4 border-t border-dashed border-cosy-surface pt-3">
            <div className="flex justify-between text-base font-bold text-cosy-text">
              <span>Total</span>
              <span>$49.50</span>
            </div>
          </div>
          <Button fullWidth size="lg" className="mt-4">Place Order</Button>
        </div>
      </Sheet>

      <Sheet open={open === 'top'} onOpenChange={close} side="top" ariaLabel="Notification">
        <div className="flex h-full items-center justify-between gap-6 p-6">
          <div className="flex items-center gap-4">
            <Avatar name="✓" tone="sage" size="md" />
            <div>
              <p className="text-base font-bold text-cosy-text">Connected to printer</p>
              <p className="text-sm text-cosy-muted-2">Last sync 2 minutes ago</p>
            </div>
          </div>
          <Button variant="secondary" onClick={close}>Got it</Button>
        </div>
      </Sheet>

      <Sheet open={open === 'bottom'} onOpenChange={close} side="bottom" ariaLabel="Numpad">
        <div className="flex h-full flex-col p-6">
          <header className="mb-3 flex items-center justify-between">
            <div>
              <p className="cosy-eyebrow">Quantity</p>
              <p className="text-2xl font-bold text-cosy-text">3</p>
            </div>
            <Button variant="secondary" size="sm" onClick={close}>Close</Button>
          </header>
          <div className="grid flex-1 grid-cols-3 gap-2">
            {['1','2','3','4','5','6','7','8','9','C','0','✓'].map((k) => (
              <button
                key={k}
                type="button"
                className={`rounded-[10px] text-xl font-bold transition ${
                  k === '✓' ? 'bg-cosy-text text-cosy-bg hover:bg-[#e8e8e8]' :
                  k === 'C' ? 'bg-cosy-surface text-cosy-pink hover:bg-cosy-surface-3' :
                  'bg-cosy-surface text-cosy-text hover:bg-cosy-surface-3'
                }`}
              >{k}</button>
            ))}
          </div>
        </div>
      </Sheet>
    </div>
  );
}
