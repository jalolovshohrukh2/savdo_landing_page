'use client';

import { useState } from 'react';
import { Numpad } from '../Numpad';

export function NumpadDemo() {
  const [val, setVal] = useState('0');
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
      <div className="flex-1 rounded-xl bg-cosy-surface p-4">
        <p className="text-[11px] font-medium text-cosy-muted-2">Received</p>
        <p className="mt-1 text-3xl font-bold text-cosy-text tabular-nums">{val}</p>
      </div>
      <div className="w-full sm:max-w-[260px]">
        <Numpad
          onKey={(k) => {
            if (k === '×') setVal((v) => (v.length > 1 ? v.slice(0, -1) : '0'));
            else if (k === '.') setVal((v) => (v.includes('.') ? v : v + '.'));
            else setVal((v) => (v === '0' ? k : v + k));
          }}
        />
      </div>
    </div>
  );
}
