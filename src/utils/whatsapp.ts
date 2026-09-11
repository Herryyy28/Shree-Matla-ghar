import { BUSINESS_CONFIG } from '../config/business';

export interface WhatsAppProductOptions {
  productName: string;
  size?: string;
  priceLabel?: string;
  customNote?: string;
}

export interface WhatsAppWholesaleOptions {
  name: string;
  businessName: string;
  product: string;
  quantity: string;
  location: string;
  message?: string;
}

export interface WhatsAppTandoorOptions {
  tandoorType: string;
  sizeOrCapacity?: string;
  usageType?: string; // Restaurant / Home / Catering
}

export interface WhatsAppGanpatiOptions {
  idolName: string;
  size: string;
  deliveryOrPickup?: string;
}

/**
 * Encodes text into a WhatsApp direct wa.me link with the central business phone number
 */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encoded}`;
}

/**
 * Builds a WhatsApp enquiry message for a specific retail product
 */
export function getProductWhatsAppLink(options: WhatsAppProductOptions): string {
  const { productName, size, priceLabel, customNote } = options;
  
  let msg = `Hello ${BUSINESS_CONFIG.brandName} (${BUSINESS_CONFIG.listingName})! 🏺\n\n`;
  msg += `I am interested in your *${productName}*`;
  
  if (size) {
    msg += ` (Size/Variant: ${size})`;
  }
  
  if (priceLabel) {
    msg += ` - Listed Info: ${priceLabel}`;
  }
  
  msg += `.\n\nPlease share the available stock, pricing, and store pickup or delivery details in ${BUSINESS_CONFIG.city}.`;
  
  if (customNote) {
    msg += `\n\nNote: ${customNote}`;
  }

  return buildWhatsAppLink(msg);
}

/**
 * Builds a WhatsApp quote request for Tandoor products (Drum Tandoor, Trolly Tandoor, SS Tandoor)
 */
export function getTandoorWhatsAppLink(options: WhatsAppTandoorOptions): string {
  const { tandoorType, sizeOrCapacity, usageType } = options;
  
  let msg = `Hello ${BUSINESS_CONFIG.brandName}! 🔥 *TANDOOR ENQUIRY*\n\n`;
  msg += `I want to enquire about your *${tandoorType}*`;
  
  if (usageType) {
    msg += ` for *${usageType}* use`;
  }
  
  if (sizeOrCapacity) {
    msg += ` (Size: ${sizeOrCapacity})`;
  }
  
  msg += `.\n\nPlease share high-res photos, specs, price quote, and availability at your Bhavnagar showroom.`;

  return buildWhatsAppLink(msg);
}

/**
 * Builds a WhatsApp wholesale bulk order enquiry message
 */
export function getWholesaleWhatsAppLink(options: WhatsAppWholesaleOptions): string {
  const { name, businessName, product, quantity, location, message } = options;
  
  let msg = `Hello ${BUSINESS_CONFIG.brandName}! 📦 *WHOLESALE BULK ENQUIRY*\n\n`;
  msg += `• *Contact Name:* ${name}\n`;
  msg += `• *Business / Establishment:* ${businessName}\n`;
  msg += `• *Product Required:* ${product}\n`;
  msg += `• *Estimated Quantity:* ${quantity}\n`;
  msg += `• *Delivery Location:* ${location}\n`;
  
  if (message) {
    msg += `• *Additional Notes:* ${message}\n`;
  }
  
  msg += `\nPlease share your wholesale pricing catalog and bulk dispatch details. Thank you!`;

  return buildWhatsAppLink(msg);
}

/**
 * Builds a WhatsApp booking message for seasonal Ganpati idols
 */
export function getGanpatiWhatsAppLink(options: WhatsAppGanpatiOptions): string {
  const { idolName, size, deliveryOrPickup } = options;
  
  let msg = `Hello ${BUSINESS_CONFIG.brandName}! 🙏 *GANPATI IDOL ENQUIRY*\n\n`;
  msg += `I am interested in booking the *${idolName}* (100% Eco-Friendly Shadu Mati Clay).\n`;
  msg += `• *Idol Size:* ${size}\n`;
  if (deliveryOrPickup) {
    msg += `• *Preference:* ${deliveryOrPickup}\n`;
  }
  msg += `\nPlease share available designs, prices, and store pickup details in Bhavnagar. Dhanyawad!`;

  return buildWhatsAppLink(msg);
}

/**
 * General WhatsApp enquiry message
 */
export function getGeneralWhatsAppLink(customSubject?: string): string {
  let msg = `Hello ${BUSINESS_CONFIG.brandName} (${BUSINESS_CONFIG.listingName})! 👋\n\n`;
  if (customSubject) {
    msg += `I would like to enquire about ${customSubject}.`;
  } else {
    msg += `I visited your website and would like to enquire about your clay products and tandoors in Bhavnagar.`;
  }
  return buildWhatsAppLink(msg);
}
