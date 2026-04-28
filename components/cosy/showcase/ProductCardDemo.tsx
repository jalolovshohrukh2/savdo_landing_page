'use client';

import { useState } from 'react';
import { ProductCard } from '../ProductCard';

export function ProductCardDemo() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(2);
  const [c, setC] = useState(0);
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <ProductCard
        name="Roast chicken"
        price="$12.75"
        accent="pink"
        qty={a}
        onIncrement={() => setA((q) => q + 1)}
        onDecrement={() => setA((q) => Math.max(0, q - 1))}
      />
      <ProductCard
        name="Fillet steak"
        price="$11.60"
        accent="lavender"
        qty={b}
        onIncrement={() => setB((q) => q + 1)}
        onDecrement={() => setB((q) => Math.max(0, q - 1))}
      />
      <ProductCard
        name="Buffalo wings"
        price="$8.85"
        accent="sage"
        qty={c}
        onIncrement={() => setC((q) => q + 1)}
        onDecrement={() => setC((q) => Math.max(0, q - 1))}
      />
    </div>
  );
}
