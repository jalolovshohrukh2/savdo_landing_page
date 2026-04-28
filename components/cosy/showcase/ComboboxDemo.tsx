'use client';

import { useState } from 'react';
import { SearchInput } from '../Form';
import { Combobox, type ComboboxResult } from '../Combobox';
import { Highlight } from '../Highlight';

const PRODUCTS = [
  { name: 'Smart fitness watch', sku: 'SW-FB047', barcode: '4780000041385', price: '1 687', qty: 81 },
  { name: 'Nike sports bag', sku: 'BG-NK099', barcode: '4780000049651', price: '217', qty: 139 },
  { name: 'Boxing wraps 3m pair', sku: 'BX-WR100', barcode: '4780000082692', price: '238', qty: 172 },
  { name: 'Nike sports shorts', sku: 'SH-NK096', barcode: '4780000037938', price: '121', qty: 140 },
  { name: 'Gym training gloves', sku: 'GL-GM098', barcode: '478000047353', price: '197', qty: 97 },
  { name: 'Adidas sports tank', sku: 'TK-AD097', barcode: '4780000055745', price: '262', qty: 36 },
  { name: 'Dumbbells 2kg pair', sku: 'DB-2K093', barcode: '4780000027154', price: '201', qty: 104 },
  { name: 'Sports water bottle 750ml', sku: 'WB-SP086', barcode: '4780000018981', price: '257', qty: 50 },
];

export function ComboboxDemo() {
  const [query, setQuery] = useState('47');

  const results: ComboboxResult[] = PRODUCTS
    .filter((p) =>
      query
        ? `${p.name} ${p.sku} ${p.barcode}`.toLowerCase().includes(query.toLowerCase())
        : true
    )
    .map((p) => ({
      id: p.sku,
      image: <span aria-hidden>▤</span>,
      title: <Highlight text={p.name} query={query} />,
      subtitle: (
        <span>
          <Highlight text={p.sku} query={query} /> /{' '}
          <Highlight text={p.barcode} query={query} />
        </span>
      ),
      trailingTop: <>{p.price} TJS</>,
      trailingBottom: <>Qty: {p.qty} pcs</>,
    }));

  return (
    <div className="flex flex-col gap-3">
      <SearchInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="SKU, barcode, name"
        shortcut="/"
      />
      <Combobox results={results} />
    </div>
  );
}
