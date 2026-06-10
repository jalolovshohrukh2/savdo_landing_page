'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Icon } from '@/components/refresh/Icon';

/**
 * Animated mobile-app showcase for the hero — a phone frame that auto-advances
 * through the core Refresh sell flow: Dashboard → Scan → Pay → Paid.
 *
 * The phone *screen* renders inside a `.refresh-light` scope, so the Refresh
 * tokens resolve to the light app palette (white surfaces, navy ink) while the
 * surrounding landing stays dark. The single accent is the Refresh brand green
 * (#2BB673, from the logo) used for the app's hero moments (trend, scan,
 * success) — exactly as the product uses it.
 */
const BRAND = '#2BB673';
const SCREENS = 4;
const INTERVAL = 3600;

const labels = ['Дашборд', 'Сканирование', 'Оплата', 'Готово'];

export function PhoneShowcase() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SCREENS), INTERVAL);
    return () => clearInterval(t);
  }, []);

  const screens = [<Dashboard key="d" />, <Scan key="s" />, <Pay key="p" />, <Paid key="k" reduce={!!reduce} />];

  return (
    <div className="relative mx-auto flex w-full max-w-[300px] flex-col items-center">
      {/* Ambient glow behind the phone */}
      <div
        aria-hidden
        className="refresh-glow"
        style={{ top: '8%', left: '50%', width: 320, height: 420, transform: 'translateX(-50%)', background: 'rgb(43 182 115 / 0.10)' }}
      />

      <div className="relative w-[272px] sm:w-[292px]">
        {/* Bezel */}
        <div className="relative rounded-[2.6rem] border border-refresh-surface-3 bg-refresh-surface p-2.5 refresh-shadow-soft">
          {/* Screen — light app scope */}
          <div className="refresh-light relative h-[560px] w-full overflow-hidden rounded-[2.05rem] bg-refresh-bg">
            {/* Dynamic island */}
            <div className="absolute left-1/2 top-2.5 z-30 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-black" />
            {/* Status bar */}
            <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-refresh-text">
              <span>9:41</span>
              <span className="flex items-center gap-1.5">
                <Icon name="signal" size={13} />
                <Icon name="wifi" size={13} />
                <Icon name="battery-full" size={15} />
              </span>
            </div>

            {/* Screen content */}
            <div className="absolute inset-0 top-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, x: -28 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex flex-col px-4 pb-4"
                >
                  {screens[i]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Floating notification chip — a little life on the dark canvas */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute -right-3 top-24 hidden items-center gap-2 rounded-2xl border border-refresh-line bg-refresh-surface px-3 py-2 refresh-shadow-soft sm:flex"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-lg" style={{ background: 'rgba(43,182,115,0.15)', color: BRAND }}>
            <Icon name="trending-up" size={13} />
          </span>
          <span className="text-[11px] font-semibold text-refresh-text">+147% сегодня</span>
        </motion.div>
      </div>

      {/* Progress dots */}
      <div className="mt-6 flex items-center gap-2" role="tablist" aria-label="Экраны приложения">
        {Array.from({ length: SCREENS }).map((_, n) => (
          <button
            key={n}
            type="button"
            role="tab"
            aria-selected={n === i}
            aria-label={labels[n]}
            onClick={() => setI(n)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: n === i ? 24 : 8,
              background: n === i ? BRAND : 'rgb(var(--refresh-surface-3))',
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── Screens ───────────────────────── */

function Dashboard() {
  const bars = [22, 30, 24, 40, 46, 52, 48, 60, 56, 70, 62];
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[8px] font-semibold uppercase tracking-wider text-refresh-muted-2">Добрый день</p>
          <p className="flex items-center gap-1 text-base font-bold text-refresh-text">
            Все точки <Icon name="chevron-down" size={14} className="text-refresh-muted-2" />
          </p>
        </div>
        <div className="flex gap-1.5">
          <Chip><Icon name="search" size={13} /></Chip>
          <Chip><Icon name="bell" size={13} /></Chip>
        </div>
      </div>

      {/* Sales card (dark feature card) */}
      <div className="rounded-2xl p-3.5 text-refresh-bg" style={{ background: 'rgb(var(--refresh-text))' }}>
        <p className="text-[8px] font-semibold uppercase tracking-wider opacity-60">Продажи сегодня</p>
        <p className="mt-0.5 text-[26px] font-bold leading-none tracking-tight">3 430 c</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="rounded-full px-1.5 py-0.5 text-[9px] font-bold" style={{ background: 'rgba(43,182,115,0.22)', color: '#7BE3AE' }}>
            ▲ 147%
          </span>
          <span className="text-[9px] opacity-60">к вчера · 6 продаж</span>
        </div>
        <div className="mt-2.5 flex h-8 items-end gap-1">
          {bars.map((h, idx) => (
            <span
              key={idx}
              className="flex-1 rounded-[2px]"
              style={{ height: `${h}%`, background: idx === bars.length - 1 ? BRAND : 'rgba(255,255,255,0.22)' }}
            />
          ))}
        </div>
      </div>

      {/* Action tiles — square */}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="flex aspect-square flex-col justify-between rounded-2xl p-3 text-refresh-bg" style={{ background: 'rgb(var(--refresh-text))' }}>
          <span className="flex h-8 w-8 items-center justify-center rounded-xl text-white" style={{ background: BRAND }}>
            <Icon name="scan-line" size={16} />
          </span>
          <div>
            <p className="truncate text-xs font-bold">Новая продажа</p>
            <p className="truncate text-[9px] opacity-60">Сканировать</p>
          </div>
        </div>
        <div className="flex aspect-square flex-col justify-between rounded-2xl bg-refresh-surface p-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-refresh-surface-2 text-refresh-text">
            <Icon name="bar-chart-3" size={16} />
          </span>
          <div>
            <p className="truncate text-xs font-bold text-refresh-text">Отчёты</p>
            <p className="truncate text-[9px] text-refresh-muted-2">День, неделя</p>
          </div>
        </div>
      </div>

      <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-refresh-muted-2">Последние продажи</p>
      <div className="flex flex-col gap-1.5">
        <TxRow swatch="bg-refresh-surface-3" title="Хлопковая футболка +4" sub="16:06 · Visa" amount="189 c" icon="credit-card" />
        <TxRow swatch="" title="Керамическая кружка +2" sub="15:36 · Наличные" amount="54 c" icon="banknote" tint />
      </div>

      <div className="mt-auto flex items-center justify-between rounded-2xl bg-refresh-surface px-5 py-2.5 text-refresh-muted-2">
        <Icon name="home" size={16} className="text-refresh-text" />
        <Icon name="package" size={16} />
        <span className="flex h-7 w-7 items-center justify-center rounded-full text-white" style={{ background: 'rgb(var(--refresh-text))' }}>
          <Icon name="plus" size={15} />
        </span>
        <Icon name="user" size={16} />
        <Icon name="more-horizontal" size={16} />
      </div>
    </div>
  );
}

function Scan() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[8px] font-semibold uppercase tracking-wider text-refresh-muted-2">Новая продажа</p>
          <p className="text-base font-bold text-refresh-text">Магазин «Сезон»</p>
        </div>
        <span className="rounded-full bg-refresh-surface px-2.5 py-1 text-[10px] font-semibold text-refresh-muted">Черновики ●</span>
      </div>

      {/* Customer chip */}
      <div className="flex items-center gap-2.5 rounded-2xl bg-refresh-surface px-3 py-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ background: BRAND }}>
          АР
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-refresh-text">Анна Рахимова</p>
        </div>
        <span className="text-[10px] font-semibold" style={{ color: BRAND }}>Сменить</span>
      </div>

      {/* Scanner viewfinder */}
      <div className="relative h-36 overflow-hidden rounded-2xl" style={{ background: 'rgb(var(--refresh-text))' }}>
        <span className="absolute left-3 top-3 z-10 rounded-full bg-black/40 px-2 py-0.5 text-[9px] font-bold tracking-wide text-white">
          СКАНИРОВАНИЕ
        </span>
        {/* corner brackets */}
        <Corners />
        {/* scan line — always animated */}
        <motion.span
          className="absolute inset-x-6 h-[2px] rounded-full"
          style={{ background: BRAND, boxShadow: `0 0 12px ${BRAND}` }}
          initial={{ top: '18%' }}
          animate={{ top: ['18%', '82%', '18%'] }}
          transition={{ duration: 2.2, ease: 'easeInOut', repeat: Infinity }}
        />
        <p className="absolute inset-x-0 bottom-3 text-center text-[9px] text-white/70">Наведите на штрих-код</p>
      </div>

      <p className="text-[8px] font-semibold uppercase tracking-wider text-refresh-muted-2">5 товаров отсканировано</p>
      <div className="flex flex-col gap-1.5">
        <ScanItem tone="bg-refresh-periwinkle" title="Хлопковая футболка" sub="SKU 4012-BLK · M" price="38 c" />
        <ScanItem tone="bg-refresh-sage" title="Шерстяные носки" sub="SKU 7821 · L ×2" price="44 c" />
        <ScanItem tone="bg-refresh-pink" title="Кожаный кошелёк" sub="SKU 5510-TAN" price="64 c" />
      </div>

      <div className="mt-auto flex items-center justify-between rounded-full px-5 py-3 text-refresh-bg" style={{ background: 'rgb(var(--refresh-text))' }}>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-[10px] font-bold">5</span>
        <span className="text-sm font-semibold">К оплате</span>
        <span className="text-sm font-bold tabular-nums">174 c</span>
      </div>
    </div>
  );
}

function Pay() {
  const methods: { name: string; sub: string; icon: string }[] = [
    { name: 'Наличные', sub: 'Открыть ящик', icon: 'banknote' },
    { name: 'Терминал', sub: 'Вставить · тап', icon: 'credit-card' },
    { name: 'Tap to Pay', sub: 'Этот телефон', icon: 'smartphone-nfc' },
    { name: 'Alif Mobi', sub: 'Кошелёк', icon: 'wallet' },
    { name: 'Humo', sub: 'Банк. карта', icon: 'credit-card' },
    { name: 'В долг', sub: 'Баланс клиента', icon: 'clock' },
  ];
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-center justify-center">
        <span className="absolute left-4 flex h-7 w-7 items-center justify-center rounded-full bg-refresh-surface text-refresh-text">
          <Icon name="chevron-left" size={15} />
        </span>
        <p className="text-xs font-bold text-refresh-text">Заказ #1042</p>
      </div>

      <div className="rounded-2xl bg-refresh-surface p-3.5">
        <div className="flex items-start justify-between">
          <p className="text-[8px] font-semibold uppercase tracking-wider text-refresh-muted-2">К оплате</p>
          <span className="flex items-center gap-1.5 text-[10px] font-semibold text-refresh-text">
            <span className="flex h-5 w-5 items-center justify-center rounded-full text-[8px] font-bold text-white" style={{ background: BRAND }}>АР</span>
            Анна Р.
          </span>
        </div>
        <p className="mt-1 text-[28px] font-bold leading-none tracking-tight text-refresh-text">189 c</p>
        <p className="mt-1.5 text-[9px] text-refresh-muted-2">Футболка · Носки · Кошелёк · +1</p>
      </div>

      <p className="text-[8px] font-semibold uppercase tracking-wider text-refresh-muted-2">Способ оплаты</p>
      <div className="grid grid-cols-2 gap-2">
        {methods.map((m) => (
          <div key={m.name} className="rounded-xl bg-refresh-surface p-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-refresh-surface-2 text-refresh-text">
              <Icon name={m.icon} size={14} />
            </span>
            <p className="mt-2 text-[11px] font-bold text-refresh-text">{m.name}</p>
            <p className="text-[8px] text-refresh-muted-2">{m.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Paid({ reduce }: { reduce: boolean }) {
  return (
    <div className="flex h-full flex-col items-center">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <motion.span
          className="flex h-16 w-16 items-center justify-center rounded-full text-white"
          style={{ background: BRAND }}
          initial={reduce ? { opacity: 0 } : { scale: 0.5, opacity: 0 }}
          animate={reduce ? { opacity: 1 } : { scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 320, damping: 18 }}
        >
          <Icon name="check" size={32} />
        </motion.span>
        <p className="mt-4 text-[9px] font-semibold uppercase tracking-wider text-refresh-muted-2">Оплачено</p>
        <p className="mt-1 text-[34px] font-bold leading-none tracking-tight text-refresh-text">212 c</p>
        <p className="mt-2 text-[10px] text-refresh-muted-2">Visa •••• 4218 · Одобрено</p>
        <span className="mt-3 flex items-center gap-1.5 rounded-full bg-refresh-surface px-3 py-1 text-[10px] font-semibold text-refresh-text">
          <span className="flex h-4 w-4 items-center justify-center rounded-full text-[7px] font-bold text-white" style={{ background: BRAND }}>АР</span>
          Анна Р. · +24 балла
        </span>
      </div>

      <div className="w-full">
        <p className="mb-2 text-[8px] font-semibold uppercase tracking-wider text-refresh-muted-2">Отправить чек</p>
        <div className="grid grid-cols-3 gap-2">
          <Receipt icon="message-square" label="SMS" />
          <Receipt icon="mail" label="Email" />
          <Receipt icon="printer" label="Печать" />
        </div>
        <div className="mt-3 rounded-full py-3 text-center text-sm font-semibold text-refresh-bg" style={{ background: 'rgb(var(--refresh-text))' }}>
          Без чека · новая продажа
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Bits ───────────────────────── */

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-refresh-surface text-refresh-text">
      {children}
    </span>
  );
}

function TxRow({ title, sub, amount, icon, tint }: { swatch?: string; title: string; sub: string; amount: string; icon: string; tint?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="flex h-7 w-7 items-center justify-center rounded-lg text-refresh-text"
        style={tint ? { background: 'rgba(43,182,115,0.15)', color: BRAND } : undefined}
      >
        <span className={tint ? '' : 'flex h-7 w-7 items-center justify-center rounded-lg bg-refresh-surface text-refresh-muted'}>
          <Icon name={icon} size={13} />
        </span>
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[10px] font-semibold text-refresh-text">{title}</p>
        <p className="text-[8px] text-refresh-muted-2">{sub}</p>
      </div>
      <span className="text-[10px] font-bold tabular-nums text-refresh-text">{amount}</span>
    </div>
  );
}

function ScanItem({ tone, title, sub, price }: { tone: string; title: string; sub: string; price: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl bg-refresh-surface px-2.5 py-2">
      <span className={`h-8 w-8 shrink-0 rounded-lg ${tone}`} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-semibold text-refresh-text">{title}</p>
        <p className="text-[8px] text-refresh-muted-2">{sub}</p>
      </div>
      <span className="text-[11px] font-bold tabular-nums text-refresh-text">{price}</span>
    </div>
  );
}

function Receipt({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl bg-refresh-surface py-2.5 text-refresh-text">
      <Icon name={icon} size={15} />
      <span className="text-[9px] font-medium">{label}</span>
    </div>
  );
}

function Corners() {
  const base = 'absolute h-4 w-4 border-white/50';
  return (
    <>
      <span className={`${base} left-3 top-8 border-l-2 border-t-2 rounded-tl`} />
      <span className={`${base} right-3 top-8 border-r-2 border-t-2 rounded-tr`} />
      <span className={`${base} bottom-8 left-3 border-b-2 border-l-2 rounded-bl`} />
      <span className={`${base} bottom-8 right-3 border-b-2 border-r-2 rounded-br`} />
    </>
  );
}
