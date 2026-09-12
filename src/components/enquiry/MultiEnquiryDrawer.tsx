import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, Package, Send, ArrowRight } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';
import { useLanguage } from '../../context/LanguageContext';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { BUSINESS_CONFIG } from '../../config/business';
import { trackBulkEnquiry } from '../../utils/analytics';

export const MultiEnquiryDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeEnquiryDrawer,
    removeFromEnquiry,
    updateQuantity,
    clearEnquiry,
    totalItemsCount,
    generateWhatsAppUrl,
  } = useEnquiry();
  const { t } = useLanguage();

  const [customerName, setCustomerName] = useState('');
  const [customerLocation, setCustomerLocation] = useState('');
  const [customNote, setCustomNote] = useState('');

  if (!isOpen) return null;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    trackBulkEnquiry('submit', items.map((i) => i.product.name).join(', '));
    const url = generateWhatsAppUrl(customerName, customerLocation, customNote);
    window.open(url, '_blank');
    closeEnquiryDrawer();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeEnquiryDrawer}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative w-full sm:max-w-md md:max-w-lg bg-white h-full sm:h-[94vh] sm:rounded-l-3xl shadow-2xl flex flex-col justify-between overflow-hidden z-10">
        
        {/* Header */}
        <div className="bg-clay-900 text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-clay-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-white">{t.enquiryDrawer.title}</h3>
              <p className="text-xs text-clay-300">
                {totalItemsCount > 0 ? `${totalItemsCount} ${t.enquiryDrawer.subtitle}` : t.enquiryDrawer.emptyText}
              </p>
            </div>
          </div>
          <button
            onClick={closeEnquiryDrawer}
            className="p-2 text-clay-300 hover:text-white bg-clay-800 hover:bg-clay-700 rounded-full transition-colors"
            aria-label="Close enquiry list"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-4 max-w-xs mx-auto">
              <div className="w-16 h-16 bg-clay-100 rounded-full flex items-center justify-center mx-auto text-clay-400">
                <Package className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-lg text-clay-900">{t.enquiryDrawer.emptyTitle}</h4>
                <p className="text-xs text-clay-600 leading-relaxed">
                  {t.enquiryDrawer.emptyText}
                </p>
                <button
                  onClick={() => {
                    closeEnquiryDrawer();
                    window.location.href = '/pottery';
                  }}
                  className="inline-block mt-2 px-5 py-2.5 bg-clay-500 hover:bg-clay-600 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
                >
                  {t.enquiryDrawer.browsePottery}
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between pb-2 border-b border-clay-100">
                <span className="text-xs font-bold uppercase tracking-wider text-clay-600">Selected Products ({items.length})</span>
                <button
                  onClick={clearEnquiry}
                  className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  {t.cta.clearEnquiry}
                </button>
              </div>

              <div className="space-y-3">
                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="p-3 bg-clay-50/80 border border-clay-200/80 rounded-2xl flex items-center gap-3 shadow-xs"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shrink-0 border border-clay-200">
                      <ImageWithFallback src={product.images[0]} alt={product.name} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h5 className="font-serif font-bold text-xs sm:text-sm text-clay-900 truncate">{product.name}</h5>
                      <p className="text-[11px] text-clay-500 capitalize">{product.category}</p>
                      <span className="text-[11px] font-semibold text-amber-900 block mt-0.5">
                        {product.priceLabel || t.product.priceOnRequest}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex items-center bg-white border border-clay-300 rounded-xl overflow-hidden">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="p-1.5 text-clay-600 hover:bg-clay-100"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-clay-900">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="p-1.5 text-clay-600 hover:bg-clay-100"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromEnquiry(product.id)}
                        className="p-1.5 text-clay-400 hover:text-red-600"
                        title="Remove product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer Contact Inputs */}
              <div className="pt-4 border-t border-clay-200 space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-clay-800">{t.enquiryDrawer.additionalNoteLabel}</h5>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    maxLength={50}
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value.slice(0, 50))}
                    placeholder="Your Name"
                    className="px-3.5 py-2 text-xs rounded-xl border border-clay-300 focus:outline-none focus:ring-2 focus:ring-clay-500 bg-white"
                  />
                  <input
                    type="text"
                    maxLength={60}
                    value={customerLocation}
                    onChange={(e) => setCustomerLocation(e.target.value.slice(0, 60))}
                    placeholder="City / Locality (e.g. Bhavnagar)"
                    className="px-3.5 py-2 text-xs rounded-xl border border-clay-300 focus:outline-none focus:ring-2 focus:ring-clay-500 bg-white"
                  />
                </div>

                <textarea
                  rows={2}
                  maxLength={250}
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value.slice(0, 250))}
                  placeholder={t.enquiryDrawer.notePlaceholder}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-clay-300 focus:outline-none focus:ring-2 focus:ring-clay-500 bg-white resize-none"
                />
              </div>
            </>
          )}
        </div>

        {/* Footer Submit CTA */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 bg-white border-t border-clay-200 space-y-2.5 shrink-0 shadow-lg">
            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-earth transition-all flex items-center justify-center gap-2 min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>{t.cta.sendEnquiryWhatsApp}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
            <p className="text-[10px] text-center text-clay-500">
              Direct pricing & delivery confirmation via WhatsApp from {BUSINESS_CONFIG.brandName}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
