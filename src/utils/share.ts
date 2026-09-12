import { BUSINESS_CONFIG } from '../config/business';

/**
 * Shares a URL using Web Share API if available, or falls back to copying link to clipboard.
 */
export async function shareProduct(title: string, text: string, url: string): Promise<{ success: boolean; method: 'native' | 'clipboard' }> {
  let fullUrl = url;
  if (!fullUrl.startsWith('http://') && !fullUrl.startsWith('https://')) {
    let origin = typeof window !== 'undefined' ? window.location.origin : '';
    if (!origin || origin.includes('localhost') || origin.includes('127.0.0.1')) {
      origin = BUSINESS_CONFIG.siteUrl || 'https://shreematlaghar.vercel.app';
    }
    const cleanOrigin = origin.replace(/\/+$/, '');
    fullUrl = `${cleanOrigin}${url.startsWith('/') ? url : `/${url}`}`;
  }

  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url: fullUrl,
      });
      return { success: true, method: 'native' };
    } catch (err) {
      if ((err as Error).name === 'AbortError') {
        return { success: false, method: 'native' };
      }
    }
  }

  // Fallback to clipboard copy
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(fullUrl);
      return { success: true, method: 'clipboard' };
    }
    return { success: false, method: 'clipboard' };
  } catch (err) {
    return { success: false, method: 'clipboard' };
  }
}

