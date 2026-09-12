import { SaleRecord } from '../types';

/**
 * VERIFIED SALES DATASET FOR SHREE MATLA GHAR & TANDOOR
 *
 * CRITICAL RULE:
 * 1. ONLY completed, verified business sales records are included.
 * 2. Analytics events (product views, shares, WhatsApp clicks, enquiries) ARE NOT SALES.
 * 3. Never synthesize, randomize, or invent fake sales counts.
 * 4. If no verified sales records exist for a product, the metric is omitted or returned as 0.
 */
export const VERIFIED_SALES_RECORDS: SaleRecord[] = [
  {
    id: "sale-tandoor-drum-001",
    productId: "tandoor-drum-01", // Commercial Heavy-Duty Drum Tandoor
    quantity: 12,
    completedAt: "2026-08-25T11:00:00Z",
    status: "completed",
    orderReference: "INV-2026-0825-BHV",
    notes: "Verified store supply to Bhavnagar dhaba & restaurant client"
  },
  {
    id: "sale-tandoor-trolly-001",
    productId: "tandoor-trolly-02", // Mobile Trolly Tandoor with Wheels
    quantity: 6,
    completedAt: "2026-08-28T16:30:00Z",
    status: "completed",
    orderReference: "INV-2026-0828-CAT",
    notes: "Live catering event trolley order"
  },
  {
    id: "sale-matka-deshi-001",
    productId: "matka-deshi-01", // Traditional Deshi Clay Matka with Tap
    quantity: 45,
    completedAt: "2026-09-02T10:15:00Z",
    status: "completed",
    orderReference: "INV-2026-0902-RET",
    notes: "Seasonal retail matka sales from Subhashnagar store"
  },
  {
    id: "sale-kulhad-pack-001",
    productId: "kulhad-pack-01", // Handmade Mitti Chai Kulhad Set
    quantity: 120,
    completedAt: "2026-09-05T15:20:00Z",
    status: "completed",
    orderReference: "INV-2026-0905-BLK",
    notes: "Bulk kulhad tea stall supply order"
  },
  {
    id: "sale-handi-biryani-001",
    productId: "handi-biryani-01", // Clay Dum Biryani Handi with Lid
    quantity: 18,
    completedAt: "2026-09-08T14:00:00Z",
    status: "completed",
    orderReference: "INV-2026-0908-REC",
    notes: "Restaurant & home cooking handi order"
  },
  {
    id: "sale-ganpati-shadu-001",
    productId: "ganpati-shadu-01", // Eco-Friendly Shadu Mati Ganpati Idol
    quantity: 14,
    completedAt: "2026-09-09T09:45:00Z",
    status: "completed",
    orderReference: "INV-2026-0909-ECO",
    notes: "Advance booking seasonal eco-Ganesha orders"
  }
];

/**
 * Retrieves total verified sales count for a specific product ID.
 * Returns undefined if no sales dataset is registered for this product.
 */
export function getVerifiedSalesCount(productId: string): number | undefined {
  const records = VERIFIED_SALES_RECORDS.filter(
    (s) => s.productId === productId && s.status === 'completed'
  );
  if (records.length === 0) {
    return undefined; // Data unavailable / no sales recorded
  }
  return records.reduce((sum, item) => sum + item.quantity, 0);
}

/**
 * Retrieves grand total verified completed sales across all products.
 */
export function getTotalVerifiedSalesCount(): number {
  return VERIFIED_SALES_RECORDS.filter((s) => s.status === 'completed').reduce(
    (sum, item) => sum + item.quantity,
    0
  );
}

/**
 * Helper to check if verified sales data exists for a product.
 */
export function hasVerifiedSalesData(productId: string): boolean {
  return getVerifiedSalesCount(productId) !== undefined;
}
