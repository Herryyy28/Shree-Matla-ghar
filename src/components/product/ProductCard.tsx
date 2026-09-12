import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Share2, Eye, Tag, Package, Check, Plus } from 'lucide-react';
import { Product } from '../../types';
import { getProductWhatsAppLink } from '../../utils/whatsapp';
import { ShareModal } from './ShareModal';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { FavoriteButton } from '../common/FavoriteButton';
import { BulkEnquiryDrawer } from '../common/BulkEnquiryDrawer';
import { useEnquiry } from '../../context/EnquiryContext';
import { useLanguage } from '../../context/LanguageContext';
import { getProductCanonicalPath, buildProductUrl } from '../../utils/productUrl';
import { ProductActivityBadge } from './ProductActivityBadge';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isBulkOpen, setIsBulkOpen] = useState(false);
  const { addToEnquiry, isInEnquiry } = useEnquiry();
  const { t } = useLanguage();

  const isEnquired = isInEnquiry(product.id);

  const productUrl = buildProductUrl(product);
  const whatsappUrl = getProductWhatsAppLink({
    productName: product.name,
    category: product.category,
    priceLabel: product.priceLabel,
    productUrl,
  });

  return (
    <>
      <div className="group bg-white rounded-2xl border border-clay-200/80 shadow-earth hover:shadow-earth-lg transition-all duration-300 flex flex-col h-full overflow-hidden relative">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5 pointer-events-none">
          {product.isNew && (
            <span className="bg-emerald-600 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              {t.badge.new}
            </span>
          )}
          {product.featured && (
            <span className="bg-clay-500 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              {t.badge.popular}
            </span>
          )}
          {product.seasonal && (
            <span className="bg-amber-600 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              {t.badge.special}
            </span>
          )}
          {product.wholesaleAvailable && (
            <span className="bg-sage-600 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              {t.badge.bulkOrder}
            </span>
          )}
        </div>

        {/* Top Right Actions */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
          <FavoriteButton productId={product.id} size="sm" />
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsShareOpen(true);
            }}
            className="bg-white/90 hover:bg-white text-clay-700 hover:text-clay-900 p-1.5 rounded-full shadow-sm backdrop-blur-sm transition-all transform hover:scale-105"
            title="Share Product"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Product Image */}
        <Link to={getProductCanonicalPath(product)} className="block relative aspect-[4/3] img-zoom-container bg-clay-100 overflow-hidden">
          <ImageWithFallback
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
            <span className="inline-flex items-center gap-1.5 bg-white/95 text-clay-900 font-medium text-xs px-3.5 py-2 rounded-full shadow-md backdrop-blur-sm">
              <Eye className="w-3.5 h-3.5" /> {t.product.viewDetails}
            </span>
          </div>
        </Link>

        {/* Content */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-clay-600 uppercase tracking-wider mb-1">
              <Tag className="w-3 h-3 text-clay-400 shrink-0" />
              <span className="truncate">{product.category}</span>
            </div>

            <Link to={getProductCanonicalPath(product)}>
              <h3 className="font-serif font-bold text-base sm:text-lg text-clay-900 group-hover:text-clay-500 transition-colors line-clamp-1">
                {product.name}
              </h3>
            </Link>

            <p className="text-clay-600 text-xs mt-1 sm:mt-1.5 line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Sizes Pills */}
            <div className="mt-2.5 sm:mt-3 flex flex-wrap gap-1">
              {product.sizes.slice(0, 3).map((size) => (
                <span key={size} className="text-[10px] sm:text-[11px] bg-clay-100 text-clay-700 px-2 py-0.5 rounded-md border border-clay-200 truncate max-w-[120px]">
                  {size}
                </span>
              ))}
              {product.sizes.length > 3 && (
                <span className="text-[10px] sm:text-[11px] bg-clay-100 text-clay-600 px-1.5 py-0.5 rounded-md border border-clay-200">
                  +{product.sizes.length - 3}
                </span>
              )}
            </div>

            {/* Compact Activity Counters */}
            <ProductActivityBadge productId={product.id} variant="compact" className="mt-2.5 pt-2 border-t border-clay-100/80" />
          </div>

          {/* Pricing & Actions */}
          <div className="mt-3.5 pt-3 border-t border-clay-100 space-y-2.5">
            {/* Pricing Header Row */}
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <span className="text-[10px] text-clay-500 block font-bold uppercase tracking-wider">{t.product.specifications}</span>
                <span className="font-serif font-bold text-xs sm:text-sm text-clay-900 leading-tight block truncate">
                  {product.priceLabel || (product.price ? `₹${product.price}` : t.product.priceOnRequest)}
                </span>
              </div>
              <Link
                to={getProductCanonicalPath(product)}
                className="px-2.5 py-1.5 bg-clay-100 hover:bg-clay-200 text-clay-800 text-[11px] font-bold rounded-lg transition-colors shrink-0 flex items-center gap-1"
                title="View full product specifications and sizes"
              >
                <span>{t.nav.pottery}</span>
                <Eye className="w-3 h-3 text-clay-600" />
              </Link>
            </div>

            {/* Core Action Grid */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => addToEnquiry(product)}
                className={`py-2 px-2 text-[11px] sm:text-xs font-bold rounded-xl transition-all min-h-[38px] flex items-center justify-center gap-1 border ${
                  isEnquired
                    ? 'bg-amber-500 text-clay-950 border-amber-500 shadow-2xs'
                    : 'bg-amber-100/90 hover:bg-amber-200 text-amber-950 border-amber-300/80'
                }`}
                title="Add to multi-product WhatsApp enquiry list"
              >
                {isEnquired ? <Check className="w-3.5 h-3.5 shrink-0" /> : <Plus className="w-3.5 h-3.5 shrink-0" />}
                <span className="truncate">{isEnquired ? t.cta.addedToEnquiry : t.cta.addToEnquiry}</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 py-2 px-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] sm:text-xs font-bold rounded-xl shadow-2xs transition-all hover:scale-[1.02] min-h-[38px]"
                title="Direct WhatsApp Quote"
              >
                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{t.cta.whatsappQuote}</span>
              </a>
            </div>

            {product.wholesaleAvailable && (
              <button
                onClick={() => setIsBulkOpen(true)}
                className="w-full flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-bold text-clay-700 bg-white border border-clay-200 hover:bg-clay-50 hover:border-clay-300 rounded-xl transition-colors min-h-[34px]"
              >
                <Package className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                <span>{t.cta.requestBulkQuote}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <ShareModal product={product} isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
      <BulkEnquiryDrawer 
        isOpen={isBulkOpen} 
        onClose={() => setIsBulkOpen(false)} 
        preselectedProduct={product.name}
      />
    </>
  );
};
