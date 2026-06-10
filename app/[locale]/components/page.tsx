import { unstable_setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n.config';
import { Avatar, AvatarGroup, EmployeeChip } from '@/components/cosy/Avatar';
import { Button } from '@/components/cosy/Button';
import { Card, CardHeader, CardTitle, CardSubtitle } from '@/components/cosy/Card';
import { Tag } from '@/components/cosy/Tag';
import { Header as CosyHeader } from '@/components/cosy/Header';
import { Hero as CosyHero } from '@/components/cosy/Hero';
import { Footer as CosyFooter } from '@/components/cosy/Footer';
import { StatCard } from '@/components/cosy/StatCard';
import { CategoryCard } from '@/components/cosy/CategoryCard';
import { FontSpecimen } from '@/components/cosy/Typography';
import { OrderTable, Table, THead, TBody, Tr, Th, Td } from '@/components/cosy/Table';
import { List, ListRow, NavItem, OrderLineItem, UpsaleRow } from '@/components/cosy/List';
import { Checkbox, PhoneInput } from '@/components/cosy/Form';
import { Kbd } from '@/components/cosy/Kbd';
import { EmptyState } from '@/components/cosy/EmptyState';
import { NavRail } from '@/components/cosy/NavRail';
import { Menu, MenuHeader, MenuItem } from '@/components/cosy/Menu';
import { Chip } from '@/components/cosy/Chip';
import { Highlight } from '@/components/cosy/Highlight';
import { Receipt, ReceiptLine, ReceiptDivider, ReceiptItem } from '@/components/cosy/Receipt';
import { ShortcutsPanel, ShortcutGroup, ShortcutRow } from '@/components/cosy/Shortcuts';
import { PaymentRow } from '@/components/cosy/PaymentRow';
import { FormDemo } from '@/components/cosy/showcase/FormDemo';
import { Section, Example, Row } from '@/components/cosy/showcase/Section';
import { Sidebar, type TocItem } from '@/components/cosy/showcase/Sidebar';
import { SheetDemo } from '@/components/cosy/showcase/SheetDemo';
import { ChipDemo } from '@/components/cosy/showcase/ChipDemo';
import { Swatch } from '@/components/cosy/showcase/Swatch';
import { ProductCardDemo } from '@/components/cosy/showcase/ProductCardDemo';
import { PaymentMethodDemo } from '@/components/cosy/showcase/PaymentMethodDemo';
import { NumpadDemo } from '@/components/cosy/showcase/NumpadDemo';
import { StepperDemo } from '@/components/cosy/showcase/StepperDemo';
import { SegmentedControlDemo } from '@/components/cosy/showcase/SegmentedControlDemo';
import { DatePickerDemo } from '@/components/cosy/showcase/DatePickerDemo';
import { ComboboxDemo } from '@/components/cosy/showcase/ComboboxDemo';
import { TagInputDemo } from '@/components/cosy/showcase/TagInputDemo';

const toc: TocItem[] = [
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'headers', label: 'Headers' },
  { id: 'heroes', label: 'Heroes' },
  { id: 'buttons', label: 'Buttons' },
  { id: 'avatars', label: 'Avatars' },
  { id: 'tags', label: 'Tags' },
  { id: 'chips', label: 'Chips' },
  { id: 'segmented', label: 'Segmented control' },
  { id: 'kbd', label: 'Keyboard' },
  { id: 'cards', label: 'Cards' },
  { id: 'stat-cards', label: 'Stat cards' },
  { id: 'category-cards', label: 'Category cards' },
  { id: 'product-cards', label: 'Product cards' },
  { id: 'lists', label: 'Lists' },
  { id: 'nav-rail', label: 'Nav rail' },
  { id: 'menus', label: 'Menus' },
  { id: 'tables', label: 'Tables' },
  { id: 'data-tables', label: 'Data tables' },
  { id: 'forms', label: 'Forms' },
  { id: 'steppers', label: 'Steppers' },
  { id: 'combobox', label: 'Combobox' },
  { id: 'highlight', label: 'Highlight' },
  { id: 'date-picker', label: 'Date picker' },
  { id: 'empty-states', label: 'Empty states' },
  { id: 'payment-methods', label: 'Payment methods' },
  { id: 'payment-rows', label: 'Payment rows' },
  { id: 'numpad', label: 'Numpad' },
  { id: 'receipt', label: 'Receipt' },
  { id: 'shortcuts', label: 'Shortcuts panel' },
  { id: 'sheets', label: 'Sheets' },
  { id: 'footers', label: 'Footers' },
];

const surfaceColors = [
  { name: 'Background', token: '--cosy-bg', hex: '#111315', textOn: 'light' as const },
  { name: 'Surface', token: '--cosy-surface', hex: '#292C2D', textOn: 'light' as const },
  { name: 'Surface 2', token: '--cosy-surface-2', hex: '#1a1c1e', textOn: 'light' as const },
  { name: 'Line', token: '--cosy-line', hex: '#1e2022', textOn: 'light' as const },
];

const textColors = [
  { name: 'Text', token: '--cosy-text', hex: '#FFFFFF' },
  { name: 'Muted', token: '--cosy-muted', hex: '#989898' },
  { name: 'Muted 2', token: '--cosy-muted-2', hex: '#676767', textOn: 'light' as const },
];

const pastelColors = [
  { name: 'Sage', token: '--cosy-sage', hex: '#CFDDDB' },
  { name: 'Lavender', token: '--cosy-lavender', hex: '#E4CDED' },
  { name: 'Blue', token: '--cosy-blue', hex: '#C2DBE9' },
  { name: 'Pink', token: '--cosy-pink', hex: '#F1C8D0' },
  { name: 'Periwinkle', token: '--cosy-periwinkle', hex: '#C9CAEF' },
];

export default function ComponentsPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);

  return (
    <main className="cosy">
      <CosyHeader
        brand="CosyPOS"
        storeName="Component library"
        backHref={`/${locale}`}
        backLabel="← Back to site"
      />

      <div className="container-savdo py-10">
        <div className="mb-10 max-w-2xl">
          <span className="cosy-eyebrow">Cosy POS theme</span>
          <h1 className="mt-2 text-4xl font-bold leading-tight text-cosy-text sm:text-5xl">
            Components
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-cosy-muted sm:text-base">
            Reusable building blocks of the Cosy POS theme. Each primitive lives in
            <code className="mx-1 rounded bg-cosy-surface px-1.5 py-0.5 font-mono text-xs text-cosy-text">components/cosy/</code>
            and is theme-scoped via the <code className="mx-1 rounded bg-cosy-surface px-1.5 py-0.5 font-mono text-xs text-cosy-text">.cosy</code> wrapper.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[200px_1fr]">
          <Sidebar items={toc} />

          <div>
            {/* Colors */}
            <Section
              id="colors"
              title="Colors"
              description="Theme tokens are CSS variables on .cosy, mirrored as Tailwind utilities (bg-cosy-surface, text-cosy-muted, …). Three groups: surfaces, text, and pastel accents used for category cards, status pills, and avatar tones."
            >
              <Example label="Surfaces">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {surfaceColors.map((c) => (
                    <Swatch key={c.token} {...c} />
                  ))}
                </div>
              </Example>
              <Example label="Text">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {textColors.map((c) => (
                    <Swatch key={c.token} {...c} />
                  ))}
                </div>
              </Example>
              <Example label="Pastel accents">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {pastelColors.map((c) => (
                    <Swatch key={c.token} {...c} />
                  ))}
                </div>
              </Example>
            </Section>

            {/* Typography */}
            <Section
              id="typography"
              title="Typography"
              description="Inter across five weights (400 / 500 / 600 / 700 / 800). One sans-serif handles every surface — labels, body, numerics, and the big bold headlines from the case study."
            >
              <Example>
                <FontSpecimen />
              </Example>
            </Section>

            {/* Headers */}
            <Section
              id="headers"
              title="Headers"
              description="Top bar with brand mark, optional store-name pill, optional right slot, and optional back link."
            >
              <Example label="Default">
                <CosyHeader />
              </Example>
              <Example label="With store + back link">
                <CosyHeader storeName="Table 5 · Leslie K." backHref="#" backLabel="← Back" />
              </Example>
              <Example label="With right slot">
                <CosyHeader
                  storeName="Component library"
                  rightSlot={
                    <>
                      <Button variant="secondary" size="sm">Note</Button>
                      <Button variant="ghost" size="sm">Clear</Button>
                    </>
                  }
                />
              </Example>
            </Section>

            {/* Heroes */}
            <Section
              id="heroes"
              title="Heroes"
              description="Page intro block with optional eyebrow, headline, lede, illustration slot, and action row."
            >
              <Example>
                <div className="-mx-6 -my-6">
                  <CosyHero
                    eyebrow="Cosy POS"
                    title="Add dishes with a few taps"
                    lede="Each category of dishes on the menu is accented with a different color, which helps the waiters to navigate the menu more easily."
                    illustration={<><span aria-hidden>🍝</span><span aria-hidden>🥗</span><span aria-hidden>🍰</span></>}
                    actions={
                      <>
                        <Button>Place order</Button>
                        <Button variant="secondary">Layout of halls</Button>
                      </>
                    }
                  />
                </div>
              </Example>
            </Section>

            {/* Buttons */}
            <Section
              id="buttons"
              title="Buttons"
              description="Primary buttons are white-on-dark — the signature Cosy POS 'Place Order' style. Secondary is outlined. Ghost is text-only. Danger uses pink."
            >
              <Example label="Variants">
                <Row>
                  <Button>Place Order</Button>
                  <Button variant="secondary">Layout of halls</Button>
                  <Button variant="ghost">Cancel</Button>
                  <Button variant="danger">Delete</Button>
                </Row>
              </Example>
              <Example label="Sizes">
                <Row>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </Row>
              </Example>
              <Example label="With icons & states">
                <Row>
                  <Button iconLeft="+">Add</Button>
                  <Button variant="secondary" iconRight="→">Continue</Button>
                  <Button disabled>Disabled</Button>
                </Row>
              </Example>
            </Section>

            {/* Avatars */}
            <Section
              id="avatars"
              title="Avatars"
              description="Initial-based or image avatars with optional status dot. Pastel tones match the category palette (sage/lavender/blue/pink/periwinkle)."
            >
              <Example label="Sizes">
                <Row>
                  <Avatar name="Leslie K" size="xs" />
                  <Avatar name="Leslie K" size="sm" />
                  <Avatar name="Leslie K" size="md" />
                  <Avatar name="Leslie K" size="lg" />
                  <Avatar name="Leslie K" size="xl" />
                </Row>
              </Example>
              <Example label="Pastel tones">
                <Row>
                  <Avatar name="Leslie K" tone="lavender" />
                  <Avatar name="Cameron W" tone="sage" />
                  <Avatar name="Jacob J" tone="pink" />
                  <Avatar name="Devon L" tone="blue" />
                  <Avatar name="Arlene M" tone="periwinkle" />
                  <Avatar name="Surface" tone="surface" />
                </Row>
              </Example>
              <Example label="Status indicator">
                <Row>
                  <Avatar name="Online" tone="sage" status="online" />
                  <Avatar name="Busy" tone="pink" status="busy" />
                  <Avatar name="Offline" tone="surface" status="offline" />
                </Row>
              </Example>
              <Example label="Group + employee chips (Shift list)">
                <div className="space-y-3">
                  <AvatarGroup max={3}>
                    <Avatar name="Aliya" tone="lavender" />
                    <Avatar name="Bobur" tone="sage" />
                    <Avatar name="Chen" tone="blue" />
                    <Avatar name="Dilshod" tone="pink" />
                    <Avatar name="Eshmat" tone="periwinkle" />
                  </AvatarGroup>
                  <Row>
                    <EmployeeChip name="Leslie K" tone="lavender" />
                    <EmployeeChip name="Cameron W" tone="sage" />
                    <EmployeeChip name="Jacob J" tone="pink" />
                  </Row>
                </div>
              </Example>
            </Section>

            {/* Tags */}
            <Section
              id="tags"
              title="Tags"
              description="Compact pastel pills for statuses and badges (in process · paid · low stock). Five pastel tones plus a neutral surface tone."
            >
              <Example>
                <Row>
                  <Tag tone="sage">In process</Tag>
                  <Tag tone="lavender">Order #246</Tag>
                  <Tag tone="blue">Reserved</Tag>
                  <Tag tone="pink">Low stock</Tag>
                  <Tag tone="periwinkle">x2</Tag>
                  <Tag tone="surface">Draft</Tag>
                </Row>
              </Example>
            </Section>

            {/* Chips */}
            <Section
              id="chips"
              title="Chips"
              description="Tap targets for filters and tables. Active state shows a 2px white ring. Optional removable (×) variant for tag-style chips inside a TagInput."
            >
              <Example label="Default & active">
                <ChipDemo />
              </Example>
              <Example label="Removable (tag chips)">
                <Row>
                  <Chip removable>vip</Chip>
                  <Chip removable>wholesale</Chip>
                  <Chip removable>returning</Chip>
                  <Chip active removable>selected</Chip>
                </Row>
              </Example>
            </Section>

            {/* Segmented control */}
            <Section
              id="segmented"
              title="Segmented control"
              description="Pill tabs with shared selection state and optional count badges. Used for catalog filter tabs (All / Active / Inactive…) and date range presets (Yesterday / Today / Week / Month / Year)."
            >
              <Example>
                <SegmentedControlDemo />
              </Example>
            </Section>

            {/* Keyboard */}
            <Section
              id="kbd"
              title="Keyboard"
              description="Inline key chip used to surface keyboard shortcuts beside fields, buttons, and footer hints (J · K · L · O · / · arrows)."
            >
              <Example label="Inline shortcuts">
                <Row>
                  <span className="flex items-center gap-2 text-sm text-cosy-muted">
                    Customer <Kbd>J</Kbd>
                  </span>
                  <span className="flex items-center gap-2 text-sm text-cosy-muted">
                    Discount <Kbd>K</Kbd>
                  </span>
                  <span className="flex items-center gap-2 text-sm text-cosy-muted">
                    Pay <Kbd>L</Kbd>
                  </span>
                  <span className="flex items-center gap-2 text-sm text-cosy-muted">
                    Postpone <Kbd>O</Kbd>
                  </span>
                  <span className="flex items-center gap-2 text-sm text-cosy-muted">
                    Search <Kbd>/</Kbd>
                  </span>
                </Row>
              </Example>
              <Example label="Cart navigation hints">
                <Row>
                  <span className="flex items-center gap-2 text-sm text-cosy-muted">
                    Move in cart <Kbd>↑</Kbd> <Kbd>↓</Kbd>
                  </span>
                  <span className="flex items-center gap-2 text-sm text-cosy-muted">
                    Change quantity <Kbd>→</Kbd> <Kbd>←</Kbd>
                  </span>
                </Row>
              </Example>
            </Section>

            {/* Cards */}
            <Section
              id="cards"
              title="Cards"
              description="Surface containers — #292C2D background, 12px radius, no border. Optional soft shadow."
            >
              <Example label="Basic + elevated">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <div>
                        <CardTitle>Roast chicken</CardTitle>
                        <CardSubtitle>Order: 120</CardSubtitle>
                      </div>
                      <Tag tone="lavender">x2</Tag>
                    </CardHeader>
                    <p className="text-sm text-cosy-muted-2">Today's upsale · added to 12 orders this hour.</p>
                  </Card>
                  <Card elevated>
                    <CardHeader>
                      <div>
                        <CardTitle>Carbonara Paste</CardTitle>
                        <CardSubtitle>Order: 114</CardSubtitle>
                      </div>
                      <Tag tone="sage">Popular</Tag>
                    </CardHeader>
                    <p className="text-sm text-cosy-muted-2">Top-3 most ordered today.</p>
                  </Card>
                </div>
              </Example>
            </Section>

            {/* Stat cards */}
            <Section
              id="stat-cards"
              title="Stat cards"
              description="Dashboard tiles — circular icon top, label, big numeric value. The Revenue tile uses the inverted (white) state to draw the eye, just like the case study."
            >
              <Example label="Dashboard row">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <StatCard label="Revenue" value="$1200.56" icon="$" active />
                  <StatCard label="Paid orders" value="198" icon="📋" />
                  <StatCard label="Tip amount" value="$186.72" icon="💰" />
                  <StatCard label="Dishes sold" value="227" icon="🛒" />
                </div>
              </Example>
            </Section>

            {/* Category cards */}
            <Section
              id="category-cards"
              title="Category cards"
              description="Pastel menu category tiles. Each category gets its own tone so waiters can navigate the menu by color. Active state shows a white ring."
            >
              <Example>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <CategoryCard name="All" count={75} tone="surface" active icon="🍽️" />
                  <CategoryCard name="Breakfast" count={13} tone="blue" icon="🍳" />
                  <CategoryCard name="Soups" count={8} tone="lavender" icon="🍜" />
                  <CategoryCard name="Pasta" count={10} tone="periwinkle" icon="🍝" />
                  <CategoryCard name="Sushi" count={15} tone="sage" icon="🍣" />
                  <CategoryCard name="Main course" count={7} tone="pink" icon="🍖" />
                  <CategoryCard name="Desserts" count={9} tone="lavender" icon="🍰" />
                  <CategoryCard name="Drinks" count={11} tone="periwinkle" icon="🥤" />
                </div>
              </Example>
            </Section>

            {/* Product cards */}
            <Section
              id="product-cards"
              title="Product cards"
              description="Menu items with quantity stepper. The 'Orders → Kitchen' top label and border turn pastel when an item is in the cart."
            >
              <Example>
                <ProductCardDemo />
              </Example>
            </Section>

            {/* Lists */}
            <Section
              id="lists"
              title="Lists"
              description="Three list patterns from the case study: order line items (numbered chip + name×qty + price + remove), Today's upsale row (icon + name + order count), and sidebar nav rows (active/inactive). Plus a generic ListRow primitive."
            >
              <Example label="Order line items">
                <ul>
                  <OrderLineItem index={1} name="Roast chicken" qty={2} price="$25.50" removable />
                  <OrderLineItem index={2} name="Red caviar" qty={3} price="$36.90" removable />
                  <OrderLineItem index={3} name="Citrus lemonade" qty={2} price="$4.00" removable />
                </ul>
              </Example>

              <Example label="Today's upsale">
                <ul className="divide-y divide-cosy-line">
                  <UpsaleRow name="Roast chicken" orderCount={120} icon="🍗" />
                  <UpsaleRow name="Carbonara Paste" orderCount={114} icon="🍝" />
                  <UpsaleRow name="Fried egg" orderCount={98} icon="🍳" />
                  <UpsaleRow name="Norwegian soup" orderCount={82} icon="🍲" />
                </ul>
              </Example>

              <Example label="Sidebar nav rows">
                <div className="max-w-[220px] space-y-1 rounded-xl bg-cosy-surface-2 p-3">
                  <NavItem active>Menu</NavItem>
                  <NavItem>Tables</NavItem>
                  <NavItem>Reservation</NavItem>
                  <NavItem>Chat</NavItem>
                  <NavItem>Dashboard</NavItem>
                  <NavItem>Accounting</NavItem>
                  <NavItem>Settings</NavItem>
                </div>
              </Example>

              <Example label="Generic ListRow (avatar + meta + trailing)">
                <List>
                  <ListRow
                    leading={<Avatar name="Leslie K" tone="lavender" />}
                    title="Leslie K."
                    subtitle="Shift 2 · 6 items · Kitchen"
                    trailing={<Tag tone="sage">In process</Tag>}
                  />
                  <ListRow
                    leading={<Avatar name="Cameron W" tone="sage" />}
                    title="Cameron W."
                    subtitle="Shift 1 · 4 items · Bar"
                    trailing={<Tag tone="lavender">Active</Tag>}
                  />
                  <ListRow
                    leading={<Avatar name="Jacob J" tone="pink" />}
                    title="Jacob J."
                    subtitle="Shift 1 · 8 items · Kitchen"
                    trailing={<Tag tone="pink">Break</Tag>}
                  />
                </List>
              </Example>
            </Section>

            {/* Nav rail */}
            <Section
              id="nav-rail"
              title="Nav rail"
              description="Vertical icon-only sidebar for app shells. Brand mark and an optional collapse slot at the top, primary nav in the middle, account / help slot at the bottom."
            >
              <Example>
                <div className="flex">
                  <NavRail
                    brand={<>Z</>}
                    collapseSlot={<span aria-hidden className="text-base">»</span>}
                    items={[
                      { id: 'cart', icon: '🛒', label: 'Cart' },
                      { id: 'scan', icon: '📦', label: 'Scan', active: true },
                      { id: 'people', icon: '👤', label: 'Customers' },
                      { id: 'promo', icon: '%', label: 'Marketing' },
                      { id: 'analytics', icon: '◔', label: 'Analytics' },
                      { id: 'inventory', icon: '🗂', label: 'Inventory' },
                      { id: 'settings', icon: '⚙', label: 'Settings' },
                    ]}
                    bottomItems={[
                      { id: 'account', icon: 'FS', label: 'Account' },
                      { id: 'help', icon: '?', label: 'Help' },
                    ]}
                  />
                  <div className="flex-1" />
                </div>
              </Example>
            </Section>

            {/* Menus */}
            <Section
              id="menus"
              title="Menus"
              description="Popover menu for sidebar flyouts and right-click actions. Composes a header (icon + title), divider, and items with optional left icons."
            >
              <Example label="Sidebar flyout">
                <div className="flex justify-start">
                  <Menu className="max-w-[260px]">
                    <MenuHeader icon="%">Marketing</MenuHeader>
                    <MenuItem>Promotions</MenuItem>
                    <MenuItem>Promo codes</MenuItem>
                    <MenuItem>SMS campaigns</MenuItem>
                  </Menu>
                </div>
              </Example>
              <Example label="Order actions">
                <div className="flex justify-start">
                  <Menu>
                    <MenuItem iconLeft="✎">Edit order</MenuItem>
                    <MenuItem iconLeft="📋">Duplicate</MenuItem>
                    <MenuItem iconLeft="📤">Export receipt</MenuItem>
                    <MenuItem iconLeft="⌫" className="text-cosy-pink hover:bg-cosy-pink/10">
                      Delete
                    </MenuItem>
                  </Menu>
                </div>
              </Example>
            </Section>

            {/* Tables */}
            <Section
              id="tables"
              title="Tables"
              description="Table primitives (Table / Tr / Th / Td) + a composed OrderTable used on the Orders screen — QT · Items · Price columns, Subtotal row, plus delete / edit / payment actions."
            >
              <Example label="Order tables grid">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <OrderTable
                    tableLabel="A1"
                    orderNumber="#412"
                    lines={[
                      { qty: 1, name: 'Fish and chips', price: '$17.50' },
                      { qty: 1, name: 'Lemonade', price: '$7.25' },
                      { qty: 3, name: 'Cappuccino', price: '$8.00' },
                      { qty: 3, name: 'Apple pie', price: '$11.50' },
                    ]}
                    subtotal="$44.25"
                  />
                  <OrderTable
                    tableLabel="B2"
                    orderNumber="#410"
                    lines={[
                      { qty: 1, name: 'Lobster', price: '$13.40' },
                      { qty: 2, name: 'Orange juice', price: '$5.50' },
                      { qty: 1, name: 'Red caviar', price: '$12.30' },
                      { qty: 2, name: 'Herbal tea', price: '$4.50' },
                    ]}
                    subtotal="$18.90"
                  />
                  <OrderTable
                    tableLabel="D4"
                    orderNumber="#407"
                    lines={[
                      { qty: 2, name: 'Carbonara Paste', price: '$17.50' },
                      { qty: 2, name: 'Orange juice', price: '$5.50' },
                      { qty: 2, name: 'Lemonade', price: '$7.25' },
                    ]}
                    subtotal="$41.55"
                  />
                </div>
              </Example>
            </Section>

            {/* Data tables */}
            <Section
              id="data-tables"
              title="Data tables"
              description="Long-form table for catalog and inventory views. Same Table primitives as above, plus a checkbox column, alternating row backgrounds, and a settings gear in the header."
            >
              <Example label="Product catalog">
                <div className="overflow-x-auto rounded-xl border border-cosy-line">
                  <Table className="min-w-[760px]">
                    <THead>
                      <Tr className="border-b-cosy-surface-3">
                        <Th className="w-10">
                          <Checkbox />
                        </Th>
                        <Th>Photo</Th>
                        <Th>Name</Th>
                        <Th>SKU</Th>
                        <Th>Barcode</Th>
                        <Th>Category</Th>
                        <Th>Supplier</Th>
                        <Th align="right">Qty</Th>
                        <Th className="w-10 text-right">⚙</Th>
                      </Tr>
                    </THead>
                    <TBody>
                      {[
                        {
                          name: 'Boxing wraps 3m pair',
                          sku: 'BX-WR100',
                          bar: '4780000082692',
                          cat: 'Sport',
                          sup: 'Sport Import TJ',
                          qty: 172,
                        },
                        {
                          name: 'Nike sports bag',
                          sku: 'BG-NK099',
                          bar: '4780000049651',
                          cat: 'Sport',
                          sup: 'Sport Import TJ',
                          qty: 139,
                          striped: true,
                        },
                        {
                          name: 'Resistance band set',
                          sku: 'EB-ST095',
                          bar: '4780000083792',
                          cat: 'Sport',
                          sup: 'Sport Import TJ',
                          qty: 161,
                        },
                        {
                          name: 'Food container set',
                          sku: 'CN-FD087',
                          bar: '4780000040828',
                          cat: 'Home goods',
                          sup: 'HomeStore TJ',
                          qty: 172,
                          striped: true,
                        },
                      ].map((r) => (
                        <Tr
                          key={r.sku}
                          className={r.striped ? 'bg-cosy-surface/30' : ''}
                        >
                          <Td>
                            <Checkbox />
                          </Td>
                          <Td>
                            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-cosy-surface text-cosy-muted-2">
                              ▤
                            </span>
                          </Td>
                          <Td className="font-medium text-cosy-blue">{r.name}</Td>
                          <Td className="tabular-nums text-cosy-muted">{r.sku}</Td>
                          <Td className="tabular-nums text-cosy-muted">{r.bar}</Td>
                          <Td className="text-cosy-muted">{r.cat}</Td>
                          <Td className="text-cosy-muted">{r.sup}</Td>
                          <Td align="right" className="tabular-nums">{r.qty} pcs</Td>
                          <Td />
                        </Tr>
                      ))}
                    </TBody>
                  </Table>
                </div>
              </Example>
            </Section>

            {/* Forms */}
            <Section
              id="forms"
              title="Forms"
              description="Inputs, selects, toggles, checkboxes, and radio groups matching the dark surface aesthetic. Focus moves a 1px white ring around the field. Invalid state uses pink."
            >
              <Example>
                <FormDemo />
              </Example>
              <Example label="Checkboxes">
                <Row>
                  <Checkbox label="All sellers" checked readOnly />
                  <Checkbox label="In stock only" readOnly />
                  <Checkbox label="Wholesale" checked readOnly />
                </Row>
              </Example>
              <Example label="Phone input with country prefix">
                <div className="max-w-md">
                  <PhoneInput
                    label="Phone"
                    required
                    countryFlag="🇹🇯"
                    countryCode="+992"
                    placeholder="Enter phone"
                  />
                </div>
              </Example>
              <Example label="Tag input (chip field)">
                <TagInputDemo />
              </Example>
            </Section>

            {/* Steppers */}
            <Section
              id="steppers"
              title="Steppers"
              description="Inline numeric stepper used in cart line items and bulk-edit fields — value, optional unit (pcs / kg), with chevron up/down on the right."
            >
              <Example>
                <StepperDemo />
              </Example>
            </Section>

            {/* Combobox */}
            <Section
              id="combobox"
              title="Combobox"
              description="Search input + results panel for product / customer lookup. Each result is an avatar/image cell, multi-line text, and optional trailing meta (price, qty). Use Highlight inside titles and subtitles to mark the matched substring."
            >
              <Example>
                <ComboboxDemo />
              </Example>
            </Section>

            {/* Highlight */}
            <Section
              id="highlight"
              title="Highlight"
              description="Inline text matcher — wraps the matched substring in a pastel pill. Used inside Combobox results to surface the search term in product names, SKUs, and barcodes."
            >
              <Example>
                <Row>
                  <span className="text-sm text-cosy-text">
                    SW-FB<Highlight text="047" query="047" />
                  </span>
                  <span className="text-sm text-cosy-text">
                    <Highlight text="478" query="478" />
                    0000041385
                  </span>
                  <span className="text-sm text-cosy-muted">
                    Smart fitness <Highlight text="watch" query="watch" />
                  </span>
                </Row>
              </Example>
            </Section>

            {/* Date picker */}
            <Section
              id="date-picker"
              title="Date picker"
              description="Calendar grid with selected day, range presets sidebar (Yesterday / Today / This week / This month / This year), and a dd · mm · yyyy → dd · mm · yyyy footer with an Apply button."
            >
              <Example>
                <DatePickerDemo />
              </Example>
            </Section>

            {/* Empty states */}
            <Section
              id="empty-states"
              title="Empty states"
              description="Dashed-border placeholder for charts, tables, and panels with no data yet. Optional icon, title, description, and action."
            >
              <Example label="Chart empty state">
                <EmptyState
                  icon={<span className="text-2xl">📊</span>}
                  title="No data to show"
                  description="To see the chart, start selling products or pick another time range."
                />
              </Example>
              <Example label="Empty list with action">
                <EmptyState
                  title="No customers yet"
                  description="Customers appear here as soon as they're added at checkout."
                  action={
                    <Button variant="secondary" size="sm" iconLeft="+">
                      Add customer
                    </Button>
                  }
                />
              </Example>
            </Section>

            {/* Payment methods */}
            <Section
              id="payment-methods"
              title="Payment methods"
              description="Three square icon buttons (Cash · Bank Card · E-Wallet). Selected state inverts to white border + filled surface."
            >
              <Example>
                <PaymentMethodDemo />
              </Example>
            </Section>

            {/* Payment rows */}
            <Section
              id="payment-rows"
              title="Payment rows"
              description="Horizontal payment-method tile for the checkout grid — card icon, name, F-key shortcut, and a + button to apply the method."
            >
              <Example>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  <PaymentRow icon="💵" name="Cash" shortcut="F1" />
                  <PaymentRow icon="💳" name="Card" shortcut="F2" />
                  <PaymentRow icon="💳" name="UzCard" shortcut="F3" />
                  <PaymentRow icon="💳" name="HUMO" shortcut="F4" />
                  <PaymentRow icon="💳" name="VISA" shortcut="F5" />
                  <PaymentRow icon="💳" name="Mastercard" shortcut="F6" />
                  <PaymentRow icon="💳" name="UnionPay" shortcut="F7" />
                  <PaymentRow icon="💵" name="Credit" shortcut="F8" />
                </div>
              </Example>
            </Section>

            {/* Numpad */}
            <Section
              id="numpad"
              title="Numpad"
              description="3×4 grid for PIN entry, cash entry, or quantity input. Delete key uses pink to call out the destructive action."
            >
              <Example>
                <NumpadDemo />
              </Example>
            </Section>

            {/* Shortcuts panel */}
            <Section
              id="shortcuts"
              title="Shortcuts panel"
              description="Categorized keyboard-shortcut reference. Two-column grid of groups — title in blue, then label/keys rows. Use one Kbd per key; arrow groups pass two keys."
            >
              <Example>
                <ShortcutsPanel
                  title="Shortcuts"
                  action={
                    <button
                      type="button"
                      aria-label="Collapse"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-cosy-surface text-cosy-muted-2 transition hover:text-cosy-text"
                    >
                      ▾
                    </button>
                  }
                >
                  <ShortcutGroup title="Search and add products">
                    <ShortcutRow label="Search products" keys="/" />
                    <ShortcutRow label="Move in search" keys={['↑', '↓']} />
                    <ShortcutRow label="Add product" keys="Enter" />
                  </ShortcutGroup>
                  <ShortcutGroup title="Cart">
                    <ShortcutRow label="Move in cart" keys={['↑', '↓']} />
                    <ShortcutRow label="Change quantity" keys={['→', '←']} />
                    <ShortcutRow label="Manual product discount" keys="S" />
                    <ShortcutRow label="Remove product" keys="D" />
                  </ShortcutGroup>
                  <ShortcutGroup title="Customer & discount">
                    <ShortcutRow label="Add customer" keys="J" />
                    <ShortcutRow label="Manual cart discount" keys="K" />
                    <ShortcutRow label="Toggle discount type" keys={['→', '←']} />
                  </ShortcutGroup>
                  <ShortcutGroup title="Payment">
                    <ShortcutRow label="Pick payment type" keys="L" />
                    <ShortcutRow label="Quick pay — cash" keys="F1" />
                    <ShortcutRow label="Quick pay — card" keys="F2" />
                  </ShortcutGroup>
                </ShortcutsPanel>
              </Example>
            </Section>

            {/* Receipt */}
            <Section
              id="receipt"
              title="Receipt"
              description="Printable sale receipt with zigzag-cut top/bottom edges. White surface, monospace, dotted dot-leaders between label and value, bold totals, and a barcode placeholder."
            >
              <Example>
                <div className="flex justify-center">
                  <Receipt className="w-full max-w-xs">
                    <ReceiptDivider />
                    <div className="space-y-1.5">
                      <p>
                        <span className="font-bold">Sale:</span> #000402080246
                      </p>
                      <p>
                        <span className="font-bold">Store Sabad</span>
                      </p>
                      <p>
                        <span className="font-bold">Date:</span> 28.04.2026, 23:23
                      </p>
                      <p>
                        <span className="font-bold">Hours:</span> 09:00 – 18:00
                      </p>
                      <p>
                        <span className="font-bold">Seller:</span> Fayzali Saidov
                      </p>
                      <p>
                        <span className="font-bold">Cashier:</span> Fayzali Saidov
                      </p>
                      <p>
                        <span className="font-bold">Customer:</span>
                      </p>
                      <p>
                        <span className="font-bold">Contact:</span>
                      </p>
                    </div>
                    <ReceiptDivider />
                    <ReceiptItem
                      index={1}
                      name="Smart fitness watch"
                      qty={1}
                      unitPrice="1 687"
                      total="1 687 TJS"
                    />
                    <ReceiptDivider />
                    <ReceiptLine label="Subtotal" value="1 687 TJS" />
                    <ReceiptLine label="TOTAL" value="1 687 TJS" bold />
                    <ReceiptDivider />
                    <div className="mt-2 flex h-12 items-center justify-center bg-[repeating-linear-gradient(90deg,#111315_0,#111315_2px,transparent_2px,transparent_5px,#111315_5px,#111315_6px,transparent_6px,transparent_10px)]" />
                  </Receipt>
                </div>
              </Example>
            </Section>

            {/* Sheets */}
            <Section
              id="sheets"
              title="Sheets"
              description="One reusable side-sheet primitive that opens from any of the four edges. Backdrop click and ESC close. Body scroll locked while open. Focus moves into the panel on open and returns on close."
            >
              <Example>
                <SheetDemo />
              </Example>
            </Section>

            {/* Footers */}
            <Section
              id="footers"
              title="Footers"
              description="Bottom bar with a note slot and an optional back link."
            >
              <Example label="Default">
                <div className="-mx-6 -my-6">
                  <CosyFooter />
                </div>
              </Example>
              <Example label="With back link">
                <div className="-mx-6 -my-6">
                  <CosyFooter
                    note={
                      <>
                        Components live in{' '}
                        <code className="rounded bg-cosy-surface px-1.5 py-0.5 font-mono text-xs text-cosy-text">components/cosy/</code>
                      </>
                    }
                    backHref="#"
                    backLabel="← Back to home"
                  />
                </div>
              </Example>
            </Section>
          </div>
        </div>
      </div>

      <CosyFooter
        note={
          <>
            Cosy POS theme · components live in{' '}
            <code className="rounded bg-cosy-surface px-1.5 py-0.5 font-mono text-xs text-cosy-text">components/cosy/</code>
          </>
        }
        backHref={`/${locale}`}
      />
    </main>
  );
}
