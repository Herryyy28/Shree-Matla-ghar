import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, Heart, Navigation } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { getGeneralWhatsAppLink } from '../../utils/whatsapp';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-clay-900 text-clay-100 pt-16 pb-24 md:pb-12 border-t border-clay-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-clay-800">
          
          {/* Brand & Listing Details */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏺</span>
              <div>
                <h3 className="font-serif font-bold text-2xl text-white tracking-tight">{BUSINESS_CONFIG.brandName}</h3>
                <p className="text-xs text-clay-400 font-medium tracking-wide uppercase">{BUSINESS_CONFIG.listingName}</p>
              </div>
            </div>
            
            <p className="text-clay-300 text-sm leading-relaxed max-w-md">
              Specialist in Drum Tandoor, Trolly Tandoor, SS Tandoor, Matka, Kulhads, and authentic traditional Indian mitti pottery products. Serving homes, dhabas, cafes, and catering businesses across Bhavnagar, Gujarat.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-clay-800 hover:bg-clay-700 text-amber-400 text-xs font-bold transition-colors border border-clay-700"
              >
                <Navigation className="w-4 h-4" />
                <span>{t.cta.storeLocation}</span>
              </a>
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Core Categories */}
          <div>
            <h4 className="font-serif font-bold text-lg text-white mb-4">{t.nav.pottery}</h4>
            <ul className="space-y-2 text-sm text-clay-300">
              <li><Link to="/tandoor" className="hover:text-white font-bold text-amber-400 transition-colors">Tandoor Collection</Link></li>
              <li><Link to="/pottery?category=matka" className="hover:text-white transition-colors">{t.nav.categoryList?.matka || 'Matka & Surahi'}</Link></li>
              <li><Link to="/pottery?category=kulhad" className="hover:text-white transition-colors">{t.nav.categoryList?.kulhad || 'Chai Kulhad'}</Link></li>
              <li><Link to="/pottery?category=handi" className="hover:text-white transition-colors">{t.nav.categoryList?.handi || 'Cooking Handi'}</Link></li>
              <li><Link to="/pottery?category=planters" className="hover:text-white transition-colors">{t.nav.categoryList?.planters || 'Terracotta Planters'}</Link></li>
              <li><Link to="/ganpati" className="hover:text-white text-amber-300 font-semibold transition-colors">{t.nav.ecoGanpati}</Link></li>
            </ul>
          </div>

          {/* Business & Social */}
          <div>
            <h4 className="font-serif font-bold text-lg text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-clay-300">
              <li><Link to="/our-story" className="hover:text-white transition-colors">{t.nav.craftStory}</Link></li>
              <li><Link to="/wholesale" className="hover:text-white transition-colors">{t.nav.bulkWholesale}</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">{t.nav.gallery}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t.nav.contactStore}</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Verified Google Maps Store Address */}
          <div>
            <h4 className="font-serif font-bold text-lg text-white mb-4">Bhavnagar Store</h4>
            <ul className="space-y-3 text-sm text-clay-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-clay-400 shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">
                  {BUSINESS_CONFIG.address}, {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state} - {BUSINESS_CONFIG.pincode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-clay-400 shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-white transition-colors font-bold text-white">
                  {BUSINESS_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-clay-400 shrink-0 mt-1" />
                <span className="text-xs">{BUSINESS_CONFIG.openingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-clay-400 gap-4">
          <p>© {new Date().getFullYear()} {BUSINESS_CONFIG.brandName} ({BUSINESS_CONFIG.listingName}). All rights reserved.</p>
          <p className="flex items-center gap-1">
            Handcrafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> in Bhavnagar, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
};
