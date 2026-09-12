export interface MediaAsset {
  id: string;
  src: string;
  type: 'image' | 'video';
  category: 'matka' | 'tandoor' | 'kulhad' | 'handi' | 'planters' | 'diya' | 'ganpati' | 'shop' | 'workshop';
  productId?: string;
  alt: string;
  caption?: string;
  source: 'google-maps-business-media' | 'owner-provided' | 'project-asset' | 'placeholder';
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string; // matches Category slug e.g. matka, tandoor, kulhad, handi, planters, diya, ganpati
  shortDescription: string;
  description: string;
  images: string[];
  price?: number;
  priceLabel?: string; // e.g. "Price on Request", "Contact for Availability", "Starting at ₹450"
  sizes: string[];
  material: string;
  dimensions?: string;
  availability: 'in-stock' | 'pre-order' | 'made-to-order' | 'contact-store';
  wholesaleAvailable: boolean;
  featured: boolean;
  isNew?: boolean;       // marks as a new arrival
  seasonal?: boolean;
  tags: string[];
  careInstructions?: string[];
  useCases?: string[];
  weight?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  itemCount?: number;
}

export interface BusinessConfig {
  brandName: string;
  listingName: string;
  brandTagline: string;
  phone: string;
  whatsappNumber: string; // pure digits e.g. 917984458082
  whatsappDisplay: string;
  email: string;
  address: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  latitude: number;
  longitude: number;
  openingHours: string;
  googleMapsUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl?: string;
  siteUrl?: string;
}

export interface WholesaleEnquiry {
  name: string;
  businessName: string;
  phone: string;
  whatsapp: string;
  product: string;
  quantity: string;
  location: string;
  message: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'tandoor' | 'matka' | 'workshop' | 'process' | 'products' | 'ganpati' | 'orders';
  image: string;
  caption: string;
  source?: 'google-maps-business-media' | 'owner-provided' | 'project-asset' | 'placeholder';
}
