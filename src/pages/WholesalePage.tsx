import React, { useEffect } from 'react';
import { WholesaleForm } from '../components/forms/WholesaleForm';
import { ShieldCheck, Truck, Award, MessageCircle, Building2, Utensils, Hotel, Sparkles } from 'lucide-react';
import { updateSeoMetaData } from '../utils/seo';
import { getWholesaleWhatsAppLink } from '../utils/whatsapp';

export const WholesalePage: React.FC = () => {
  useEffect(() => {
    updateSeoMetaData({
      title: "Wholesale & Bulk Pottery Supplies | Mitti Craft",
      description: "Direct factory pricing for B2B bulk pottery orders. Supplying cafes, restaurants, hotels, and resellers with chai kulhads, biryani handis, and clay tandoors.",
      canonicalPath: "/wholesale",
    });
  }, []);

  const b2bClients = [
    {
      title: "Cafes & Tea Stalls",
      desc: "Chai Kulhads (100ml - 200ml) supplied in bulk crates with custom logo stamping.",
      icon: Utensils,
    },
    {
      title: "Restaurants & Dhabas",
      desc: "Dum Biryani Handis, Curd Pots, and heavy-duty Clay Tandoors for commercial kitchens.",
      icon: Building2,
    },
    {
      title: "Hotels & Resorts",
      desc: "Aesthetic terracotta water surahis, decorative vases, and guest greeting pottery.",
      icon: Hotel,
    },
    {
      title: "Event & Wedding Planners",
      desc: "Bulk traditional diyas, decorative pots, and personalized wedding return gift crafts.",
      icon: Sparkles,
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-20 pb-24 sm:pb-20">
      
      {/* Hero Banner */}
      <section className="bg-clay-900 text-white rounded-b-3xl sm:rounded-b-[2.5rem] py-12 sm:py-20 shadow-earth-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4 max-w-3xl text-center">
          <span className="bg-sage-600 text-white text-[10px] sm:text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider inline-block">
            Direct B2B Factory Supply
          </span>
          <h1 className="font-serif text-fluid-h1 font-bold tracking-tight">
            Bulk Pottery Orders <span className="text-clay-300 italic">Made Simple.</span>
          </h1>
          <p className="text-clay-200 text-fluid-body leading-relaxed">
            Eliminate middleman margins. Sourced directly from our traditional pottery kilns with breakage-guaranteed straw packing and custom branding options.
          </p>
        </div>
      </section>

      {/* Target Buyer Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-[11px] sm:text-xs font-bold text-clay-500 uppercase tracking-widest block">B2B Solutions</span>
          <h2 className="font-serif text-fluid-h2 font-bold text-clay-900">Who We Supply</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {b2bClients.map((client, idx) => {
            const IconComp = client.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 border border-clay-200 shadow-earth space-y-2.5 sm:space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-clay-100 text-clay-700 flex items-center justify-center">
                  <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-clay-900">{client.title}</h3>
                <p className="text-xs text-clay-600 leading-relaxed">{client.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <WholesaleForm />
      </section>

      {/* Direct WhatsApp Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-earth-lg text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-xl sm:text-2xl">Need Urgent Bulk Dispatch?</h3>
            <p className="text-emerald-200 text-xs">Chat directly with our wholesale operations manager on WhatsApp.</p>
          </div>
          <a
            href={getWholesaleWhatsAppLink({
              name: 'Wholesale Buyer',
              businessName: 'Business',
              product: 'Urgent Bulk Order',
              quantity: '500+ units',
              location: 'India',
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-clay-950 font-extrabold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto min-h-[44px]"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>Instant Wholesale WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
};
