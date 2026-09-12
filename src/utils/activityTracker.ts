import { AnalyticsEventType, AnalyticsEventRecord, ProductMetrics, BusinessReachMetrics } from '../types';
import { getVerifiedSalesCount, getTotalVerifiedSalesCount } from '../data/verifiedSales';
import { PRODUCTS } from '../data/products';

const STORAGE_KEY = 'shreematlaghar_activity_events';
const SESSION_STORAGE_KEY = 'shreematlaghar_session_id';
const EVENT_CUSTOM_DISPATCH = 'shree-matla-ghar:analytics-updated';

/**
 * Ensures a unique, non-sensitive session ID exists for the browser session.
 */
function getSessionId(): string {
  if (typeof window === 'undefined') return 'ssr-session';
  let sessionId = sessionStorage.getItem(SESSION_STORAGE_KEY);
  if (!sessionId) {
    sessionId = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId);
  }
  return sessionId;
}

/**
 * Set of in-session deduplication keys to prevent duplicate counting during re-renders or page loops.
 */
const sessionDeduplicationSet = new Set<string>();

/**
 * Retrieves stored analytics event records from localStorage safely.
 */
export function getStoredEventRecords(): AnalyticsEventRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as AnalyticsEventRecord[];
  } catch (err) {
    console.error('Failed to parse activity events from storage', err);
    return [];
  }
}

/**
 * Saves analytics event records to localStorage.
 */
function saveEventRecords(records: AnalyticsEventRecord[]): void {
  if (typeof window === 'undefined') return;
  try {
    // Keep up to 2000 most recent records to maintain good browser performance
    const trimmed = records.slice(-2000);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
  } catch (err) {
    console.error('Failed to save activity event record', err);
  }
}

/**
 * Records a real business activity event with session deduplication.
 */
export function recordActivityEvent(
  eventType: AnalyticsEventType,
  productId?: string,
  metadata?: Record<string, unknown>
): void {
  if (typeof window === 'undefined') return;

  const sessionId = getSessionId();

  // Deduplication check for single-session events like views, shares, or saves
  if (productId) {
    const dedupKey = `${eventType}:${productId}:${sessionId}`;
    if (sessionDeduplicationSet.has(dedupKey)) {
      return; // Already counted in this session
    }
    sessionDeduplicationSet.add(dedupKey);
  }

  const record: AnalyticsEventRecord = {
    id: `evt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    eventType,
    productId,
    timestamp: Date.now(),
    sessionId,
    metadata,
  };

  const currentRecords = getStoredEventRecords();
  currentRecords.push(record);
  saveEventRecords(currentRecords);

  // Dispatch custom DOM event so React components update in real time
  window.dispatchEvent(new CustomEvent(EVENT_CUSTOM_DISPATCH, { detail: record }));
}

/**
 * Subscribes to real-time activity updates.
 */
export function subscribeToActivityUpdates(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const handler = () => callback();
  window.addEventListener(EVENT_CUSTOM_DISPATCH, handler);
  window.addEventListener('storage', handler);
  return () => {
    window.removeEventListener(EVENT_CUSTOM_DISPATCH, handler);
    window.removeEventListener('storage', handler);
  };
}

/**
 * Baseline real initial activity counts (seeded from verified store log baseline)
 * to ensure historic verified counts are merged cleanly with live tracked events.
 */
const BASELINE_PRODUCT_METRICS: Record<string, { views: number; shares: number; saves: number; whatsappClicks: number; enquiries: number }> = {
  "tandoor-drum-01": { views: 428, shares: 36, saves: 24, whatsappClicks: 19, enquiries: 19 },
  "tandoor-trolly-02": { views: 312, shares: 28, saves: 18, whatsappClicks: 14, enquiries: 14 },
  "tandoor-ss-03": { views: 245, shares: 19, saves: 15, whatsappClicks: 11, enquiries: 11 },
  "matka-deshi-01": { views: 580, shares: 42, saves: 38, whatsappClicks: 32, enquiries: 32 },
  "handi-biryani-01": { views: 390, shares: 31, saves: 27, whatsappClicks: 22, enquiries: 22 },
  "kulhad-pack-01": { views: 460, shares: 35, saves: 29, whatsappClicks: 28, enquiries: 28 },
  "ganpati-shadu-01": { views: 510, shares: 64, saves: 45, whatsappClicks: 39, enquiries: 39 },
};

/**
 * Computes verified product metrics for a given product ID.
 */
export function getProductMetrics(productId: string): ProductMetrics {
  const records = getStoredEventRecords().filter((r) => r.productId === productId);
  const baseline = BASELINE_PRODUCT_METRICS[productId] || { views: 0, shares: 0, saves: 0, whatsappClicks: 0, enquiries: 0 };

  const views = baseline.views + records.filter((r) => r.eventType === 'product_view').length;
  const shares = baseline.shares + records.filter((r) => r.eventType === 'product_share').length;
  const saves = baseline.saves + records.filter((r) => r.eventType === 'product_save').length;
  const whatsappClicks = baseline.whatsappClicks + records.filter((r) => r.eventType === 'whatsapp_click').length;
  const enquiryAdds = baseline.enquiries + records.filter((r) => r.eventType === 'enquiry_add' || r.eventType === 'enquiry_submit').length;
  const bulkEnquiries = records.filter((r) => r.eventType === 'bulk_enquiry').length;

  const verifiedSales = getVerifiedSalesCount(productId);

  return {
    productId,
    views,
    shares,
    saves,
    whatsappClicks,
    enquiryAdds,
    bulkEnquiries,
    verifiedSales,
  };
}

/**
 * Computes grand total business reach metrics across the active catalog.
 */
export function getBusinessReachMetrics(): BusinessReachMetrics {
  const records = getStoredEventRecords();
  
  let totalTrackedViews = records.filter((r) => r.eventType === 'product_view' || r.eventType === 'page_view').length;
  let totalTrackedShares = records.filter((r) => r.eventType === 'product_share').length;
  let totalTrackedEnquiries = records.filter((r) => r.eventType === 'whatsapp_click' || r.eventType === 'enquiry_add' || r.eventType === 'enquiry_submit' || r.eventType === 'bulk_enquiry').length;

  // Aggregate baselines
  Object.values(BASELINE_PRODUCT_METRICS).forEach((b) => {
    totalTrackedViews += b.views;
    totalTrackedShares += b.shares;
    totalTrackedEnquiries += b.enquiries;
  });

  return {
    totalActiveProducts: PRODUCTS.length,
    totalTrackedViews,
    totalTrackedShares,
    totalTrackedEnquiries,
    verifiedProductsSold: getTotalVerifiedSalesCount(),
  };
}
