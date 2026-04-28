export type SolutionSlug =
  | 'clothing'
  | 'shoes'
  | 'grocery'
  | 'hardware'
  | 'cosmetics'
  | 'accessories'
  | 'electronics'
  | 'home-goods';

export type Solution = {
  slug: SolutionSlug;
  image: string;
  alt: string;
  /** Icon glyph as filled SVG path (no stroke). */
  icon: string;
};

/** 8 store types with curated Unsplash photos and filled SVG glyphs. */
export const SOLUTIONS: Solution[] = [
  {
    slug: 'clothing',
    alt: 'Modern clothing boutique with garment racks',
    image:
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1600&q=80&auto=format&fit=crop',
    icon: 'M8 3l-4 3v4h2v11h12V10h2V6l-4-3-3 2-2 1-2-1-1-0-0-0zM12 7l1-1h1l2 1 2-1v2h-2v10H8V8H6V6l2 1 1-0 2 1 1 0z',
  },
  {
    slug: 'shoes',
    alt: 'Shelves of sneakers in a shoe store',
    image:
      'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=1600&q=80&auto=format&fit=crop',
    icon: 'M2 12c0-1 1-2 2-2h3l1-2h4l2 2c3 0 7 1 7 4v3H2v-5zm2 3h16v1H4v-1z',
  },
  {
    slug: 'grocery',
    alt: 'Fresh produce stall in a grocery market',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80&auto=format&fit=crop',
    icon: 'M4 6h16l-1 12H5L4 6zm3 3v7h2V9H7zm4 0v7h2V9h-2zm4 0v7h2V9h-2zM6 3h12v2H6z',
  },
  {
    slug: 'hardware',
    alt: 'Hardware and construction tools on display',
    image:
      'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=1600&q=80&auto=format&fit=crop',
    icon: 'M13.5 3l-2 2 1.5 1.5-7 7-3 3 2 2 3-3 7-7L16 9l2-2-4.5-4zM20 14l-3 3 2 2 3-3-2-2z',
  },
  {
    slug: 'cosmetics',
    alt: 'Beauty and cosmetics products on shelves',
    image:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600&q=80&auto=format&fit=crop',
    icon: 'M9 2h6l1 3h1v2h-1v14a2 2 0 01-2 2h-4a2 2 0 01-2-2V7H7V5h1l1-3zm1 2l-.5 1h5L14 4h-4zm-1 5v12h6V9H9z',
  },
  {
    slug: 'accessories',
    alt: 'Leather bags and accessories display',
    image:
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1600&q=80&auto=format&fit=crop',
    icon: 'M8 7V5a4 4 0 018 0v2h3v14H5V7h3zm2 0h4V5a2 2 0 00-4 0v2zM7 9v10h10V9H7z',
  },
  {
    slug: 'electronics',
    alt: 'Electronics store with smartphones on display',
    image:
      'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1600&q=80&auto=format&fit=crop',
    icon: 'M3 4h18a1 1 0 011 1v11a1 1 0 01-1 1h-7l1 3h2v2H7v-2h2l1-3H3a1 1 0 01-1-1V5a1 1 0 011-1zm1 2v9h16V6H4z',
  },
  {
    slug: 'home-goods',
    alt: 'Home furniture and decor store interior',
    image:
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1600&q=80&auto=format&fit=crop',
    icon: 'M3 10h18v2h-1v7h-2v-4H6v4H4v-7H3v-2zm3-4h12l1 3H5l1-3zm0 8v2h12v-2H6z',
  },
];

export const SOLUTIONS_BY_SLUG: Record<SolutionSlug, Solution> = Object.fromEntries(
  SOLUTIONS.map((s) => [s.slug, s]),
) as Record<SolutionSlug, Solution>;
