import React, { useEffect } from 'react';
import { updateSeoMetaData } from '../utils/seo';
import { BUSINESS_CONFIG } from '../config/business';

export const TermsPage: React.FC = () => {
  useEffect(() => {
    updateSeoMetaData({
      title: "Terms & Conditions | Mitti Craft Pottery",
      description: "Terms and conditions of business for Mitti Craft Pottery showroom and wholesale orders.",
      canonicalPath: "/terms",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-clay-800">
      <h1 className="font-serif font-bold text-3xl sm:text-4xl text-clay-900">Terms of Service</h1>
      <p className="text-xs text-clay-500">Last updated: September 2026</p>

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-clay-200 shadow-earth space-y-6 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-clay-900">1. Artisan Handcrafted Nature</h2>
          <p>
            All products are 100% handmade from natural mitti. Minor variations in color shade, texture, wall thickness, or natural firing marks are inherent signatures of genuine handmade pottery and not defects.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-clay-900">2. Pricing & Quotes</h2>
          <p>
            Prices displayed on the digital showroom are indicative. Final pricing for bulk wholesale orders, custom logo embossing, or distant transit packing will be finalized in your written WhatsApp quotation.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-clay-900">3. Eco Ganpati Booking</h2>
          <p>
            Seasonal Shadu Mati Ganpati idol bookings are subject to advance confirmation. Due to limited hand-sculpted quantities, pre-orders are confirmed upon receipt of advance booking deposit.
          </p>
        </section>
      </div>
    </div>
  );
};
