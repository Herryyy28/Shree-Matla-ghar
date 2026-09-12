import { BUSINESS_CONFIG } from '../config/business';
import { Product } from '../types';
import { buildProductUrl } from './productUrl';

export interface SeoProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
  type?: 'website' | 'product';
  product?: Product;
}

/**
 * Updates document head title, meta tags, and appends JSON-LD structured data
 */
export function updateSeoMetaData(props: SeoProps) {
  const {
    title = `${BUSINESS_CONFIG.brandName} | ${BUSINESS_CONFIG.listingName} - Bhavnagar`,
    description = "Authentic traditional clay products, matkas, kulhads, biryani handis, and specialist Drum Tandoor, Trolly Tandoor, SS Tandoors at Shree Matla Ghar, Subhashnagar, Bhavnagar, Gujarat.",
    canonicalPath = '',
    image = "/assets/shree-matla-ghar/store/showroom-front.jpg",
    type = 'website',
    product
  } = props;

  // Title
  document.title = title.includes(BUSINESS_CONFIG.brandName) 
    ? title 
    : `${title} | ${BUSINESS_CONFIG.brandName}`;

  // Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // Open Graph & Canonical URL Resolution
  let siteOrigin = typeof window !== 'undefined' ? window.location.origin : '';
  if (!siteOrigin || siteOrigin.includes('localhost') || siteOrigin.includes('127.0.0.1')) {
    siteOrigin = BUSINESS_CONFIG.siteUrl || 'https://shreematlaghar.vercel.app';
  }
  const cleanSiteOrigin = siteOrigin.replace(/\/+$/, '');
  const fullCanonicalUrl = product 
    ? buildProductUrl(product) 
    : `${cleanSiteOrigin}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  setMetaTag('property', 'og:title', document.title);
  setMetaTag('property', 'og:description', description);
  setMetaTag('property', 'og:image', image);
  setMetaTag('property', 'og:type', type);
  setMetaTag('property', 'og:url', fullCanonicalUrl);

  // Canonical
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', fullCanonicalUrl);

  // JSON-LD Structured Data
  injectJsonLdSchema(product);
}

function setMetaTag(attrName: string, attrVal: string, content: string) {
  let tag = document.querySelector(`meta[${attrName}="${attrVal}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrName, attrVal);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function injectJsonLdSchema(product?: Product) {
  const oldScript = document.getElementById('dynamic-jsonld-schema');
  if (oldScript) {
    oldScript.remove();
  }

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": BUSINESS_CONFIG.brandName,
      "alternateName": BUSINESS_CONFIG.listingName,
      "description": `${BUSINESS_CONFIG.brandTagline} Specialist in Drum Tandoor, Trolly Tandoor, SS Tandoor, Matka, and traditional clay pottery in Bhavnagar, Gujarat.`,
      "telephone": BUSINESS_CONFIG.phone,
      "email": BUSINESS_CONFIG.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS_CONFIG.address,
        "addressLocality": BUSINESS_CONFIG.city,
        "addressRegion": BUSINESS_CONFIG.state,
        "postalCode": BUSINESS_CONFIG.pincode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": BUSINESS_CONFIG.latitude,
        "longitude": BUSINESS_CONFIG.longitude
      },
      "hasMap": BUSINESS_CONFIG.googleMapsUrl,
      "url": window.location.origin,
      "openingHours": "Mo-Su 08:00-22:00",
      "priceRange": "₹"
    }
  ];

  if (product) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "image": product.images,
      "description": product.description,
      "material": product.material,
      "brand": {
        "@type": "Brand",
        "name": BUSINESS_CONFIG.brandName
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": BUSINESS_CONFIG.brandName
        }
      }
    });
  }

  const script = document.createElement('script');
  script.id = 'dynamic-jsonld-schema';
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schemas);
  document.head.appendChild(script);
}
