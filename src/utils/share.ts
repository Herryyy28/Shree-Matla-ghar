/**
 * Shares a URL using Web Share API if available, or falls back to copying link to clipboard.
 */
export async function shareProduct(title: string, text: string, url: string): Promise<{ success: boolean; method: 'native' | 'clipboard' }> {
  const fullUrl = window.location.origin + url;

  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url: fullUrl,
      });
      return { success: true, method: 'native' };
    } catch (err) {
      // User cancelled or share failed, fallback to clipboard
      if ((err as Error).name === 'AbortError') {
        return { success: false, method: 'native' };
      }
    }
  }

  // Fallback to clipboard copy
  try {
    await navigator.clipboard.writeText(fullUrl);
    return { success: true, method: 'clipboard' };
  } catch (err) {
    return { success: false, method: 'clipboard' };
  }
}
