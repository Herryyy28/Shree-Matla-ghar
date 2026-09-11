import React from 'react';
import { X, Copy, MessageCircle, Share2, Check, Smartphone } from 'lucide-react';
import { Product } from '../../types';
import { useToast } from '../common/Toast';
import { BUSINESS_CONFIG } from '../../config/business';
import { trackEvent } from '../../utils/analytics';
import { QRCodeCard } from '../common/QRCodeCard';

interface ShareModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ product, isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const { showToast } = useToast();

  if (!isOpen) return null;

  const productUrl = `${window.location.origin}/product/${product.slug}`;
  const shareText = `Check out "${product.name}" on ${BUSINESS_CONFIG.brandName} - ${product.shortDescription}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(productUrl);
      setCopied(true);
      showToast('Product link copied to clipboard!', 'success');
      trackEvent({ event: 'product_share', category: 'copy_link', label: product.id });
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      showToast('Failed to copy link', 'error');
    }
  };

  const handleWhatsAppShare = () => {
    trackEvent({ event: 'product_share', category: 'whatsapp', label: product.id });
    const waUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${productUrl}`)}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  const handleFacebookShare = () => {
    trackEvent({ event: 'product_share', category: 'facebook', label: product.id });
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
    window.open(fbUrl, '_blank');
    onClose();
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${product.name} | ${BUSINESS_CONFIG.brandName}`,
          text: shareText,
          url: productUrl,
        });
        trackEvent({ event: 'product_share', category: 'native', label: product.id });
        onClose();
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          showToast('Failed to share', 'error');
        }
      }
    }
  };

  const hasNativeShare = typeof navigator !== 'undefined' && !!navigator.share;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-clay-100 border border-clay-300 rounded-2xl max-w-md w-full p-6 shadow-earth-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-clay-700 hover:text-clay-900 bg-clay-200/60 p-2 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-clay-500/10 flex items-center justify-center text-clay-600">
            <Share2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-clay-900">Share Product</h3>
            <p className="text-xs text-clay-700">Share with family, friends, or clients</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-clay-200 mb-6">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-14 h-14 object-cover rounded-lg shrink-0 border border-clay-200"
          />
          <div className="overflow-hidden">
            <p className="font-medium text-sm text-clay-900 truncate">{product.name}</p>
            <p className="text-xs text-clay-600 truncate">{product.category.toUpperCase()} • {product.priceLabel || 'Price on Request'}</p>
          </div>
        </div>

        <div className={`grid gap-3 mb-4 ${hasNativeShare ? 'grid-cols-1' : 'grid-cols-2'}`}>
          {hasNativeShare ? (
            <button
              onClick={handleNativeShare}
              className="flex items-center justify-center gap-2 p-3 bg-clay-900 hover:bg-clay-800 text-white rounded-xl text-sm font-medium transition-all shadow-sm w-full"
            >
              <Smartphone className="w-4 h-4" />
              Share via Device...
            </button>
          ) : null}
          
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleWhatsAppShare}
              className="flex items-center justify-center gap-2 p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
            <button
              onClick={handleFacebookShare}
              className="flex items-center justify-center gap-2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-all shadow-sm"
            >
              <Share2 className="w-4 h-4" />
              Facebook
            </button>
          </div>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            readOnly
            value={productUrl}
            className="w-full bg-white text-xs text-clay-800 pr-24 pl-3 py-2.5 rounded-xl border border-clay-300 font-mono focus:outline-none"
          />
          <button
            onClick={handleCopyLink}
            className="absolute right-1 top-1 bottom-1 px-3 bg-clay-500 hover:bg-clay-600 text-white text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" /> Copied
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Copy Link
              </>
            )}
          </button>
        </div>
        
        {/* QR Code Section */}
        <div className="pt-4 border-t border-clay-200">
          <QRCodeCard url={productUrl} title={product.name} subtitle="Scan to view this product" />
        </div>
      </div>
    </div>
  );
};
