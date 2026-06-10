import { Icon } from '@/components/refresh/Icon';

const steps = [
  {
    icon: 'user-plus',
    title: 'Создайте аккаунт',
    body: 'За 2 минуты регистрируйтесь по почте или номеру телефона. Без банковской карты.',
  },
  {
    icon: 'upload-cloud',
    title: 'Импортируйте товары',
    body: 'Загружайте номенклатуру из Excel, 1С или через API. Поможем бесплатно.',
  },
  {
    icon: 'rocket',
    title: 'Запускайте кассу',
    body: 'Подключайте оборудование, обучайте кассиров и продавайте — Refresh сразу готов.',
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-refresh-line bg-refresh-surface-2/40 py-12 sm:py-24">
      <div className="container-refresh">
        <div className="mx-auto max-w-2xl text-center">
          <span className="refresh-eyebrow">Как это работает</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-refresh-text sm:text-4xl">
            Запуск магазина за 15 минут
          </h2>
          <p className="mt-4 text-base leading-relaxed text-refresh-muted">
            Без установки, без серверов, без IT-отдела. Включайте Refresh как сервис и начинайте продавать.
          </p>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-refresh-line bg-refresh-surface p-6"
            >
              <div className="flex items-center justify-between">
                <span
                  aria-hidden
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-refresh-sage/15 text-refresh-sage"
                >
                  <Icon name={s.icon} size={18} />
                </span>
                <span className="text-xs font-bold tabular-nums text-refresh-muted-2">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-refresh-text">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-refresh-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
