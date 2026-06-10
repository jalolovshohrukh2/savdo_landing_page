'use client';

import { useState } from 'react';
import { DatePicker } from '../DatePicker';

const FIXED_MONTH = new Date(2026, 3, 1); // April 2026
const FIXED_SELECTED = new Date(2026, 3, 27);

export function DatePickerDemo() {
  const [selected, setSelected] = useState<Date>(FIXED_SELECTED);

  return (
    <DatePicker
      monthDate={FIXED_MONTH}
      selectedStart={selected}
      selectedEnd={selected}
      onSelectDate={setSelected}
      monthLabel="April 2026"
      presets={[
        { id: 'yesterday', label: 'Yesterday', range: '2026-04-27' },
        { id: 'today', label: 'Today', range: '2026-04-28' },
        { id: 'week', label: 'This week', range: '2026-04-27 — 2026-04-28' },
        { id: 'month', label: 'This month', range: '2026-04-01 — 2026-04-28' },
        { id: 'year', label: 'This year', range: '2026-01-01 — 2026-04-28' },
      ]}
      onApply={() => {}}
    />
  );
}
