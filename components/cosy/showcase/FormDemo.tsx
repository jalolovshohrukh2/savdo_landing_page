'use client';

import { useState } from 'react';
import { Input, SearchInput, Select, Toggle, RadioGroup } from '../Form';

export function FormDemo() {
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [floor, setFloor] = useState('1');
  const [acceptCard, setAcceptCard] = useState(true);
  const [printSlip, setPrintSlip] = useState(false);
  const [tip, setTip] = useState('10');

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <SearchInput
          shortcut="/"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search dishes…"
        />
        <Input
          label="Customer name"
          name="customer"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Walk-in"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="invalid@"
          invalid
          hint="Enter a valid email address"
        />
        <Select label="Floor" name="floor" value={floor} onChange={(e) => setFloor(e.target.value)}>
          <option value="1">1st floor</option>
          <option value="2">2nd floor</option>
          <option value="3">3rd floor</option>
        </Select>
      </div>

      <div className="space-y-4">
        <div className="space-y-3 rounded-xl bg-cosy-surface p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-cosy-muted-2">
            Toggles
          </p>
          <Toggle checked={acceptCard} onChange={setAcceptCard} label="Accept card payments" />
          <Toggle checked={printSlip} onChange={setPrintSlip} label="Auto-print kitchen slip" />
          <Toggle checked={false} onChange={() => {}} label="Disabled option" disabled />
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-cosy-muted">Tip preset</p>
          <RadioGroup
            name="tip"
            value={tip}
            onChange={setTip}
            options={[
              { value: '0', label: 'No tip' },
              { value: '10', label: '10%' },
              { value: '15', label: '15%' },
              { value: '20', label: '20%' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
