'use client';

import { useState } from 'react';
import { SegmentedControl } from '../SegmentedControl';

export function SegmentedControlDemo() {
  const [tab, setTab] = useState<'all' | 'active' | 'inactive' | 'low' | 'zero'>('all');
  const [range, setRange] = useState<'yesterday' | 'today' | 'week' | 'month' | 'year'>(
    'yesterday'
  );

  return (
    <div className="flex flex-col gap-6">
      <SegmentedControl
        value={tab}
        onChange={setTab}
        items={[
          { value: 'all', label: 'All', count: '10.3K' },
          { value: 'active', label: 'Active', count: '10.3K' },
          { value: 'inactive', label: 'Inactive', count: 0 },
          { value: 'low', label: 'Low stock', count: 0 },
          { value: 'zero', label: 'Out of stock', count: 0 },
        ]}
      />
      <SegmentedControl
        value={range}
        onChange={setRange}
        items={[
          { value: 'yesterday', label: 'Yesterday' },
          { value: 'today', label: 'Today' },
          { value: 'week', label: 'Week' },
          { value: 'month', label: 'Month' },
          { value: 'year', label: 'Year' },
        ]}
      />
    </div>
  );
}
