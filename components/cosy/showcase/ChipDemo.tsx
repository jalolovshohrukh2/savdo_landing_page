'use client';

import { useState } from 'react';
import { Chip } from '../Chip';

const categories = ['All', 'Coffee', 'Pastry', 'Cake', 'Salad'];

export function ChipDemo() {
  const [active, setActive] = useState('All');
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((c) => (
        <Chip key={c} active={c === active} onClick={() => setActive(c)}>
          {c}
        </Chip>
      ))}
    </div>
  );
}
