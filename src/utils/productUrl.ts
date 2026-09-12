import { Product } from '../types';
import { BUSINESS_CONFIG } from '../config/business';

/**
 * Gets the canonical relative path for a product (e.g. /product/commercial-heavy-duty-drum-tandoor)
 */
export function getProductCanonicalPath(product: Product): string {
  if (!product || !product.slug) {
    return '/products';
  }
  return `/product/${product.slug}`;
}

/**
 * Builds the full canonical URL for a product, including origin
 */
export function buildProductUrl(product: Product, customOrigin?: string): string {
  if (!product) return '';
  
  const path = getProductCanonicalPath(product);
  
  // Use custom origin, environment variable, window origin, or business config fallback
  let origin = customOrigin || (import.meta.env && import.meta.env.VITE_SITE_URL);
  
  if (!origin && typeof window !== 'undefined' && window.location.origin) {
    origin = window.location.origin;
  }

  // Never share localhost or development URLs in product share links
  if (!origin || origin.includes('localhost') || origin.includes('127.0.0.1')) {
    origin = BUSINESS_CONFIG.siteUrl || 'https://shreematlaghar.vercel.app';
  }

  // Ensure no trailing slash on origin
  const cleanOrigin = origin.replace(/\/+$/, '');
  return `${cleanOrigin}${path}`;
}

