import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { getGeneralWhatsAppLink } from '../../utils/whatsapp';
import { useToast } from '../common/Toast';

export const ContactForm: React.FC = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Product Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid phone number is required';
    if (!formData.message.trim()) errs.message = 'Message content is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please complete all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Message sent! Opening WhatsApp enquiry.', 'success');

      const waUrl = getGeneralWhatsAppLink(`Enquiry from ${formData.name}: ${formData.subject} - ${formData.message}`);
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-clay-200 shadow-earth">
      <h3 className="font-serif font-bold text-2xl text-clay-900 mb-1">Send Us a Direct Message</h3>
      <p className="text-xs text-clay-600 mb-6">Have questions about pot sizes, store timings, or custom designs?</p>

      {isSubmitted ? (
        <div className="bg-clay-50 rounded-2xl p-6 text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
          <h4 className="font-serif font-bold text-lg text-clay-900">Thank You!</h4>
          <p className="text-xs text-clay-600">Your enquiry has been prepared. You can also chat directly with us on WhatsApp.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-xs font-bold text-clay-600 underline hover:text-clay-900 mt-2"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-clay-800 mb-1">Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
              className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500 min-h-[44px] ${
                errors.name ? 'border-red-500 bg-red-50/50' : 'border-clay-300 bg-clay-50/50'
              }`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-clay-800 mb-1">Phone Number *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="10-digit mobile number"
                className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500 min-h-[44px] ${
                  errors.phone ? 'border-red-500 bg-red-50/50' : 'border-clay-300 bg-clay-50/50'
                }`}
              />
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-clay-800 mb-1">Enquiry Subject</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-clay-300 bg-clay-50/50 text-xs sm:text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500 min-h-[44px]"
              >
                <option value="Product Enquiry">Product Details & Sizes</option>
                <option value="Store Visit">Store Visit & Directions</option>
                <option value="Ganpati Booking">Eco Ganpati Idol Booking</option>
                <option value="Custom Pottery">Custom Pottery Request</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-clay-800 mb-1">Your Message *</label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="How can we help you?"
              className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-clay-900 focus:outline-none focus:ring-2 focus:ring-clay-500 ${
                errors.message ? 'border-red-500 bg-red-50/50' : 'border-clay-300 bg-clay-50/50'
              }`}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-clay-500 hover:bg-clay-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-earth transition-all flex items-center justify-center gap-2 min-h-[44px]"
          >
            <Send className="w-4 h-4 shrink-0" />
            <span>Send Enquiry Message</span>
          </button>
        </form>
      )}
    </div>
  );
};
