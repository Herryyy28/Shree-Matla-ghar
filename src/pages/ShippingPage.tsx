import React, { useEffect } from 'react';
import { updateSeoMetaData } from '../utils/seo';
import { BUSINESS_CONFIG } from '../config/business';
import { Truck, ShieldCheck, Store, MapPin } from 'lucide-react';

export const ShippingPage: React.FC = () => {
  useEffect(() => {
    updateSeoMetaData({
      title: "Shipping & Local Pickup Information | Mitti Craft Pottery",
      description: "Information regarding local store pickup, wholesale transport, and break-safe packaging for handmade clay products.",
      canonicalPath: "/shipping",
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-clay-800">
      <h1 className="font-serif font-bold text-3xl sm:text-4xl text-clay-900">Shipping, Pickup & Breakage Policy</h1>
      <p className="text-xs text-clay-500">Last updated: September 2026</p>

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-clay-200 shadow-earth space-y-8 text-sm leading-relaxed">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-clay-50 rounded-2xl p-5 border border-clay-200 space-y-2">
            <Store className="w-6 h-6 text-clay-500" />
            <h3 className="font-serif font-bold text-lg text-clay-900">1. Direct Store Pickup</h3>
            <p className="text-xs text-clay-600">
              Customers in Pune and surrounding regions can visit our store to inspect and pick up orders directly. Free packing assistance provided.
            </p>
          </div>

          <div className="bg-clay-50 rounded-2xl p-5 border border-clay-200 space-y-2">
            <Truck className="w-6 h-6 text-clay-500" />
            <h3 className="font-serif font-bold text-lg text-clay-900">2. Wholesale Freight Dispatch</h3>
            <p className="text-xs text-clay-600">
              For B2B orders (restaurants, hotels, cafes), we arrange dedicated transport or wooden-crate logistics across India.
            </p>
          </div>
        </div>

        <section className="space-y-3 border-t border-clay-100 pt-6">
          <h2 className="font-serif font-bold text-xl text-clay-900">Breakage-Safe Packaging Guarantee</h2>
          <p>
            Terracotta pottery requires specialized protective packing. All wholesale consignments are cushioned with eco-friendly wheat straw, honeycomb paper wraps, and reinforced double-wall corrugated boxes or wooden crates.
          </p>
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900">
            <strong>Transit Breakage Replacement:</strong> If any item arrives damaged in transit during transport, notify us on WhatsApp with unboxing photos within 24 hours for immediate credit or replacement.
          </div>
        </section>

      </div>
    </div>
  );
};
