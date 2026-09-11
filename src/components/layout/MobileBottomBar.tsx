import React from 'react';
import { MessageCircle, Phone, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getGeneralWhatsAppLink } from '../../utils/whatsapp';
import { BUSINESS_CONFIG } from '../../config/business';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-clay-200 p-2.5 sm:hidden shadow-earth-lg flex items-center gap-2">
      <Link
        to="/products"
        className="flex-1 flex flex-col items-center justify-center py-1.5 text-clay-700 hover:text-clay-900 bg-clay-100/80 rounded-xl text-center"
      >
        <ShoppingBag className="w-4 h-4 text-clay-600" />
        <span className="text-[10px] font-bold mt-0.5">Catalog</span>
      </Link>

      <a
        href={`tel:${BUSINESS_CONFIG.phone}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-clay-100 hover:bg-clay-200 text-clay-900 rounded-xl text-xs font-bold border border-clay-300 transition-colors"
      >
        <Phone className="w-4 h-4 text-clay-600" />
        <span>Call</span>
      </a>

      <a
        href={getGeneralWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[1.5] flex items-center justify-center gap-1.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-extrabold shadow-sm transition-all"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
