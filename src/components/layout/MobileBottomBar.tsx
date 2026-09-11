import React from 'react';
import { MessageCircle, Phone, ShoppingBag, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getGeneralWhatsAppLink } from '../../utils/whatsapp';
import { BUSINESS_CONFIG } from '../../config/business';
import { useEnquiry } from '../../context/EnquiryContext';

export const MobileBottomBar: React.FC = () => {
  const { totalItemsCount, openEnquiryDrawer } = useEnquiry();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-clay-200 p-2.5 sm:hidden shadow-earth-lg flex items-center gap-2">
      <Link
        to="/products"
        className="flex-1 flex flex-col items-center justify-center py-1 text-clay-700 hover:text-clay-900 bg-clay-100/80 rounded-xl text-center min-h-[42px]"
      >
        <ShoppingBag className="w-4 h-4 text-clay-600" />
        <span className="text-[10px] font-bold mt-0.5">Catalog</span>
      </Link>

      <button
        onClick={openEnquiryDrawer}
        className="flex-1 flex flex-col items-center justify-center py-1 text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300/60 rounded-xl text-center relative min-h-[42px]"
      >
        <Package className="w-4 h-4 text-amber-900" />
        <span className="text-[10px] font-bold mt-0.5">Enquiry</span>
        {totalItemsCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
            {totalItemsCount}
          </span>
        )}
      </button>

      <a
        href={`tel:${BUSINESS_CONFIG.phone}`}
        className="flex-1 flex items-center justify-center gap-1 py-2.5 bg-clay-100 hover:bg-clay-200 text-clay-900 rounded-xl text-xs font-bold border border-clay-300 transition-colors min-h-[42px]"
      >
        <Phone className="w-3.5 h-3.5 text-clay-600" />
        <span>Call</span>
      </a>

      <a
        href={getGeneralWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[1.3] flex items-center justify-center gap-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-extrabold shadow-sm transition-all min-h-[42px]"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
