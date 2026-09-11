import { MediaAsset } from '../types';

/**
 * SHREE MATLA GHAR — GENUINE BUSINESS MEDIA ASSETS REGISTRY
 * 
 * STRICT MEDIA RULE:
 * Only photos and videos associated with Shree Matla Ghar & Tandoor
 * (Google Maps Listing: https://maps.app.goo.gl/gA2q7yhnomvR9VH98) or explicitly
 * provided by the owner inside the project repository under /assets/shree-matla-ghar/ are registered.
 * 
 * Stock photos, AI-generated images, and third-party internet photos are strictly prohibited.
 */

export const MEDIA_ASSETS: MediaAsset[] = [
  // TANDOOR COLLECTION
  {
    id: "media-tandoor-01",
    type: "image",
    src: "/assets/shree-matla-ghar/tandoor/drum-tandoor-main.jpg",
    category: "tandoor",
    productId: "tandoor-drum-01",
    alt: "Commercial Heavy Duty Drum Tandoor at Shree Matla Ghar Bhavnagar",
    caption: "Heavy metal drum tandoor with refractory clay lining for restaurants and dhabas.",
    source: "google-maps-business-media"
  },
  {
    id: "media-tandoor-02",
    type: "image",
    src: "/assets/shree-matla-ghar/tandoor/trolly-tandoor-main.jpg",
    category: "tandoor",
    productId: "tandoor-trolly-02",
    alt: "Mobile Trolly Tandoor on Castor Wheels by Shree Matla Ghar",
    caption: "Portable catering tandoor mounted on castor wheels for outdoor wedding events.",
    source: "google-maps-business-media"
  },
  {
    id: "media-tandoor-03",
    type: "image",
    src: "/assets/shree-matla-ghar/tandoor/ss-tandoor-main.jpg",
    category: "tandoor",
    productId: "tandoor-ss-03",
    alt: "Stainless Steel Body Clay Tandoor at Shree Matla Ghar",
    caption: "Rust-free stainless steel casing encasing a fired clay tandoor pot.",
    source: "google-maps-business-media"
  },
  {
    id: "media-tandoor-04",
    type: "image",
    src: "/assets/shree-matla-ghar/tandoor/home-tandoor-main.jpg",
    category: "tandoor",
    productId: "tandoor-home-04",
    alt: "Compact Home Clay Tandoor Pot by Shree Matla Ghar",
    caption: "Portable earthen tandoor pot for home backyard barbecues.",
    source: "google-maps-business-media"
  },

  // MATKA & WATER POTS
  {
    id: "media-matka-01",
    type: "image",
    src: "/assets/shree-matla-ghar/matka/deshi-matka-main.jpg",
    category: "matka",
    productId: "matka-deshi-01",
    alt: "Traditional Gujarati Red Clay Water Matka by Shree Matla Ghar",
    caption: "Natural porous clay water matka for alkaline chilled drinking water.",
    source: "google-maps-business-media"
  },
  {
    id: "media-matka-02",
    type: "image",
    src: "/assets/shree-matla-ghar/matka/tap-matka-main.jpg",
    category: "matka",
    productId: "matka-tap-02",
    alt: "Clay Matka with Pure Brass Tap by Shree Matla Ghar",
    caption: "Hygienic earthen tap matka for homes and offices.",
    source: "google-maps-business-media"
  },
  {
    id: "media-matka-03",
    type: "image",
    src: "/assets/shree-matla-ghar/matka/surahi-main.jpg",
    category: "matka",
    productId: "matka-surahi-03",
    alt: "Handcrafted Long-Neck Clay Surahi by Shree Matla Ghar",
    caption: "Narrow-neck terracotta surahi for traditional cooling.",
    source: "google-maps-business-media"
  },

  // KULHAD & SERVEWARE
  {
    id: "media-kulhad-01",
    type: "image",
    src: "/assets/shree-matla-ghar/kulhad/kulhad-chai-main.jpg",
    category: "kulhad",
    productId: "kulhad-chai-01",
    alt: "Deshi Mitti Chai Kulhad Crates at Shree Matla Ghar Bhavnagar",
    caption: "100% natural clay kulhads for tea stalls, cafes, and events.",
    source: "google-maps-business-media"
  },

  // HANDI & COOKWARE
  {
    id: "media-handi-01",
    type: "image",
    src: "/assets/shree-matla-ghar/handi/biryani-handi-main.jpg",
    category: "handi",
    productId: "handi-biryani-01",
    alt: "Biryani Clay Handi Pot by Shree Matla Ghar",
    caption: "Unglazed heavy earthen handi for slow dum cooking.",
    source: "google-maps-business-media"
  },

  // PLANTERS & GARDEN
  {
    id: "media-planter-01",
    type: "image",
    src: "/assets/shree-matla-ghar/planters/terracotta-gamla-main.jpg",
    category: "planters",
    productId: "planter-gamla-01",
    alt: "Terracotta Garden Gamla Planter by Shree Matla Ghar",
    caption: "Porous clay plant pot promoting root aeration.",
    source: "google-maps-business-media"
  },

  // DIYA & FESTIVAL
  {
    id: "media-diya-01",
    type: "image",
    src: "/assets/shree-matla-ghar/diya/diya-set-main.jpg",
    category: "diya",
    productId: "diya-diwali-01",
    alt: "Handcrafted Earthen Diya Oil Lamps by Shree Matla Ghar",
    caption: "Pure mitti handcrafted festive oil lamps.",
    source: "google-maps-business-media"
  },

  // ECO SHADU MATI GANPATI
  {
    id: "media-ganpati-01",
    type: "image",
    src: "/assets/shree-matla-ghar/ganpati/shadu-ganpati-main.jpg",
    category: "ganpati",
    productId: "ganpati-shadu-01",
    alt: "Eco-Friendly Shadu Mati Ganpati Idol by Shree Matla Ghar",
    caption: "100% Clay Ganesha idol hand-painted with natural watercolors.",
    source: "google-maps-business-media"
  },

  // STOREFRONT & WORKSHOP
  {
    id: "media-store-01",
    type: "image",
    src: "/assets/shree-matla-ghar/store/showroom-front.jpg",
    category: "shop",
    alt: "Shree Matla Ghar & Tandoor Storefront in Bhavnagar",
    caption: "Physical showroom at Panchwati Chowk, Subhashnagar, Bhavnagar.",
    source: "google-maps-business-media"
  },
  {
    id: "media-workshop-01",
    type: "video",
    src: "/assets/shree-matla-ghar/store/tandoor-crafting-video.mp4",
    category: "workshop",
    alt: "Pottery Workshop & Tandoor Lining Video at Shree Matla Ghar",
    caption: "Video showcasing traditional tandoor clay lining craft.",
    source: "google-maps-business-media"
  }
];

/**
 * GOOGLE MAPS BUSINESS LISTING REFERENCE
 */
export const OFFICIAL_GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/gA2q7yhnomvR9VH98";
