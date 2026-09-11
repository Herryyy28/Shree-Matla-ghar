/**
 * SHREE MATLA GHAR — Saved/Favorites System
 *
 * Lightweight localStorage-based product saving.
 * NO account required. Works instantly in browser.
 */

import { PRODUCTS } from '../data/products';

const STORAGE_KEY = 'smg_saved_products';

/** Get all saved product IDs from localStorage, validated against active catalog */
export function getSavedProductIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    
    // Validate that saved IDs actually exist in the current product catalog
    const validProductIds = new Set(PRODUCTS.map((p) => p.id));
    return parsed.filter((id): id is string => typeof id === 'string' && validProductIds.has(id));
  } catch {
    return [];
  }
}

/** Check if a product ID is saved */
export function isProductSaved(productId: string): boolean {
  return getSavedProductIds().includes(productId);
}

/** Save a product by ID */
export function saveProduct(productId: string): void {
  const ids = getSavedProductIds();
  if (!ids.includes(productId)) {
    ids.push(productId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    window.dispatchEvent(new CustomEvent('smg-favorites-changed', { detail: ids }));
  }
}

/** Remove a saved product by ID */
export function unsaveProduct(productId: string): void {
  const ids = getSavedProductIds().filter((id) => id !== productId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  window.dispatchEvent(new CustomEvent('smg-favorites-changed', { detail: ids }));
}

/** Toggle saved state. Returns new saved state (true = now saved). */
export function toggleSaveProduct(productId: string): boolean {
  if (isProductSaved(productId)) {
    unsaveProduct(productId);
    return false;
  } else {
    saveProduct(productId);
    return true;
  }
}

/** Get saved product count */
export function getSavedCount(): number {
  return getSavedProductIds().length;
}

/** Clear all saved products */
export function clearAllSaved(): void {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('smg-favorites-changed', { detail: [] }));
}
