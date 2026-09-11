import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { WholesaleEnquiry } from '../../types';
import { getWholesaleWhatsAppLink } from '../../utils/whatsapp';
import { PRODUCTS } from '../../data/products';
import { useToast } from '../common/Toast';

export const WholesaleForm: React.FC = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState<WholesaleEnquiry>({
    name: '',
    businessName: '',
    phone: '',
    whatsapp: '',
    product: PRODUCTS[0]?.name || 'Clay Matka',
    quantity: '50 units',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof WholesaleEnquiry, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof WholesaleEnquiry, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Contact name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business/Establishment name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid 10-digit phone number is required';
    if (!formData.location.trim()) newErrors.location = 'City / Delivery Location is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please correct the highlighted form errors.', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate quick verification & generate WhatsApp link
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Bulk Enquiry Generated! Opening WhatsApp for instant quote.', 'success');

      // Open WhatsApp directly with formatted quote
      const waUrl = getWholesaleWhatsAppLink({
        name: formData.name,
        businessName: formData.businessName,
        product: formData.product,
        quantity: formData.quantity,
        location: formData.location,
        message: formData.message,
      });

      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-clay-200 shadow-earth-lg">
      <div className="mb-8">
        <span className="bg-clay-100 text-clay-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Direct B2B Pricing
        </span>
        <h3 className="font-serif font-bold text-2xl sm:text-3xl text-clay-900 mt-2">Request Bulk Order Quote</h3>
        <p className="text-clay-600 text-sm mt-1">
          Fill in your requirement details below. Our wholesale manager will send you a custom discount catalog on WhatsApp.
        </p>
      </div>

      {isSubmitted ? (
        <div className="bg-clay-50 border border-clay-300 rounded-2xl p-8 text-center space-y-4 animate-fade-in">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-serif font-bold text-xl text-clay-900">Enquiry Ready!</h4>
          <p className="text-sm text-clay-700 max-w-md mx-auto">
            Your wholesale enquiry for <strong className="text-clay-900">{formData.quantity} of {formData.product}</strong> has been generated.
          </p>
          <div className="pt-2">
            <a
              href={getWholesaleWhatsAppLink(formData)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Re-open WhatsApp Quote</span>
            </a>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-xs text-clay-500 underline hover:text-clay-800 mt-4 block mx-auto"
          >
            Submit another bulk request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Contact Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-clay-800 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                maxLength={60}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value.slice(0, 60) })}
                placeholder="e.g. Rajesh Kumar"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500 ${
                  errors.name ? 'border-red-500 bg-red-50/50' : 'border-clay-300 bg-clay-50/50'
                }`}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
            </div>

            {/* Business Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-clay-800 mb-1">
                Business / Restaurant / Store Name *
              </label>
              <input
                type="text"
                maxLength={80}
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value.slice(0, 80) })}
                placeholder="e.g. Royal Dhaba & Cafe"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500 ${
                  errors.businessName ? 'border-red-500 bg-red-50/50' : 'border-clay-300 bg-clay-50/50'
                }`}
              />
              {errors.businessName && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.businessName}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-clay-800 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                maxLength={20}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value.slice(0, 20), whatsapp: e.target.value.slice(0, 20) })}
                placeholder="e.g. 9876543210"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500 ${
                  errors.phone ? 'border-red-500 bg-red-50/50' : 'border-clay-300 bg-clay-50/50'
                }`}
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
            </div>

            {/* Delivery Location */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-clay-800 mb-1">
                City / Delivery Location *
              </label>
              <input
                type="text"
                maxLength={60}
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value.slice(0, 60) })}
                placeholder="e.g. Mumbai, Pune, Delhi"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500 ${
                  errors.location ? 'border-red-500 bg-red-50/50' : 'border-clay-300 bg-clay-50/50'
                }`}
              />
              {errors.location && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.location}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Target Product */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-clay-800 mb-1">
                Product Category / Item
              </label>
              <select
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-clay-300 bg-clay-50/50 text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500"
              >
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name} ({p.category.toUpperCase()})
                  </option>
                ))}
                <option value="Custom Pottery Order">Custom Special Order</option>
              </select>
            </div>

            {/* Estimated Quantity */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-clay-800 mb-1">
                Estimated Quantity Required
              </label>
              <input
                type="text"
                maxLength={50}
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value.slice(0, 50) })}
                placeholder="e.g. 100 Kulhads, 20 Handis"
                className="w-full px-4 py-3 rounded-xl border border-clay-300 bg-clay-50/50 text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500"
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-clay-800 mb-1">
              Custom Requirements / Logo Embossing / Timeline Notes
            </label>
            <textarea
              rows={3}
              maxLength={300}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value.slice(0, 300) })}
              placeholder="Tell us about your target date, custom branding requirements, or packaging needs... (max 300 chars)"
              className="w-full px-4 py-3 rounded-xl border border-clay-300 bg-clay-50/50 text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500 resize-none"
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-clay-500 hover:bg-clay-600 text-white font-bold rounded-2xl shadow-earth transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01]"
          >
            {isSubmitting ? (
              <span>Preparing Quote...</span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Request Bulk Quote & Open WhatsApp</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
