import { Product } from '../types';

/**
 * PRODUCTS DATASET FOR SHREE MATLA GHAR (SHREE MATLA GHAR & TANDOOR, BHAVNAGAR)
 * 
 * STRICT RULE: All images point strictly to local business asset paths under /assets/shree-matla-ghar/.
 * No generic internet stock photos are used.
 */
export const PRODUCTS: Product[] = [
  // TANDOOR SPECIALIST CATEGORY (VERIFIED GOOGLE MAPS LISTING HIGHLIGHTS)
  {
    id: "tandoor-drum-01",
    slug: "commercial-heavy-duty-drum-tandoor",
    name: "Commercial Heavy-Duty Drum Tandoor",
    category: "tandoor",
    shortDescription: "Specialist drum tandoor crafted with high-heat clay lining inside a heavy metal drum for restaurants, dhabas, and caterers.",
    description: "Shree Matla Ghar (Shree Matla Ghar & Tandoor) is a specialist supplier of heavy-duty Drum Tandoors in Bhavnagar. Built with thick refractory clay walls inside a solid steel drum casing, ensuring maximum heat retention for continuous naan baking and tikka roasting.",
    images: [
      "/assets/shree-matla-ghar/tandoor/drum-tandoor-main.jpg",
      "/assets/shree-matla-ghar/tandoor/drum-tandoor-inside.jpg",
    ],
    priceLabel: "Price on Request",
    sizes: ["Standard Commercial Size", "Large Dhaba Size", "Custom Diameter"],
    material: "High-Heat Refractory Clay & Heavy Steel Drum Casing",
    availability: "in-stock",
    wholesaleAvailable: true,
    featured: true,
    tags: ["tandoor", "drum tandoor", "commercial tandoor", "dhaba tandoor", "bhavnagar tandoor"],
    careInstructions: [
      "Follow initial brine seasoning ritual before baking your first naan batch.",
      "Keep internal ash chamber clean for proper ventilation airflow."
    ],
    useCases: ["Restaurants & Dhabas", "Outdoor Catering & Events", "Hotel Kitchens"],
    weight: "Heavy-Duty Commercial Grade"
  },
  {
    id: "tandoor-trolly-02",
    slug: "mobile-trolly-tandoor-with-wheels",
    name: "Mobile Trolly Tandoor with Heavy-Duty Wheels",
    category: "tandoor",
    shortDescription: "Portable trolley tandoor mounted on smooth castor wheels for wedding caterers, outdoor events, and food trucks.",
    description: "Designed for effortless mobility, our Mobile Trolley Tandoor features a reinforced clay core inside a heavy-duty trolley frame with locking castor wheels. Perfect for live catering counters.",
    images: [
      "/assets/shree-matla-ghar/tandoor/trolly-tandoor-main.jpg",
      "/assets/shree-matla-ghar/tandoor/trolly-tandoor-wheels.jpg",
    ],
    priceLabel: "Price on Request",
    sizes: ["Medium Mobile", "Large Event Trolley"],
    material: "Fired Clay Pot & Stainless Steel Trolley Frame with Castors",
    availability: "in-stock",
    wholesaleAvailable: true,
    featured: true,
    tags: ["tandoor", "trolly tandoor", "catering tandoor", "mobile tandoor", "bhavnagar tandoor"],
    careInstructions: ["Lock wheel brakes during live cooking operation."],
    useCases: ["Wedding Live Counters", "Food Trucks & Pop-up Stalls"],
    weight: "Portable Trolley Mount"
  },
  {
    id: "tandoor-ss-03",
    slug: "stainless-steel-ss-body-clay-tandoor",
    name: "Stainless Steel (SS) Body Clay Tandoor",
    category: "tandoor",
    shortDescription: "Premium rust-free stainless steel outer body encasing a traditional earthen clay tandoor pot.",
    description: "Combines modern hygiene standards with traditional mitti taste. The SS outer body is rust-proof, easy to sanitize, and thermal-insulated.",
    images: [
      "/assets/shree-matla-ghar/tandoor/ss-tandoor-main.jpg",
    ],
    priceLabel: "Price on Request",
    sizes: ["26 inch SS Square", "30 inch SS Square", "Custom SS Finish"],
    material: "Food-Grade Stainless Steel Casing & Earthen Clay Lining",
    availability: "in-stock",
    wholesaleAvailable: true,
    featured: true,
    tags: ["tandoor", "ss tandoor", "stainless steel tandoor", "restaurant equipment"],
    careInstructions: ["Wipe stainless steel exterior with dry microfiber cloth."],
    useCases: ["Fine Dining Indian Restaurants", "Boutique Cafes"],
    weight: "Insulated Heavy Metal Body"
  },
  {
    id: "tandoor-home-04",
    slug: "backyard-compact-home-clay-tandoor",
    name: "Compact Backyard Clay Tandoor for Home",
    category: "tandoor",
    shortDescription: "Portable compact clay tandoor pot designed for family barbecues and weekend backyard cooking.",
    description: "Enjoy authentic smoked tandoori rotis and Paneer Tikka at home. Compact footprint fits comfortably in home balconies or garden patios.",
    images: [
      "/assets/shree-matla-ghar/tandoor/home-tandoor-main.jpg",
    ],
    priceLabel: "Price on Request",
    sizes: ["Small (12 inch inner)", "Medium (14 inch inner)"],
    material: "Traditional Fired Clay Pot",
    availability: "in-stock",
    wholesaleAvailable: false,
    featured: false,
    tags: ["home tandoor", "backyard barbecue", "mini tandoor"],
    careInstructions: ["Store under cover during monsoon season."],
    useCases: ["Home Weekend Barbecue", "Family Gatherings"],
    weight: "18 kg"
  },

  // MATKA & WATER POTS
  {
    id: "matka-deshi-01",
    slug: "traditional-clay-matka-with-tap",
    name: "Traditional Deshi Clay Matka with Tap",
    category: "matka",
    shortDescription: "Hand-shaped natural clay water pot fitted with an easy-use tap for naturally chilled alkaline drinking water.",
    description: "Crafted from natural Bhavnagar clay, this traditional Matka naturally cools drinking water through evaporative micro-pores while balancing pH levels.",
    images: [
      "/assets/shree-matla-ghar/matka/deshi-matka-tap.jpg",
      "/assets/shree-matla-ghar/matka/deshi-matka-top.jpg",
    ],
    priceLabel: "Price on Request / Contact Store",
    sizes: ["5 Litres", "8 Litres", "12 Litres", "15 Litres"],
    material: "100% Pure Natural Clay / Mitti",
    dimensions: "12\" Diameter x 15\" Height",
    availability: "in-stock",
    wholesaleAvailable: true,
    featured: true,
    tags: ["matka", "water pot", "clay matka", "natural cooling", "deshi mitti"],
    careInstructions: [
      "Soak in clean water for 12 hours before initial use.",
      "Rinse with plain water and scrub lightly with soft coconut husk.",
      "Avoid chemical detergents."
    ],
    useCases: ["Everyday healthy drinking water", "Office & Home hydration"],
    weight: "3.5 kg"
  },
  {
    id: "matka-surahi-02",
    slug: "narrow-neck-clay-surahi",
    name: "Classic Narrow-Neck Clay Surahi",
    category: "matka",
    shortDescription: "Elegant elongated-neck terracotta water pitcher designed for gentle natural water cooling.",
    description: "Inspired by traditional Indian heritage pottery, the long narrow neck restricts dust while allowing evaporative cooling.",
    images: [
      "/assets/shree-matla-ghar/matka/surahi-main.jpg",
    ],
    priceLabel: "Price on Request",
    sizes: ["2 Litres", "3 Litres", "5 Litres"],
    material: "Terracotta Clay",
    availability: "in-stock",
    wholesaleAvailable: true,
    featured: false,
    tags: ["surahi", "clay pitcher", "terracotta"],
    careInstructions: ["Rinse with warm water."],
    useCases: ["Dining table water serving", "Pooja water vessel"],
    weight: "2.2 kg"
  },

  // KULHAD & SERVEWARE
  {
    id: "kulhad-pack-01",
    slug: "handmade-chai-kulhad-pack",
    name: "Handmade Mitti Chai Kulhad Set",
    category: "kulhad",
    shortDescription: "Traditional eco-friendly unglazed clay tea cups that impart an authentic earthy aroma into hot tea and coffee.",
    description: "Every sip of masala chai tastes divine when served in an unglazed clay Kulhad. Fired at optimal temperatures for single-use catering or reusable home serving.",
    images: [
      "/assets/shree-matla-ghar/kulhad/kulhad-set.jpg",
    ],
    priceLabel: "Price on Request (Bulk Discount Available)",
    sizes: ["100 ml", "150 ml", "200 ml"],
    material: "Unglazed Natural Terracotta",
    availability: "in-stock",
    wholesaleAvailable: true,
    featured: true,
    tags: ["kulhad", "chai cup", "tea cups", "bulk kulhad"],
    careInstructions: ["Warm rinse for reuse or disposable catering use."],
    useCases: ["Tea stalls & Cafes", "Weddings & Catering events"],
    weight: "100g per cup"
  },

  // HANDI & COOKWARE
  {
    id: "handi-biryani-01",
    slug: "clay-dum-biryani-handi-with-lid",
    name: "Unglazed Clay Dum Biryani Handi with Lid",
    category: "handi",
    shortDescription: "Thick-walled earthen cooking handi designed for slow dum cooking and rich dal makhani.",
    description: "Cook nutritious meals without losing moisture. Clay handis distribute heat evenly and seal in natural juices.",
    images: [
      "/assets/shree-matla-ghar/handi/biryani-handi-main.jpg",
    ],
    priceLabel: "Price on Request",
    sizes: ["1 Litre", "2 Litres", "3.5 Litres", "5 Litres"],
    material: "Organic Fired Clay (Lead-Free)",
    availability: "in-stock",
    wholesaleAvailable: true,
    featured: true,
    isNew: true,
    tags: ["handi", "cooking pot", "biryani handi", "mitti handi"],
    careInstructions: [
      "Season with mustard oil before first gas burner use.",
      "Use low to medium flame."
    ],
    useCases: ["Dum Biryani preparation", "Handi Curries", "Thick Curd setting"],
    weight: "2.1 kg"
  },

  // PLANTERS & GARDEN
  {
    id: "planter-gamla-01",
    slug: "terracotta-fluted-garden-gamla",
    name: "Terracotta Garden Planter (Gamla)",
    category: "planters",
    shortDescription: "Breathable terracotta planter pot with drainage hole for healthier plant root aeration.",
    description: "Porous terracotta walls allow root respiration while regulating soil temperature under outdoor sunlight.",
    images: [
      "/assets/shree-matla-ghar/planters/gamla-planter-main.jpg",
    ],
    priceLabel: "Price on Request",
    sizes: ["8 inch", "10 inch", "12 inch", "16 inch"],
    material: "Terracotta Clay",
    availability: "in-stock",
    wholesaleAvailable: true,
    featured: false,
    tags: ["gamla", "planter", "terracotta pot", "garden pots"],
    careInstructions: ["Rinse with garden hose."],
    useCases: ["Balcony plants", "Tulsi plant placement"],
    weight: "3.0 kg"
  },

  // GANPATI IDOLS
  {
    id: "ganpati-shadu-01",
    slug: "eco-friendly-shadu-mati-ganpati-idol",
    name: "100% Eco-Friendly Shadu Mati Ganpati Idol",
    category: "ganpati",
    shortDescription: "Pure natural riverbed clay Lord Ganesha idol hand-painted with organic herbal colors.",
    description: "Celebrate Ganesh Chaturthi with devotion and environmental care. Made from 100% natural Shadu Mati without any Plaster of Paris (PoP). Dissolves completely in water during Visarjan.",
    images: [
      "/assets/shree-matla-ghar/ganpati/shadu-ganpati-main.jpg",
      "/assets/shree-matla-ghar/ganpati/shadu-ganpati-detail.jpg"
    ],
    priceLabel: "Price on Request / Advance Booking",
    sizes: ["Small (1 Foot)", "Medium (1.5 Feet)", "Large (2 Feet)", "Designer Custom"],
    material: "100% Pure Natural Shadu Mati Clay",
    availability: "pre-order",
    wholesaleAvailable: true,
    featured: true,
    seasonal: true,
    isNew: true,
    tags: ["ganpati", "eco ganpati", "shadu mati", "ganesh idol", "visarjan friendly"],
    careInstructions: ["Keep in dry indoor place until Sthapana."],
    useCases: ["Ganesh Chaturthi Home Sthapana", "Office Eco-Ganesh festival"],
    weight: "4.5 kg"
  },

  // FESTIVAL DIYAS
  {
    id: "diya-decorative-01",
    slug: "hand-crafted-clay-diya-set",
    name: "Handcrafted Terracotta Clay Diyas",
    category: "diya",
    shortDescription: "Pure mitti oil lamps for Diwali celebrations, festive lighting, and daily temple puja.",
    description: "Traditional earthen oil lamps handcrafted from pure clay and fired for oil retention.",
    images: [
      "/assets/shree-matla-ghar/diya/clay-diya-main.jpg",
    ],
    priceLabel: "Price on Request",
    sizes: ["Standard Pack of 12", "Bulk Event Pack"],
    material: "Natural Fired Clay",
    availability: "in-stock",
    wholesaleAvailable: true,
    featured: false,
    tags: ["diya", "diwali diya", "oil lamp", "puja items"],
    careInstructions: ["Fill with oil or ghee and cotton wick."],
    useCases: ["Diwali decoration", "Mandir daily lighting"],
    weight: "600 g"
  }
];
