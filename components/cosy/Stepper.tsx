'use client';

export type StepperProps = {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  className?: string;
};

export function Stepper({
  value,
  onChange,
  min = 0,
  max,
  step = 1,
  unit,
  className = '',
}: StepperProps) {
  const inc = () => onChange(max != null ? Math.min(max, value + step) : value + step);
  const dec = () => onChange(Math.max(min, value - step));
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-lg bg-cosy-surface px-3 py-1.5 ${className}`}
    >
      <span className="text-sm font-medium text-cosy-text tabular-nums">{value}</span>
      {unit && <span className="text-xs text-cosy-muted-2">{unit}</span>}
      <span className="ml-1 flex flex-col leading-none">
        <button
          type="button"
          aria-label="Increase"
          onClick={inc}
          className="text-[10px] text-cosy-muted-2 transition hover:text-cosy-text"
        >
          ▴
        </button>
        <button
          type="button"
          aria-label="Decrease"
          onClick={dec}
          className="text-[10px] text-cosy-muted-2 transition hover:text-cosy-text"
        >
          ▾
        </button>
      </span>
    </div>
  );
}
