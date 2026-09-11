import { BusinessConfig } from '../types';

export const BUSINESS_CONFIG: BusinessConfig = {
  brandName: "Shree Matla Ghar",
  listingName: "Shree Matla Ghar & Tandoor",
  brandTagline: "From Mitti to Memories.",
  phone: "+91 79844 58082",
  whatsappNumber: "917984458082", // pure digits for wa.me link
  whatsappDisplay: "+91 79844 58082",
  email: "contact@shreematlaghar.com",
  address: "Plot no 2406, Shree Matla Ghar & Tandoor, Vrundavan Tenament, Panchwati Chowk, Ambawadi, Subhashnagar",
  locality: "Subhashnagar",
  city: "Bhavnagar",
  state: "Gujarat",
  pincode: "364001",
  country: "India",
  latitude: 21.7583362,
  longitude: 72.1628413,
  openingHours: "Every day: 08:00 AM - 10:00 PM",
  googleMapsUrl: "https://maps.app.goo.gl/gA2q7yhnomvR9VH98",
  instagramUrl: "https://instagram.com/shreematlaghar",
  facebookUrl: "https://facebook.com/shreematlaghar",
};

export const SOCIAL_LINKS = [
  { name: "Instagram", url: BUSINESS_CONFIG.instagramUrl, icon: "Instagram" },
  { name: "Facebook", url: BUSINESS_CONFIG.facebookUrl, icon: "Facebook" },
  { name: "WhatsApp", url: `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`, icon: "MessageCircle" },
  { name: "Google Maps", url: BUSINESS_CONFIG.googleMapsUrl, icon: "MapPin" },
];
