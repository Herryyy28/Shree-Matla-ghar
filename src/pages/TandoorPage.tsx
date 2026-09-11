import React, { useEffect } from 'react';
import { Flame, MessageCircle, ShieldCheck, Truck, Sparkles, Building2, Utensils, CheckCircle2, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { getTandoorWhatsAppLink, getGeneralWhatsAppLink } from '../utils/whatsapp';
import { updateSeoMetaData } from '../utils/seo';
import { BUSINESS_CONFIG } from '../config/business';
import { Link } from 'react-router-dom';

export const TandoorPage: React.FC = () => {
  useEffect(() => {
    updateSeoMetaData({
      title: "Drum Tandoor, Trolly Tandoor & SS Tandoor Specialist | Shree Matla Ghar Bhavnagar",
      description: "Shree Matla Ghar (Shree Matla Ghar & Tandoor) in Bhavnagar, Gujarat is a specialist in Drum Tandoor, Trolly Tandoor, SS Stainless Steel Tandoors for commercial kitchens and catering.",
      canonicalPath: "/tandoor",
    });
  }, []);

  const tandoorProducts = PRODUCTS.filter((p) => p.category === 'tandoor');

  const tandoorHighlights = [
    {
      title: "Drum Tandoor",
      badge: "Google Listing Highlight",
      desc: "Heavy-duty steel drum body with thick refractory clay pot lining for high-heat continuous naan and tikka baking in dhabas & restaurants.",
      type: "Drum Tandoor",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Trolly Tandoor",
      badge: "Google Listing Highlight",
      desc: "Mobile tandoor pot mounted on a heavy-duty trolley frame with locking castor wheels. Built for wedding caterers and pop-up food stalls.",
      type: "Trolly Tandoor",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "SS Stainless Steel Tandoor",
      badge: "Google Listing Highlight",
      desc: "Hygiene-first stainless steel outer casing enclosing an earthen clay tandoor pot. Ideal for hotels, cafes, and fine dining kitchens.",
      type: "SS Tandoor",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    },
  ];


  return (
    <div className="space-y-12 sm:space-y-20 pb-24 sm:pb-20">

      {/* Hero Banner */}
      <section className="bg-clay-900 text-white rounded-b-3xl sm:rounded-b-[2.5rem] py-12 sm:py-20 shadow-earth-lg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider max-w-full">
              <Flame className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Specialist Store in Bhavnagar</span>
            </div>
            <h1 className="font-serif text-fluid-h1 font-bold tracking-tight">
              Drum Tandoor, Trolly Tandoor & <span className="text-amber-400 italic">SS Tandoor Specialist.</span>
            </h1>
            <p className="text-clay-200 text-fluid-body leading-relaxed max-w-2xl">
              Welcome to <strong>{BUSINESS_CONFIG.listingName}</strong> ({BUSINESS_CONFIG.brandName}). We specialize in supplying commercial-grade Drum Tandoors, mobile Trolley Tandoors, and Stainless Steel Tandoors for restaurants, dhabas, caterers, and home barbecues across Bhavnagar and Gujarat.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={getTandoorWhatsAppLink({
                  tandoorType: "Commercial Tandoor (Drum / Trolly / SS)",
                  usageType: "Restaurant / Catering",
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-clay-950 font-extrabold text-xs sm:text-sm rounded-2xl shadow-earth transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Enquire Quote on WhatsApp</span>
              </a>
              <Link
                to="/wholesale"
                className="px-6 py-3.5 bg-clay-800 hover:bg-clay-700 text-white font-semibold text-xs sm:text-sm rounded-2xl border border-clay-700 transition-colors text-center min-h-[44px] flex items-center justify-center"
              >
                Bulk Catering Orders →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-2xl bg-clay-800">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                alt="Commercial Tandoor Specialist"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tandoor Specialist Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] sm:text-xs font-bold text-clay-500 uppercase tracking-widest block">Verified Store Specialty</span>
          <h2 className="font-serif text-fluid-h2 font-bold text-clay-900">Our Core Tandoor Offerings</h2>
          <p className="text-clay-600 text-xs sm:text-sm">
            Hand-built refractory clay lining combined with sturdy metal casings for maximum heat retention and authentic smoky taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {tandoorHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-clay-200 shadow-earth hover:shadow-earth-lg transition-all flex flex-col justify-between overflow-hidden p-5 sm:p-6 space-y-4"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-clay-100">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2">
                <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase inline-block">
                  {item.badge}
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-clay-900">{item.title}</h3>
                <p className="text-xs text-clay-600 leading-relaxed">{item.desc}</p>
              </div>
              <div className="pt-3 border-t border-clay-100">
                <a
                  href={getTandoorWhatsAppLink({
                    tandoorType: item.type,
                    usageType: "Commercial / Catering",
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Enquire Price for {item.title}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tandoor Products Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="font-serif text-fluid-h2 font-bold text-clay-900">All Tandoor Products</h2>
          <span className="text-xs text-clay-500">Available at Subhashnagar Showroom</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {tandoorProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

    </div>
  );
};
