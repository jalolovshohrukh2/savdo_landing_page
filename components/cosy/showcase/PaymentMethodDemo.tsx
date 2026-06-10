'use client';

import { useState } from 'react';
import { PaymentMethodButton, PaymentMethodGroup } from '../PaymentMethodButton';

const methods = [
  { id: 'cash', label: 'Cash', icon: '$' },
  { id: 'card', label: 'Bank Card', icon: '▬' },
  { id: 'wallet', label: 'E-Wallet', icon: '⊞' },
];

export function PaymentMethodDemo() {
  const [selected, setSelected] = useState('card');
  return (
    <PaymentMethodGroup>
      {methods.map((m) => (
        <PaymentMethodButton
          key={m.id}
          label={m.label}
          icon={<span className="text-base">{m.icon}</span>}
          selected={selected === m.id}
          onClick={() => setSelected(m.id)}
        />
      ))}
    </PaymentMethodGroup>
  );
}
