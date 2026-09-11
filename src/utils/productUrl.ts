import { Product } from '../types';

/**
 * Gets the canonical relative path for a product (e.g. /pottery/matka/traditional-clay-matka-with-tap)
 */
export function getProductCanonicalPath(product: Product): string {
  if (!product || !product.slug) {
    return '/pottery';
  }
  const category = product.category ? product.category.toLowerCase() : 'all';
  return `/pottery/${category}/${product.slug}`;
}

/**
 * Builds the full canonical URL for a product, including origin
 */
export function buildProductUrl(product: Product, customOrigin?: string): string {
  if (!product) return '';
  
  const path = getProductCanonicalPath(product);
  
  // Use custom origin, window origin, or production fallback
  let origin = customOrigin;
  if (!origin && typeof window !== 'undefined') {
    origin = window.location.origin;
  }
  if (!origin) {
    origin = 'https://shreematlaghar.com';
  }

  // Ensure no trailing slash on origin
  const cleanOrigin = origin.replace(/\/+$/, '');
  return `${cleanOrigin}${path}`;
}
