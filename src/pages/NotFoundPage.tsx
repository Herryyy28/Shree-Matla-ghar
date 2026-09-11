import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingBag, MessageCircle, ArrowLeft } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';
import { updateSeoMetaData } from '../utils/seo';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    updateSeoMetaData({
      title: `Page Not Found | ${BUSINESS_CONFIG.brandName}`,
      description: 'The page you are looking for does not exist. Visit our pottery showroom at Shree Matla Ghar, Bhavnagar.',
      canonicalPath: '/404',
    });
  }, []);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center space-y-6">
      <div className="text-6xl sm:text-8xl select-none">🏺</div>
      
      <div className="space-y-2 max-w-lg">
        <h1 className="font-serif font-bold text-fluid-h1 text-clay-900">Page Not Found</h1>
        <p className="text-clay-600 text-sm sm:text-base leading-relaxed">
          The pottery page you are looking for has moved or does not exist. 
          Visit our showroom catalog to discover genuine clay products.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-sm sm:max-w-none sm:w-auto">
        <Link
          to="/"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-clay-900 hover:bg-clay-800 text-white font-bold text-sm rounded-2xl transition-colors min-h-[44px]"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <Link
          to="/products"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-clay-50 text-clay-900 font-bold text-sm rounded-2xl border border-clay-200 transition-colors min-h-[44px]"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Browse Products</span>
        </Link>

        <a
          href={getGeneralWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-2xl transition-colors min-h-[44px]"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>
      </div>

      <p className="text-xs text-clay-500">
        Or call us at{' '}
        <a href={`tel:${BUSINESS_CONFIG.phone}`} className="font-bold text-clay-700 hover:underline">
          {BUSINESS_CONFIG.phone}
        </a>
      </p>
    </div>
  );
};
