import { MEDIA_ASSETS, OFFICIAL_GOOGLE_MAPS_LINK } from '../data/mediaAssets';
import { MediaAsset } from '../types';

/**
 * MEDIA VALIDATION UTILITY FOR SHREE MATLA GHAR
 * 
 * STRICT MANDATE:
 * - Reject any stock photos (Unsplash, Pexels, Pixabay, etc.), AI-generated images, or third-party web images.
 * - Only allow verified media associated with Shree Matla Ghar & Tandoor.
 */

const BLOCKED_DOMAINS = [
  'unsplash.com',
  'pexels.com',
  'pixabay.com',
  'freepik.com',
  'placeholder.com',
  'via.placeholder',
  'stock.adobe.com',
  'shutterstock.com',
  'gettyimages.com',
  'images.google.com'
];

/**
 * Validates if an image source belongs strictly to Shree Matla Ghar's verified media folder
 * or genuine Google Maps business media.
 */
export function isValidBusinessMedia(src?: string): boolean {
  if (!src || typeof src !== 'string' || src.trim() === '') {
    return false;
  }

  const normalizedSrc = src.toLowerCase().trim();

  // Check if source matches blocked third-party stock domains
  for (const domain of BLOCKED_DOMAINS) {
    if (normalizedSrc.includes(domain)) {
      return false;
    }
  }

  // Check if source is a local asset in the authentic business media directory
  if (normalizedSrc.startsWith('/assets/shree-matla-ghar/') || normalizedSrc.startsWith('assets/shree-matla-ghar/')) {
    return true;
  }

  // Check if source is registered in the official MEDIA_ASSETS registry
  const registered = MEDIA_ASSETS.some(asset => asset.src.toLowerCase() === normalizedSrc);
  if (registered) {
    return true;
  }

  return false;
}

/**
 * Retrieves verified media asset for a product by ID.
 */
export function getVerifiedMediaForProduct(productId: string): MediaAsset | undefined {
  return MEDIA_ASSETS.find(asset => asset.productId === productId);
}

/**
 * Retrieves all verified media assets for a given category.
 */
export function getVerifiedMediaByCategory(category: string): MediaAsset[] {
  return MEDIA_ASSETS.filter(asset => asset.category === category || category === 'all');
}

export { OFFICIAL_GOOGLE_MAPS_LINK };
