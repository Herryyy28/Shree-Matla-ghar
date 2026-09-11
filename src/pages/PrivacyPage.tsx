import React, { useEffect } from 'react';
import { updateSeoMetaData } from '../utils/seo';
import { BUSINESS_CONFIG } from '../config/business';

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    updateSeoMetaData({
      title: `Privacy Policy | ${BUSINESS_CONFIG.brandName}`,
      description: `Privacy policy for ${BUSINESS_CONFIG.brandName} digital showroom and customer enquiry platform.`,
      canonicalPath: "/privacy",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-clay-800">
      <h1 className="font-serif font-bold text-3xl sm:text-4xl text-clay-900">Privacy Policy</h1>
      <p className="text-xs text-clay-500">Last updated: September 2026</p>

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-clay-200 shadow-earth space-y-6 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-clay-900">1. Information We Collect</h2>
          <p>
            When you use our digital showroom or submit a WhatsApp / Wholesale enquiry on <strong>{BUSINESS_CONFIG.brandName}</strong> ({BUSINESS_CONFIG.listingName}), we may collect your name, phone number, email address, business details, and delivery location to process your enquiry.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-clay-900">2. How We Use Your Information</h2>
          <p>
            Your information is used strictly to answer your pottery enquiries, calculate wholesale price quotes, schedule store pickup in Bhavnagar, and send order updates via WhatsApp or Phone.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-clay-900">3. Data Protection & Sharing</h2>
          <p>
            We do not sell, rent, or lease customer data to third parties. Information is stored securely and accessed only by authorized store staff.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-clay-900">4. Contact Us</h2>
          <p>
            For any privacy concerns or request to erase contact records, email us at <strong>{BUSINESS_CONFIG.email}</strong> or call <strong>{BUSINESS_CONFIG.phone}</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};
