import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Store } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { getContactPageWhatsAppLink } from '../utils/whatsapp';
import { ContactForm } from '../components/forms/ContactForm';
import { updateSeoMetaData } from '../utils/seo';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    updateSeoMetaData({
      title: `Contact Us & Google Maps Location | ${BUSINESS_CONFIG.brandName} Bhavnagar`,
      description: `Visit ${BUSINESS_CONFIG.brandName} (${BUSINESS_CONFIG.listingName}) at Subhashnagar, Bhavnagar, Gujarat or contact via Phone (+91 79844 58082) & WhatsApp.`,
      canonicalPath: "/contact",
    });
  }, []);


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-12 pb-24 sm:pb-20">

      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-[11px] sm:text-xs font-bold text-clay-500 uppercase tracking-widest block">Local Store Location</span>
        <h1 className="font-serif text-fluid-h1 font-bold text-clay-900">Visit {BUSINESS_CONFIG.brandName}</h1>
        <p className="text-clay-600 text-xs sm:text-sm">
          Visit our showroom in Bhavnagar, Gujarat or connect with us instantly for price quotes on Drum Tandoors, Matkas, and pottery items.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

        {/* Left Column — Verified Google Maps Details */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-3xl p-5 sm:p-8 border border-clay-200 shadow-earth space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-clay-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-clay-500 text-white flex items-center justify-center text-lg sm:text-xl font-serif shrink-0">
                🏺
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-clay-900">{BUSINESS_CONFIG.brandName}</h3>
                <p className="text-xs font-semibold text-clay-600">{BUSINESS_CONFIG.listingName}</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-clay-800">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-clay-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-clay-900">Physical Address</strong>
                  <p className="text-xs text-clay-700 leading-relaxed">{BUSINESS_CONFIG.address}</p>
                  <p className="text-xs text-clay-700">{BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state} - {BUSINESS_CONFIG.pincode}, {BUSINESS_CONFIG.country}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-clay-500 shrink-0" />
                <div>
                  <strong className="block text-clay-900">Phone & WhatsApp</strong>
                  <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-clay-500 font-bold text-clay-900">
                    {BUSINESS_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-clay-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-clay-900">Store Timings</strong>
                  <p className="text-xs font-medium text-clay-700">{BUSINESS_CONFIG.openingHours}</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-clay-900 hover:bg-clay-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors min-h-[44px]"
              >
                <Navigation className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Open in Google Maps</span>
              </a>
              <a
                href={getContactPageWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map centered at coordinates 21.7583362, 72.1628413 */}
          <div className="rounded-3xl overflow-hidden border border-clay-300 shadow-earth min-h-[250px] sm:min-h-[300px] bg-clay-200">
            <iframe
              title="Shree Matla Ghar & Tandoor Location Map"
              src={`https://maps.google.com/maps?q=${BUSINESS_CONFIG.latitude},${BUSINESS_CONFIG.longitude}&z=16&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '250px' }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Column — Direct Contact Form */}
        <div className="lg:col-span-6">
          <ContactForm />
        </div>

      </div>

    </div>
  );
};
