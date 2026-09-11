import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MessageCircle, Share2, ArrowLeft, Check, Info, Package, Plus, Phone, MapPin, Sparkles, ShieldCheck, Truck } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { getProductWhatsAppLink } from '../utils/whatsapp';
import { updateSeoMetaData } from '../utils/seo';
import { ProductCard } from '../components/product/ProductCard';
import { ShareModal } from '../components/product/ShareModal';
import { BUSINESS_CONFIG } from '../config/business';
import { useEnquiry } from '../context/EnquiryContext';
import { FavoriteButton } from '../components/common/FavoriteButton';
import { BulkEnquiryDrawer } from '../components/common/BulkEnquiryDrawer';
import { trackProductView } from '../utils/analytics';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.slug === slug);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isBulkOpen, setIsBulkOpen] = useState(false);
  const [customNote, setCustomNote] = useState('');
  const { addToEnquiry, isInEnquiry } = useEnquiry();

  useEffect(() => {
    if (product) {
      updateSeoMetaData({
        title: `${product.name} | ${BUSINESS_CONFIG.brandName}`,
        description: product.shortDescription,
        canonicalPath: `/product/${product.slug}`,
        image: product.images[0],
        type: 'product',
        product,
      });

      if (product.sizes.length > 0) {
        setSelectedSize(product.sizes[0]);
      }
      
      trackProductView(product.id, product.name, product.category);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white rounded-3xl border border-clay-200 text-center space-y-4">
        <span className="text-4xl">🏺</span>
        <h2 className="font-serif font-bold text-2xl text-clay-900">Product Not Found</h2>
        <p className="text-xs text-clay-600">The pottery product you are looking for might have been moved or renamed.</p>
        <Link to="/products" className="inline-block px-6 py-2.5 bg-clay-500 text-white font-bold text-xs rounded-xl">
          Back to Showroom Catalog
        </Link>
      </div>
    );
  }

  const whatsappUrl = getProductWhatsAppLink({
    productName: product.name,
    category: product.category,
    size: selectedSize,
    customNote: customNote.trim() || undefined,
  });

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 pb-28 sm:pb-20">
      
      {/* Navigation Breadcrumbs & Back Button */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-clay-600 font-medium">
        <nav className="flex items-center gap-1.5 flex-wrap truncate text-[11px] sm:text-xs">
          <Link to="/" className="hover:text-clay-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/pottery" className="hover:text-clay-900 transition-colors">Pottery</Link>
          <span>/</span>
          <Link to={`/pottery?category=${product.category}`} className="hover:text-clay-900 capitalize transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="font-bold text-clay-900 truncate max-w-[150px] sm:max-w-none">{product.name}</span>
        </nav>

        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-clay-700 hover:text-clay-900 bg-white border border-clay-200 px-3.5 py-2.5 rounded-xl transition-colors min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
      </div>

      {/* Main Product Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Left Column — Image Gallery */}
        <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-clay-100 border border-clay-200 shadow-earth">
            <ImageWithFallback
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.featured && (
              <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-clay-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Featured Pottery
              </span>
            )}
          </div>

          {/* Thumbnail Strip */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    activeImageIndex === idx ? 'border-clay-500 ring-2 ring-clay-400/30' : 'border-clay-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <ImageWithFallback src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column — Specs & WhatsApp Actions */}
        <div className="lg:col-span-6 space-y-5 sm:space-y-6">
          
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-clay-600 bg-clay-200/70 px-3 py-1 rounded-md">
                {product.category}
              </span>
              <div className="flex items-center gap-2">
                <FavoriteButton productId={product.id} />
                <button
                  onClick={() => setIsShareOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-clay-700 hover:text-clay-900 bg-white border border-clay-200 px-3 py-2 rounded-xl transition-colors min-h-[40px]"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Share</span>
                </button>
              </div>
            </div>

            <h1 className="font-serif font-bold text-fluid-h1 text-clay-900 mt-2">{product.name}</h1>
            
            <div className="mt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="font-serif font-bold text-xl sm:text-2xl text-clay-900">
                {product.priceLabel || (product.price ? `₹${product.price}` : 'Price on Request')}
              </span>
              {product.availability === 'in-stock' ? (
                <span className="bg-emerald-100 text-emerald-800 text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Store Stock Available
                </span>
              ) : (
                <span className="bg-amber-100 text-amber-800 text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-md">
                  Pre-Order / Contact Store
                </span>
              )}
            </div>
          </div>

          <p className="text-clay-700 text-xs sm:text-sm leading-relaxed border-t border-b border-clay-200 py-3.5 sm:py-4">
            {product.description}
          </p>

          {/* Size Selection */}
          {product.sizes.length > 0 && (
            <div className="space-y-2">
              <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-clay-800">
                Available Size / Capacity Variants:
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all border min-h-[40px] ${
                      selectedSize === sz
                        ? 'bg-clay-500 text-white border-clay-500 shadow-sm'
                        : 'bg-white text-clay-800 border-clay-300 hover:bg-clay-100'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Additional Notes input for WhatsApp enquiry */}
          <div className="space-y-1.5">
            <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-clay-800">
              Enquiry Note / Delivery Location (Optional):
            </label>
            <input
              type="text"
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder="e.g. Need delivery to Subhashnagar, Bhavnagar"
              className="w-full bg-white text-clay-900 text-xs px-3.5 py-3 rounded-xl border border-clay-300 focus:outline-none focus:ring-2 focus:ring-clay-500 min-h-[44px]"
            />
          </div>

          {/* Core Conversion CTAs */}
          <div className="space-y-3 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => product && addToEnquiry(product)}
                className={`py-3.5 sm:py-4 font-bold text-xs sm:text-sm rounded-2xl border transition-all flex items-center justify-center gap-2 min-h-[48px] ${
                  product && isInEnquiry(product.id)
                    ? 'bg-amber-500 text-clay-950 border-amber-500 shadow-md'
                    : 'bg-amber-100 hover:bg-amber-200 text-amber-950 border-amber-300'
                }`}
              >
                {product && isInEnquiry(product.id) ? (
                  <>
                    <Check className="w-5 h-5 shrink-0" />
                    <span>Added to Enquiry List</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5 shrink-0 text-amber-900" />
                    <span>Add to Multi-Product Enquiry</span>
                  </>
                )}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 sm:py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-earth transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Instant WhatsApp Quote</span>
              </a>
            </div>

            {/* Direct Phone & Store Map CTA buttons */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="py-2.5 px-3 bg-clay-100 hover:bg-clay-200 text-clay-900 font-bold text-xs rounded-xl border border-clay-300 transition-colors flex items-center justify-center gap-1.5 min-h-[40px]"
              >
                <Phone className="w-3.5 h-3.5 text-clay-700" />
                <span>Call Store</span>
              </a>
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-clay-100 hover:bg-clay-200 text-clay-900 font-bold text-xs rounded-xl border border-clay-300 transition-colors flex items-center justify-center gap-1.5 min-h-[40px]"
              >
                <MapPin className="w-3.5 h-3.5 text-clay-700" />
                <span>Store Location</span>
              </a>
            </div>

            {product.wholesaleAvailable && (
              <button
                onClick={() => setIsBulkOpen(true)}
                className="w-full py-3 sm:py-3.5 bg-amber-50 hover:bg-amber-100 text-amber-950 font-bold text-xs rounded-2xl border border-amber-200 transition-colors flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Package className="w-4 h-4 text-amber-800" />
                <span>Looking for Wholesale Bulk Supply? →</span>
              </button>
            )}
          </div>

          {/* Recommended Use Cases */}
          {product.useCases && product.useCases.length > 0 && (
            <div className="bg-clay-50/80 rounded-2xl p-4 sm:p-5 border border-clay-200 space-y-2.5">
              <h4 className="font-serif font-bold text-xs sm:text-sm text-clay-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" /> Recommended Applications & Uses
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.useCases.map((useCase, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-clay-800 text-xs font-semibold px-3 py-1.5 rounded-lg border border-clay-200 shadow-2xs"
                  >
                    ✨ {useCase}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technical Specifications */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-clay-200 space-y-3">
            <h4 className="font-serif font-bold text-sm sm:text-base text-clay-900">Product Specifications</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-clay-500 block">Material</span>
                <strong className="text-clay-900">{product.material}</strong>
              </div>
              {product.dimensions && (
                <div>
                  <span className="text-clay-500 block">Dimensions</span>
                  <strong className="text-clay-900">{product.dimensions}</strong>
                </div>
              )}
              {product.weight && (
                <div>
                  <span className="text-clay-500 block">Approx. Weight</span>
                  <strong className="text-clay-900">{product.weight}</strong>
                </div>
              )}
              <div>
                <span className="text-clay-500 block">Store Location</span>
                <strong className="text-clay-900">{BUSINESS_CONFIG.city}, Gujarat</strong>
              </div>
              <div>
                <span className="text-clay-500 block">Category</span>
                <strong className="text-clay-900 capitalize">{product.category}</strong>
              </div>
              <div>
                <span className="text-clay-500 block">Supply Type</span>
                <strong className="text-clay-900">{product.wholesaleAvailable ? 'Retail & Bulk Wholesale' : 'Store Retail'}</strong>
              </div>
            </div>
          </div>

          {/* Care Instructions */}
          {product.careInstructions && product.careInstructions.length > 0 && (
            <div className="bg-clay-50 rounded-2xl p-4 sm:p-5 border border-clay-200 space-y-2">
              <h4 className="font-serif font-bold text-xs sm:text-sm text-clay-900 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-clay-500 shrink-0" /> Care & Usage Guide
              </h4>
              <ul className="space-y-1.5 text-xs text-clay-700 list-disc list-inside">
                {product.careInstructions.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Store Assurance Trust Badges */}
          <div className="grid grid-cols-3 gap-2 pt-2 text-center border-t border-clay-200">
            <div className="p-2 space-y-1">
              <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto" />
              <span className="text-[10px] sm:text-xs font-bold text-clay-800 block">100% Natural Clay</span>
            </div>
            <div className="p-2 space-y-1">
              <Sparkles className="w-5 h-5 text-amber-600 mx-auto" />
              <span className="text-[10px] sm:text-xs font-bold text-clay-800 block">Artisan Handmade</span>
            </div>
            <div className="p-2 space-y-1">
              <Truck className="w-5 h-5 text-clay-600 mx-auto" />
              <span className="text-[10px] sm:text-xs font-bold text-clay-800 block">Subhashnagar Store</span>
            </div>
          </div>

        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="pt-8 sm:pt-10 border-t border-clay-200 space-y-4 sm:space-y-6">
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-clay-900">Recommended Pottery Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      )}

      <ShareModal product={product} isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
      <BulkEnquiryDrawer 
        isOpen={isBulkOpen} 
        onClose={() => setIsBulkOpen(false)} 
        preselectedProduct={product.name}
      />
    </div>
  );
};
