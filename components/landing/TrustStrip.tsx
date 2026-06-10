const stats = [
  { value: '15 мин', label: 'на запуск магазина' },
  { value: '40+', label: 'готовых отчётов' },
  { value: '<3 сек', label: 'на одну продажу' },
  { value: '99.9%', label: 'аптайм облака' },
];

export function TrustStrip() {
  return (
    <section className="border-y border-refresh-line bg-refresh-surface-2/60">
      <div className="container-refresh grid grid-cols-2 gap-x-4 gap-y-6 py-8 sm:gap-6 sm:py-10 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-refresh-text sm:text-3xl lg:text-4xl">
              {s.value}
            </span>
            <span className="mt-1 text-xs text-refresh-muted sm:text-sm">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
