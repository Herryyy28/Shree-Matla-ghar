import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Package, AlertCircle } from 'lucide-react';
import { getWholesaleWhatsAppLink } from '../../utils/whatsapp';
import { useToast } from './Toast';
import { trackBulkEnquiry } from '../../utils/analytics';

interface BulkEnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

const QUICK_QUANTITIES = ['10+', '25+', '50+', '100+', '500+'];

export const BulkEnquiryDrawer: React.FC<BulkEnquiryDrawerProps> = ({
  isOpen,
  onClose,
  preselectedProduct = '',
}) => {
  const { showToast } = useToast();
  const [form, setForm] = useState({
    name: '',
    businessName: '',
    phone: '',
    product: preselectedProduct,
    quantity: '50+',
    location: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update product when preselection changes
  useEffect(() => {
    setForm((prev) => ({ ...prev, product: preselectedProduct }));
  }, [preselectedProduct]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
      trackBulkEnquiry('start', preselectedProduct);
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen, preselectedProduct]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim() || form.phone.length < 10) errs.phone = 'Valid phone required';
    if (!form.location.trim()) errs.location = 'Location is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please fill all required fields.', 'error');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      trackBulkEnquiry('submit', form.product);
      showToast('Opening WhatsApp with your bulk enquiry!', 'success');
      const waUrl = getWholesaleWhatsAppLink({
        name: form.name,
        businessName: form.businessName || 'Not specified',
        product: form.product,
        quantity: form.quantity,
        location: form.location,
        message: form.message,
      });
      window.open(waUrl, '_blank');
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-y-auto max-h-[92vh] sm:max-h-[85vh]">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-clay-100 px-5 sm:px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-clay-100 rounded-xl flex items-center justify-center">
              <Package className="w-4 h-4 text-clay-700" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-base text-clay-900">Bulk Order Enquiry</h2>
              <p className="text-[11px] text-clay-500">Direct factory pricing via WhatsApp</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-clay-600 hover:text-clay-900 bg-clay-100 hover:bg-clay-200 rounded-full transition-colors"
            aria-label="Close bulk enquiry"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          
          {/* Product (preselected or editable) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-clay-700 mb-1.5">
              Product / Item *
            </label>
            <input
              type="text"
              value={form.product}
              onChange={(e) => setForm({ ...form, product: e.target.value })}
              placeholder="e.g. Drum Tandoor, Chai Kulhad, Matka..."
              className="w-full px-4 py-2.5 rounded-xl border border-clay-300 text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500 bg-clay-50"
            />
          </div>

          {/* Quick Quantity Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-clay-700 mb-1.5">
              Quantity Required
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {QUICK_QUANTITIES.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => setForm({ ...form, quantity: q })}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all min-h-[36px] ${
                    form.quantity === q
                      ? 'bg-clay-900 text-white'
                      : 'bg-clay-100 text-clay-800 hover:bg-clay-200'
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              placeholder="Or type custom quantity e.g. 200 Kulhads"
              className="w-full px-4 py-2.5 rounded-xl border border-clay-200 text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500 bg-clay-50"
            />
          </div>

          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-clay-700 mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Rajesh Kumar"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500 ${
                  errors.name ? 'border-red-400 bg-red-50' : 'border-clay-300 bg-clay-50'
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />{errors.name}
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-clay-700 mb-1.5">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="e.g. 9876543210"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500 ${
                  errors.phone ? 'border-red-400 bg-red-50' : 'border-clay-300 bg-clay-50'
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />{errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Business + Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-clay-700 mb-1.5">
                Business / Store Name
              </label>
              <input
                type="text"
                value={form.businessName}
                onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                placeholder="e.g. Royal Dhaba"
                className="w-full px-4 py-2.5 rounded-xl border border-clay-300 text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500 bg-clay-50"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-clay-700 mb-1.5">
                City / Location *
              </label>
              <input
                type="text"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                placeholder="e.g. Mumbai, Surat"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500 ${
                  errors.location ? 'border-red-400 bg-red-50' : 'border-clay-300 bg-clay-50'
                }`}
              />
              {errors.location && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />{errors.location}
                </p>
              )}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-clay-700 mb-1.5">
              Additional Notes
            </label>
            <textarea
              rows={2}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Custom sizes, branding, packaging, delivery timeline..."
              className="w-full px-4 py-2.5 rounded-xl border border-clay-300 text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500 bg-clay-50 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 min-h-[48px] text-sm"
          >
            {isSubmitting ? (
              <span>Preparing WhatsApp Enquiry...</span>
            ) : (
              <>
                <MessageCircle className="w-4 h-4" />
                <span>Send Bulk Enquiry on WhatsApp</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-clay-500 leading-tight">
            Your enquiry will open WhatsApp with product details pre-filled. No price commitments until confirmed by store.
          </p>
        </form>
      </div>
    </div>
  );
};
