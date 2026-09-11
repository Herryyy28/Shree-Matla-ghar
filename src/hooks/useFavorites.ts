import { useState, useEffect, useCallback } from 'react';
import {
  isProductSaved,
  toggleSaveProduct,
  getSavedProductIds,
} from '../utils/favorites';
import { trackEvent } from '../utils/analytics';

/**
 * Hook for managing a single product's saved/favorite state.
 */
export function useFavorite(productId: string) {
  const [saved, setSaved] = useState(() => isProductSaved(productId));

  useEffect(() => {
    const handleChange = () => {
      setSaved(isProductSaved(productId));
    };
    window.addEventListener('smg-favorites-changed', handleChange);
    return () => window.removeEventListener('smg-favorites-changed', handleChange);
  }, [productId]);

  const toggle = useCallback(() => {
    const nowSaved = toggleSaveProduct(productId);
    setSaved(nowSaved);
    trackEvent({
      event: nowSaved ? 'product_save' : 'product_unsave',
      label: productId,
    });
  }, [productId]);

  return { saved, toggle };
}

/**
 * Hook for getting all saved product IDs (reactive).
 */
export function useFavorites() {
  const [savedIds, setSavedIds] = useState<string[]>(() => getSavedProductIds());

  useEffect(() => {
    const handleChange = (e: Event) => {
      const custom = e as CustomEvent<string[]>;
      setSavedIds(custom.detail ?? getSavedProductIds());
    };
    window.addEventListener('smg-favorites-changed', handleChange);
    return () => window.removeEventListener('smg-favorites-changed', handleChange);
  }, []);

  return { savedIds, count: savedIds.length };
}
