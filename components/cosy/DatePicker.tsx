'use client';

import { Calendar } from './Calendar';

export type DateRangePreset = {
  id: string;
  label: string;
  range: string; // pre-formatted range, e.g. "2026-04-27 — 2026-04-28"
  active?: boolean;
};

export type DateInputCellProps = {
  value: string | number;
  className?: string;
};

export function DateInputCell({ value, className = '' }: DateInputCellProps) {
  return (
    <div
      className={`flex h-10 min-w-[3rem] items-center justify-center rounded-lg bg-cosy-surface px-3 text-sm font-medium text-cosy-text tabular-nums ${className}`}
    >
      {value}
    </div>
  );
}

export type DateInputProps = {
  value: string;
  placeholder?: string;
  className?: string;
};

export function DateInput({ value, placeholder, className = '' }: DateInputProps) {
  return (
    <div
      className={`inline-flex h-10 items-center justify-between gap-3 rounded-lg bg-cosy-surface px-3 text-sm text-cosy-text ${className}`}
    >
      <span className={value ? '' : 'text-cosy-muted-2'}>{value || placeholder}</span>
      <span className="text-cosy-muted-2" aria-hidden>
        ▦
      </span>
    </div>
  );
}

export type DatePickerProps = {
  monthDate: Date;
  selectedStart?: Date;
  selectedEnd?: Date;
  presets?: DateRangePreset[];
  onSelectDate?: (d: Date) => void;
  onApply?: () => void;
  applyLabel?: string;
  monthLabel?: string;
  weekDayLabels?: [string, string, string, string, string, string, string];
  className?: string;
};

function fmt(d: Date) {
  const yr = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, '0');
  const dy = String(d.getDate()).padStart(2, '0');
  return { yr, mo, dy };
}

export function DatePicker({
  monthDate,
  selectedStart,
  selectedEnd,
  presets = [],
  onSelectDate,
  onApply,
  applyLabel = 'Apply',
  monthLabel,
  weekDayLabels,
  className = '',
}: DatePickerProps) {
  const start = selectedStart ?? monthDate;
  const end = selectedEnd ?? selectedStart ?? monthDate;
  const sFmt = fmt(start);
  const eFmt = fmt(end);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-cosy-line bg-cosy-surface-2 ${className}`}
    >
      <div className="grid gap-4 p-4 md:grid-cols-[minmax(280px,1fr)_minmax(220px,260px)]">
        <Calendar
          monthDate={monthDate}
          selected={selectedStart}
          monthLabel={monthLabel}
          weekDayLabels={weekDayLabels}
          onSelect={onSelectDate}
          className="bg-transparent p-0"
        />

        {presets.length > 0 && (
          <div className="flex flex-col gap-2 border-l border-cosy-line pl-4">
            {presets.map((p) => (
              <button
                key={p.id}
                type="button"
                aria-pressed={!!p.active}
                className={`flex flex-col items-start gap-0.5 rounded-xl bg-cosy-surface px-3 py-2 text-left transition hover:bg-cosy-surface-3 ${
                  p.active ? 'ring-1 ring-cosy-text' : ''
                }`}
              >
                <span className="text-xs font-semibold text-cosy-blue">{p.label}</span>
                <span className="text-[11px] tabular-nums text-cosy-muted">{p.range}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-cosy-line bg-cosy-surface-2 px-4 py-3">
        <div className="flex items-center gap-2 text-cosy-muted-2">
          <DateInputCell value={sFmt.dy} />
          <DateInputCell value={sFmt.mo} />
          <DateInputCell value={sFmt.yr} />
          <span aria-hidden>→</span>
          <DateInputCell value={eFmt.dy} />
          <DateInputCell value={eFmt.mo} />
          <DateInputCell value={eFmt.yr} />
        </div>
        <button
          type="button"
          onClick={onApply}
          className="rounded-lg bg-cosy-text px-5 py-2 text-sm font-semibold text-cosy-bg transition hover:bg-[#e8e8e8]"
        >
          {applyLabel}
        </button>
      </div>
    </div>
  );
}
