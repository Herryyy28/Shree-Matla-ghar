import { BUSINESS_CONFIG } from '../config/business';

export interface WhatsAppProductOptions {
  productName: string;
  category?: string;
  size?: string;
  priceLabel?: string;
  customNote?: string;
}

export interface WhatsAppTandoorOptions {
  tandoorType: string;
  sizeOrCapacity?: string;
  usageType?: string;
  customNote?: string;
}

export interface WhatsAppGanpatiOptions {
  idolName: string;
  size?: string;
  deliveryOrPickup?: string;
  customNote?: string;
}

export interface WhatsAppWholesaleOptions {
  name?: string;
  businessName?: string;
  product: string;
  quantity: string;
  location?: string;
  message?: string;
}

export interface MultiEnquiryItem {
  name: string;
  quantity?: number;
  category?: string;
  size?: string;
}

export interface MultiEnquiryOptions {
  items: MultiEnquiryItem[];
  customerName?: string;
  location?: string;
  note?: string;
}

/**
 * Encodes text into a WhatsApp direct wa.me link with the central business phone number
 */
export function buildWhatsAppLink(message: string): string {
  const sanitized = message.trim();
  const encoded = encodeURIComponent(sanitized);
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encoded}`;
}

/**
 * Product Enquiry Message Builder (Section 4)
 */
export function getProductWhatsAppLink(options: WhatsAppProductOptions): string {
  const { productName, category, size, customNote } = options;
  
  let msg = `Hello ${BUSINESS_CONFIG.brandName},\n\n`;
  msg += `I am interested in the following pottery product:\n\n`;
  msg += `Product: ${productName}\n`;
  if (category) {
    msg += `Category: ${category}\n`;
  }
  if (size) {
    msg += `Size: ${size}\n`;
  }
  
  msg += `\nPlease share the price, available options and availability.\n`;

  if (customNote && customNote.trim()) {
    msg += `\nAdditional Requirement:\n${customNote.trim()}\n`;
  }

  msg += `\nThank you.`;

  return buildWhatsAppLink(msg);
}

/**
 * Tandoor Enquiry Message Builder (Section 5)
 */
export function getTandoorWhatsAppLink(options: WhatsAppTandoorOptions): string {
  const { tandoorType, sizeOrCapacity, customNote } = options;
  
  let msg = `Hello ${BUSINESS_CONFIG.brandName},\n\n`;
  msg += `I am interested in:\n\n`;
  msg += `Product: ${tandoorType}\n`;
  if (sizeOrCapacity) {
    msg += `Size/Options: ${sizeOrCapacity}\n`;
  }
  
  msg += `\nPlease share the available size/options, price and availability.\n`;

  if (customNote && customNote.trim()) {
    msg += `\nAdditional Requirement:\n${customNote.trim()}\n`;
  }

  msg += `\nThank you.`;

  return buildWhatsAppLink(msg);
}

/**
 * Ganpati Enquiry Message Builder (Section 6)
 */
export function getGanpatiWhatsAppLink(options: WhatsAppGanpatiOptions): string {
  const { idolName, size, deliveryOrPickup, customNote } = options;
  
  let msg = `Hello ${BUSINESS_CONFIG.brandName},\n\n`;
  msg += `I am interested in:\n\n`;
  msg += `Ganpati: ${idolName}\n`;
  if (size) {
    msg += `Size: ${size}\n`;
  }
  if (deliveryOrPickup) {
    msg += `Option: ${deliveryOrPickup}\n`;
  }
  
  msg += `\nPlease share the available size, price and availability.\n`;

  if (customNote && customNote.trim()) {
    msg += `\nAdditional Requirement:\n${customNote.trim()}\n`;
  }

  msg += `\nThank you.`;

  return buildWhatsAppLink(msg);
}

/**
 * Bulk / Wholesale Enquiry Message Builder (Section 7)
 */
export function getWholesaleWhatsAppLink(options: WhatsAppWholesaleOptions): string {
  const { name, businessName, product, quantity, location, message } = options;
  
  let msg = `Hello ${BUSINESS_CONFIG.brandName},\n\n`;
  msg += `I would like to enquire about a bulk pottery order.\n\n`;
  msg += `Product: ${product}\n`;
  msg += `Quantity: ${quantity}\n`;
  if (name || businessName) {
    msg += `Business/Name: ${name || businessName}\n`;
  }
  if (location) {
    msg += `Location: ${location}\n`;
  }

  if (message && message.trim()) {
    msg += `\nAdditional Requirement:\n${message.trim()}\n`;
  }

  msg += `\nPlease share the quotation and availability.\n\nThank you.`;

  return buildWhatsAppLink(msg);
}

/**
 * Multi-Product Enquiry Message Builder (Section 8)
 */
export function getMultiProductWhatsAppLink(options: MultiEnquiryOptions): string {
  const { items, customerName, location, note } = options;

  if (!items || items.length === 0) {
    return getGeneralWhatsAppLink();
  }

  const hasQuantities = items.some((item) => item.quantity && item.quantity > 1);

  let msg = `Hello ${BUSINESS_CONFIG.brandName},\n\n`;

  if (hasQuantities) {
    msg += `I would like to enquire about the following pottery products:\n\n`;
    items.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.name} - Quantity: ${item.quantity || 1}\n`;
    });
    msg += `\nPlease share the price and availability.\n`;
  } else {
    msg += `I am interested in the following pottery products:\n\n`;
    items.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.name}\n`;
    });
    msg += `\nPlease share the price and availability for these products.\n`;
  }

  if (customerName || location) {
    msg += `\nCustomer Details:`;
    if (customerName) msg += `\nName: ${customerName}`;
    if (location) msg += `\nLocation: ${location}`;
    msg += `\n`;
  }

  if (note && note.trim()) {
    msg += `\nAdditional Requirement:\n${note.trim()}\n`;
  }

  msg += `\nThank you.`;

  return buildWhatsAppLink(msg);
}

/**
 * Category-Level Enquiry Message Builder (Section 11)
 */
export function getCategoryWhatsAppLink(categoryName: string): string {
  let msg = `Hello ${BUSINESS_CONFIG.brandName},\n\n`;
  msg += `I am interested in your ${categoryName} collection.\n\n`;
  msg += `Please share the available products, prices and details.\n\n`;
  msg += `Thank you.`;

  return buildWhatsAppLink(msg);
}

/**
 * Contact Page WhatsApp Message Builder (Section 10)
 */
export function getContactPageWhatsAppLink(): string {
  let msg = `Hello ${BUSINESS_CONFIG.brandName},\n\n`;
  msg += `I would like to enquire about your pottery products.\n\n`;
  msg += `Please guide me with the available products and details.\n\n`;
  msg += `Thank you.`;

  return buildWhatsAppLink(msg);
}

/**
 * General Business Enquiry Message Builder (Section 9)
 */
export function getGeneralWhatsAppLink(customTopic?: string): string {
  let msg = `Hello ${BUSINESS_CONFIG.brandName},\n\n`;
  if (customTopic && customTopic.trim()) {
    msg += `I would like to enquire about: ${customTopic.trim()}.\n\n`;
  } else {
    msg += `I would like to know more about your pottery products.\n\n`;
  }
  msg += `Please share the available products, prices and details.\n\n`;
  msg += `Thank you.`;

  return buildWhatsAppLink(msg);
}
