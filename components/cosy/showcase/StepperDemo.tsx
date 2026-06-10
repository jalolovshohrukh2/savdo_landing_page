'use client';

import { useState } from 'react';
import { Stepper } from '../Stepper';

export function StepperDemo() {
  const [qty, setQty] = useState(1);
  const [pcs, setPcs] = useState(12);
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Stepper value={qty} onChange={setQty} min={1} max={99} unit="pcs" />
      <Stepper value={pcs} onChange={setPcs} min={0} max={500} step={1} unit="kg" />
      <Stepper value={1} onChange={() => {}} unit="pcs" />
    </div>
  );
}
