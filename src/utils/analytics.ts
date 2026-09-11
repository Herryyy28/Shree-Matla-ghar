/**
 * SHREE MATLA GHAR — Analytics Abstraction Layer
 *
 * Lightweight event tracking that can later be connected to
 * Google Analytics, Plausible, or any analytics provider.
 *
 * Only tracks meaningful business actions.
 * NO personal / sensitive data is tracked.
 */

export type AnalyticsEvent =
  | 'page_view'
  | 'product_view'
  | 'product_share'
  | 'product_save'
  | 'product_unsave'
  | 'whatsapp_click'
  | 'call_click'
  | 'maps_click'
  | 'bulk_enquiry_start'
  | 'bulk_enquiry_submit'
  | 'gallery_view'
  | 'gallery_item_view'
  | 'video_play'
  | 'search_query'
  | 'filter_applied'
  | 'favorites_viewed'
  | 'qr_generated'
  | 'tandoor_wizard_recommendation';

export interface AnalyticsPayload {
  event: AnalyticsEvent;
  category?: string; // product category e.g. tandoor, matka
  label?: string;    // product name, search query, etc.
  value?: string;    // additional context value
}

/**
 * Track a business analytics event.
 * Currently logs to console in development.
 */
// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    plausible?: (...args: any[]) => void;
  }
}

export function trackEvent(payload: AnalyticsPayload): void {
  // Development logging
  if (import.meta.env.DEV) {
    console.info('[Analytics]', payload);
  }

  // Google Analytics 4 integration
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', payload.event, {
      event_category: payload.category,
      event_label: payload.label,
      value: payload.value,
    });
  }

  // Plausible Integration
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible(payload.event, { props: payload });
  }
}

/** Convenience: Track a page view */
export function trackPageView(path: string, title: string): void {
  trackEvent({ event: 'page_view', label: path, value: title });
}

/** Convenience: Track a product view */
export function trackProductView(productId: string, productName: string, category: string): void {
  trackEvent({ event: 'product_view', category, label: productName, value: productId });
}

/** Convenience: Track a WhatsApp click */
export function trackWhatsAppClick(context: string): void {
  trackEvent({ event: 'whatsapp_click', label: context });
}

/** Convenience: Track a Call click */
export function trackCallClick(): void {
  trackEvent({ event: 'call_click', label: 'phone' });
}

/** Convenience: Track a Maps click */
export function trackMapsClick(): void {
  trackEvent({ event: 'maps_click', label: 'google_maps' });
}

/** Convenience: Track a bulk enquiry */
export function trackBulkEnquiry(stage: 'start' | 'submit', product: string): void {
  trackEvent({
    event: stage === 'start' ? 'bulk_enquiry_start' : 'bulk_enquiry_submit',
    label: product,
  });
}

/** Convenience: Track a search */
export function trackSearch(query: string): void {
  trackEvent({ event: 'search_query', label: query });
}

/** Convenience: Track Tandoor Selector Wizard recommendation */
export function trackTandoorWizardRecommendation(tandoorType: string, businessType: string): void {
  trackEvent({
    event: 'tandoor_wizard_recommendation',
    category: 'tandoor',
    label: tandoorType,
    value: businessType,
  });
}
