/**
 * SHREE MATLA GHAR — Seasonal Collections Architecture
 *
 * Data-driven seasonal collection system.
 * Add new collections here without touching page components.
 *
 * To activate a collection: set active: true
 * To deactivate:           set active: false
 */

export interface SeasonalCollection {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  bannerBg: string;  // Tailwind bg color class e.g. 'bg-amber-900'
  icon: string;
  productIds: string[];    // IDs from products.ts
  productCategories: string[]; // category slugs to auto-include
  ctaText: string;
  ctaPath: string;
  active: boolean;
  priority: number;  // lower = shown first
  meta?: {
    startDate?: string; // ISO date string — for seasonal visibility
    endDate?: string;
  };
}

export const SEASONAL_COLLECTIONS: SeasonalCollection[] = [
  {
    id: "collection-ganpati-2024",
    slug: "ganpati",
    title: "Eco Ganpati Collection",
    subtitle: "100% Shadu Mati Idols",
    description: "Celebrate Ganesh Chaturthi responsibly with genuine eco-friendly clay Ganpati idols that dissolve safely during visarjan. Handcrafted using natural riverbed clay.",
    badge: "Eco Special",
    bannerBg: "bg-amber-900",
    icon: "🙏",
    productIds: ["ganpati-shadu-01"],
    productCategories: ["ganpati"],
    ctaText: "Book Eco Ganpati",
    ctaPath: "/ganpati",
    active: true,
    priority: 1,
    meta: {
      startDate: "2024-08-01",
      endDate: "2024-09-30",
    },
  },
  {
    id: "collection-tandoor",
    slug: "tandoor-specialist",
    title: "Tandoor Specialist Collection",
    subtitle: "Drum · Trolly · SS Tandoor",
    description: "Commercial and home-grade clay tandoors for restaurants, caterers, and home chefs. Our flagship specialty — available in custom sizes.",
    badge: "Flagship Specialty",
    bannerBg: "bg-clay-900",
    icon: "🔥",
    productIds: ["tandoor-drum-01", "tandoor-trolly-02", "tandoor-ss-03"],
    productCategories: ["tandoor"],
    ctaText: "Explore Tandoors",
    ctaPath: "/tandoor",
    active: true,
    priority: 2,
  },
  {
    id: "collection-summer-matka",
    slug: "summer-matka",
    title: "Summer Mitti Matka",
    subtitle: "Natural Water Cooling",
    description: "Beat the heat naturally with hand-shaped clay matkas and surahis that cool water through evaporative cooling — no refrigerator needed.",
    badge: "Summer Essential",
    bannerBg: "bg-sky-900",
    icon: "💧",
    productIds: ["matka-deshi-01", "matka-surahi-02"],
    productCategories: ["matka"],
    ctaText: "Shop Water Pots",
    ctaPath: "/products?category=matka",
    active: true,
    priority: 3,
  },
  {
    id: "collection-diwali",
    slug: "diwali-pottery",
    title: "Diwali Pottery",
    subtitle: "Diyas · Planters · Gifting",
    description: "Traditional earthen oil diyas, decorative terracotta planters, and gifting pottery for the festival of lights.",
    badge: "Festive Collection",
    bannerBg: "bg-orange-900",
    icon: "🪔",
    productIds: ["diya-decorative-01", "planter-gamla-01"],
    productCategories: ["diya", "planters"],
    ctaText: "Shop Diwali Pottery",
    ctaPath: "/products?category=diya",
    active: false, // Not active outside Diwali season
    priority: 4,
    meta: {
      startDate: "2024-10-01",
      endDate: "2024-11-15",
    },
  },
];

/** Get only active collections, sorted by priority */
export function getActiveCollections(): SeasonalCollection[] {
  return SEASONAL_COLLECTIONS
    .filter((c) => c.active)
    .sort((a, b) => a.priority - b.priority);
}

/** Get a collection by slug */
export function getCollectionBySlug(slug: string): SeasonalCollection | undefined {
  return SEASONAL_COLLECTIONS.find((c) => c.slug === slug);
}
