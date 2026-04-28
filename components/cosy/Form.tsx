import { forwardRef } from 'react';

/* === Input ============================================================== */

type InputBaseProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  invalid?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputBaseProps>(function Input(
  { label, hint, iconLeft, iconRight, invalid, className = '', id, ...rest },
  ref
) {
  const inputId = id ?? rest.name;
  return (
    <label className="block w-full" htmlFor={inputId}>
      {label && (
        <span className="mb-1.5 block text-xs font-medium text-cosy-muted">{label}</span>
      )}
      <span
        className={`flex items-center gap-2 rounded-lg bg-cosy-surface px-3 py-2.5 ring-1 ring-transparent transition focus-within:ring-cosy-text ${
          invalid ? 'ring-cosy-pink' : ''
        } ${className}`}
      >
        {iconLeft && <span aria-hidden className="text-cosy-muted-2">{iconLeft}</span>}
        <input
          ref={ref}
          id={inputId}
          className="flex-1 bg-transparent text-sm text-cosy-text placeholder:text-cosy-muted-2 focus:outline-none"
          {...rest}
        />
        {iconRight && <span aria-hidden className="text-cosy-muted-2">{iconRight}</span>}
      </span>
      {hint && (
        <span className={`mt-1 block text-[11px] ${invalid ? 'text-cosy-pink' : 'text-cosy-muted-2'}`}>
          {hint}
        </span>
      )}
    </label>
  );
});

/* === SearchInput ======================================================== */

export type SearchInputProps = Omit<InputBaseProps, 'iconLeft' | 'type'> & {
  shortcut?: string;
};

export function SearchInput({ shortcut, placeholder = 'Search', ...rest }: SearchInputProps) {
  return (
    <Input
      type="search"
      placeholder={placeholder}
      iconLeft={
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="m9.5 9.5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      }
      iconRight={
        shortcut ? (
          <kbd className="rounded border border-cosy-surface-3 px-1.5 py-0.5 font-mono text-[10px] text-cosy-muted-2">
            {shortcut}
          </kbd>
        ) : undefined
      }
      {...rest}
    />
  );
}

/* === Select (visual only) =============================================== */

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, className = '', children, id, ...rest },
  ref
) {
  const selectId = id ?? rest.name;
  return (
    <label className="block w-full" htmlFor={selectId}>
      {label && (
        <span className="mb-1.5 block text-xs font-medium text-cosy-muted">{label}</span>
      )}
      <span className="relative flex items-center rounded-lg bg-cosy-surface px-3 py-2.5 ring-1 ring-transparent transition focus-within:ring-cosy-text">
        <select
          ref={ref}
          id={selectId}
          className={`w-full appearance-none bg-transparent pr-6 text-sm text-cosy-text focus:outline-none ${className}`}
          {...rest}
        >
          {children}
        </select>
        <span aria-hidden className="pointer-events-none absolute right-3 text-cosy-muted-2">
          ▾
        </span>
      </span>
    </label>
  );
});

/* === Toggle ============================================================= */

export type ToggleProps = {
  checked: boolean;
  onChange: (next: boolean) => void;
  label?: string;
  disabled?: boolean;
};

export function Toggle({ checked, onChange, label, disabled = false }: ToggleProps) {
  return (
    <label className={`inline-flex items-center gap-3 ${disabled ? 'opacity-50' : 'cursor-pointer'}`}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
          checked ? 'bg-cosy-text' : 'bg-cosy-surface-3'
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-cosy-bg transition ${
            checked ? 'translate-x-5' : 'translate-x-0.5'
          }`}
        />
      </button>
      {label && <span className="text-sm text-cosy-text">{label}</span>}
    </label>
  );
}

/* === Checkbox =========================================================== */

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> & {
  label?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, className = '', checked, ...rest },
  ref
) {
  return (
    <label className={`inline-flex cursor-pointer items-center gap-2 ${className}`}>
      <span
        className={`relative flex h-4 w-4 items-center justify-center rounded border transition ${
          checked
            ? 'border-cosy-text bg-cosy-text'
            : 'border-cosy-surface-3 bg-cosy-surface'
        }`}
      >
        <input ref={ref} type="checkbox" checked={checked} className="sr-only" {...rest} />
        {checked && (
          <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden>
            <path
              d="M2 6.5 5 9.5 10 3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cosy-bg"
            />
          </svg>
        )}
      </span>
      {label && <span className="text-sm text-cosy-text">{label}</span>}
    </label>
  );
});

/* === PhoneInput ========================================================= */

export type PhoneInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: string;
  hint?: string;
  countryFlag?: React.ReactNode;
  countryCode?: string;
  onCountryClick?: () => void;
  required?: boolean;
};

export function PhoneInput({
  label,
  hint,
  countryFlag = '🇹🇯',
  countryCode,
  onCountryClick,
  required,
  placeholder = 'Enter phone',
  className = '',
  ...rest
}: PhoneInputProps) {
  return (
    <label className={`block w-full ${className}`}>
      {label && (
        <span className="mb-1.5 block text-xs font-medium text-cosy-muted">
          {label}
          {required && <span className="ml-0.5 text-cosy-pink">*</span>}
        </span>
      )}
      <span className="flex items-stretch gap-2">
        <button
          type="button"
          onClick={onCountryClick}
          className="flex shrink-0 items-center gap-1 rounded-lg bg-cosy-surface px-3 py-2.5 text-sm text-cosy-text transition hover:bg-cosy-surface-3"
        >
          <span aria-hidden className="text-base leading-none">{countryFlag}</span>
          {countryCode && <span className="text-cosy-muted">{countryCode}</span>}
          <span className="text-[10px] text-cosy-muted-2" aria-hidden>▾</span>
        </button>
        <span className="flex flex-1 items-center gap-2 rounded-lg bg-cosy-surface px-3 py-2.5 ring-1 ring-transparent transition focus-within:ring-cosy-text">
          <input
            type="tel"
            placeholder={placeholder}
            className="w-full bg-transparent text-sm text-cosy-text placeholder:text-cosy-muted-2 focus:outline-none"
            {...rest}
          />
        </span>
      </span>
      {hint && (
        <span className="mt-1 block text-[11px] text-cosy-muted-2">{hint}</span>
      )}
    </label>
  );
}

/* === TagInput =========================================================== */

export type TagInputProps = {
  label?: string;
  values: string[];
  onRemove?: (value: string) => void;
  placeholder?: string;
  helpHint?: React.ReactNode;
};

export function TagInput({
  label,
  values,
  onRemove,
  placeholder = 'Add tag…',
  helpHint,
}: TagInputProps) {
  return (
    <label className="block w-full">
      {label && (
        <span className="mb-1.5 flex items-center gap-1 text-xs font-medium text-cosy-muted">
          {label}
          {helpHint && (
            <span
              aria-hidden
              title={typeof helpHint === 'string' ? helpHint : undefined}
              className="flex h-4 w-4 items-center justify-center rounded-full bg-cosy-surface-3 text-[9px] font-bold text-cosy-muted-2"
            >
              ?
            </span>
          )}
        </span>
      )}
      <span className="flex min-h-[42px] flex-wrap items-center gap-1.5 rounded-lg bg-cosy-surface px-2 py-1.5 ring-1 ring-transparent transition focus-within:ring-cosy-text">
        {values.map((v) => (
          <span
            key={v}
            className="inline-flex items-center gap-1 rounded-md bg-cosy-surface-3 px-2 py-1 text-xs font-medium text-cosy-text"
          >
            {v}
            {onRemove && (
              <button
                type="button"
                onClick={() => onRemove(v)}
                aria-label={`Remove ${v}`}
                className="text-cosy-muted-2 transition hover:text-cosy-text"
              >
                ×
              </button>
            )}
          </span>
        ))}
        <input
          type="text"
          placeholder={values.length === 0 ? placeholder : ''}
          className="min-w-[80px] flex-1 bg-transparent px-1 py-0.5 text-sm text-cosy-text placeholder:text-cosy-muted-2 focus:outline-none"
        />
      </span>
    </label>
  );
}

/* === Radio ============================================================== */

export type RadioOption = { value: string; label: string };

export type RadioGroupProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: RadioOption[];
};

export function RadioGroup({ name, value, onChange, options }: RadioGroupProps) {
  return (
    <div className="space-y-2">
      {options.map((opt) => {
        const checked = value === opt.value;
        return (
          <label
            key={opt.value}
            className="flex cursor-pointer items-center gap-3 rounded-lg bg-cosy-surface px-3 py-2.5 transition hover:bg-cosy-surface-3"
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={checked}
              onChange={() => onChange(opt.value)}
              className="sr-only"
            />
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full border-2 transition ${
                checked ? 'border-cosy-text' : 'border-cosy-surface-3'
              }`}
            >
              {checked && <span className="h-2 w-2 rounded-full bg-cosy-text" />}
            </span>
            <span className="text-sm text-cosy-text">{opt.label}</span>
          </label>
        );
      })}
    </div>
  );
}
