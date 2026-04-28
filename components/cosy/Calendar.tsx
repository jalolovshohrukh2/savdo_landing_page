'use client';

export type CalendarProps = {
  monthDate: Date;
  selected?: Date;
  weekDayLabels?: [string, string, string, string, string, string, string];
  monthLabel?: string;
  onSelect?: (d: Date) => void;
  onPrev?: () => void;
  onNext?: () => void;
  className?: string;
};

const DEFAULT_WEEKDAYS: [string, string, string, string, string, string, string] = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',
];

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function Calendar({
  monthDate,
  selected,
  weekDayLabels = DEFAULT_WEEKDAYS,
  monthLabel,
  onSelect,
  onPrev,
  onNext,
  className = '',
}: CalendarProps) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  // 0=Sun..6=Sat -> shift so Mon=0
  const dayOfWeek = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells: { day: number; inMonth: boolean; date: Date }[] = [];
  for (let i = dayOfWeek - 1; i >= 0; i--) {
    const d = daysInPrevMonth - i;
    cells.push({ day: d, inMonth: false, date: new Date(year, month - 1, d) });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, inMonth: true, date: new Date(year, month, d) });
  }
  let next = 1;
  while (cells.length < 42) {
    cells.push({ day: next, inMonth: false, date: new Date(year, month + 1, next) });
    next++;
  }

  const label =
    monthLabel ?? firstOfMonth.toLocaleString('en', { month: 'long', year: 'numeric' });

  return (
    <div className={`rounded-2xl bg-cosy-surface-2 p-4 ${className}`}>
      <header className="mb-3 flex items-center justify-between px-1">
        <button
          type="button"
          aria-label="Previous month"
          onClick={onPrev}
          className="text-cosy-text transition hover:opacity-80"
        >
          ‹
        </button>
        <p className="text-sm font-semibold text-cosy-text">{label}</p>
        <button
          type="button"
          aria-label="Next month"
          onClick={onNext}
          className="text-cosy-text transition hover:opacity-80"
        >
          ›
        </button>
      </header>

      <div className="grid grid-cols-7 gap-1 rounded-xl bg-cosy-surface px-1.5 py-1.5">
        {weekDayLabels.map((d) => (
          <div
            key={d}
            className="py-0.5 text-center text-[11px] font-medium uppercase tracking-wider text-cosy-muted"
          >
            {d}
          </div>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {cells.map((c, i) => {
          const isSelected = selected ? sameDay(c.date, selected) : false;
          return (
            <button
              key={i}
              type="button"
              onClick={() => onSelect?.(c.date)}
              aria-pressed={isSelected}
              className={`flex h-9 items-center justify-center rounded-lg text-sm font-medium tabular-nums transition ${
                isSelected
                  ? 'bg-cosy-text text-cosy-bg'
                  : c.inMonth
                  ? 'text-cosy-text hover:bg-cosy-surface'
                  : 'text-cosy-muted-2 hover:bg-cosy-surface'
              }`}
            >
              {c.day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
