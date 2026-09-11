import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Heart, Droplets, CheckCircle2, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { GALLERY_ITEMS } from '../data/gallery';
import { getGanpatiWhatsAppLink, getGeneralWhatsAppLink } from '../utils/whatsapp';
import { updateSeoMetaData } from '../utils/seo';
import { ProductCard } from '../components/product/ProductCard';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const GanpatiPage: React.FC = () => {
  const [selectedSizeFilter, setSelectedSizeFilter] = useState('all');

  useEffect(() => {
    updateSeoMetaData({
      title: "Eco-Friendly Shadu Mati Ganpati Idols | Shree Matla Ghar Bhavnagar",
      description: "100% Eco-friendly Shadu Mati Ganesha idols hand-carved with natural clay and organic watercolors at Shree Matla Ghar, Subhashnagar, Bhavnagar.",
      canonicalPath: "/ganpati",
    });
  }, []);

  const ganpatiProducts = PRODUCTS.filter((p) => p.category === 'ganpati' || p.seasonal);
  const ganpatiGallery = GALLERY_ITEMS.filter((i) => i.category === 'ganpati');

  const idolVariants = [
    {
      size: "Small (1 Foot / 12 Inch)",
      height: "12 Inches",
      weight: "3 - 4 kg",
      dissolveTime: "30 Minutes in bucket",
      description: "Ideal for cozy apartment Mandirs and desk Sthapana.",
      price: "₹1,250",
      image: "/assets/shree-matla-ghar/ganpati/shadu-ganpati-main.jpg",
    },
    {
      size: "Medium (1.5 Feet / 18 Inch)",
      height: "18 Inches",
      weight: "7 - 8 kg",
      dissolveTime: "45 Minutes in garden tub",
      description: "Popular traditional family idol with intricate ornaments.",
      price: "₹2,450",
      image: "/assets/shree-matla-ghar/ganpati/shadu-ganpati-main.jpg",
    },
    {
      size: "Large (2 Feet / 24 Inch)",
      height: "24 Inches",
      weight: "14 - 16 kg",
      dissolveTime: "60 Minutes",
      description: "Grand idol for housing societies and spacious homes.",
      price: "₹4,800",
      image: "/assets/shree-matla-ghar/ganpati/shadu-ganpati-main.jpg",
    },
    {
      size: "Designer Custom (3 Feet+)",
      height: "36+ Inches",
      weight: "Custom",
      dissolveTime: "90 Minutes",
      description: "Specialized traditional postures (Lalbaugcha Raja style, Dagdusheth style).",
      price: "Quote on Request",
      image: "/assets/shree-matla-ghar/ganpati/shadu-ganpati-main.jpg",
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-20 pb-24 sm:pb-20">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-clay-900 via-clay-950 to-clay-900 text-white rounded-b-3xl sm:rounded-b-[2.5rem] py-12 sm:py-20 shadow-earth-lg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider max-w-full">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">100% Eco-Friendly Shadu Mati</span>
            </span>
            <h1 className="font-serif text-fluid-h1 font-bold tracking-tight">
              Devotion Meets <span className="text-amber-400 italic">Nature Preservation.</span>
            </h1>
            <p className="text-clay-200 text-fluid-body leading-relaxed max-w-2xl">
              Welcome Lord Ganesha into your home with 100% natural clay idols. Crafted with pure riverbed Shadu Mati and painted with natural water colors. Zero Plaster of Paris (PoP). Zero water pollution.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={getGanpatiWhatsAppLink({
                  idolName: "Eco Shadu Mati Ganpati Idol",
                  size: "Medium (1.5 Feet)",
                  deliveryOrPickup: "Home Delivery / Store Pickup",
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-clay-950 font-extrabold text-xs sm:text-sm rounded-2xl shadow-earth transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Book Ganpati Idol on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-2xl bg-clay-800 aspect-[4/3]">
              <ImageWithFallback
                src="/assets/shree-matla-ghar/ganpati/shadu-ganpati-main.jpg"
                alt="Shadu Mati Ganpati Idol"
                categoryLabel="Ganpati"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Eco Shadu Mati Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] sm:text-xs font-bold text-clay-500 uppercase tracking-widest block">Green Celebration</span>
          <h2 className="font-serif text-fluid-h2 font-bold text-clay-900">Why Choose Our Shadu Mati Idols?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-clay-200 shadow-earth space-y-2.5 sm:space-y-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center">
              <Droplets className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-clay-900">Easy Home Bucket Visarjan</h3>
            <p className="text-xs text-clay-600 leading-relaxed">
              Dissolves in a bucket of water within 45 minutes right in your balcony or garden. Use the sacred clay soil to nourish home potted plants!
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-clay-200 shadow-earth space-y-2.5 sm:space-y-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-clay-900">0% Chemical Watercolors</h3>
            <p className="text-xs text-clay-600 leading-relaxed">
              Decorated strictly with non-toxic herbal, turmeric, and organic water pigments safe for children and aquatic ecosystems.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-clay-200 shadow-earth space-y-2.5 sm:space-y-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-clay-100 text-clay-700 rounded-2xl flex items-center justify-center">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-clay-900">Artisan Sculpted Devotion</h3>
            <p className="text-xs text-clay-600 leading-relaxed">
              Every idol expression is carved by hand by heritage sculptors who have practiced clay idol making for generations.
            </p>
          </div>
        </div>
      </section>

      {/* Available Idol Sizes & Booking Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-[11px] sm:text-xs font-bold text-clay-500 uppercase tracking-widest block">Available Idol Models</span>
            <h2 className="font-serif text-fluid-h2 font-bold text-clay-900 mt-0.5">Ganpati Idol Size Variants</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {idolVariants.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-clay-200 shadow-earth hover:shadow-earth-lg transition-all flex flex-col justify-between overflow-hidden p-4 sm:p-5 space-y-3 sm:space-y-4"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-clay-100">
                <ImageWithFallback src={item.image} alt={item.size} categoryLabel="Ganpati" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <span className="bg-clay-100 text-clay-800 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase inline-block">
                  {item.height} Height
                </span>
                <h3 className="font-serif font-bold text-base sm:text-lg text-clay-900">{item.size}</h3>
                <p className="text-xs text-clay-600 line-clamp-2">{item.description}</p>
                <div className="text-xs text-clay-500 space-y-0.5 pt-1 border-t border-clay-100">
                  <p>• Weight: <strong>{item.weight}</strong></p>
                  <p>• Visarjan: <strong>{item.dissolveTime}</strong></p>
                </div>
              </div>
              <div className="pt-2 border-t border-clay-100 flex items-center justify-between">
                <span className="font-serif font-bold text-sm sm:text-base text-clay-900">{item.price}</span>
                <a
                  href={getGanpatiWhatsAppLink({
                    idolName: `Shadu Mati Ganpati (${item.size})`,
                    size: item.height,
                    deliveryOrPickup: "Store Pickup / Delivery",
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center gap-1 shadow-sm min-h-[38px]"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Book</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="font-serif text-fluid-h2 font-bold text-clay-900">All Shadu Mati Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ganpatiProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Real Media Gallery */}
      {ganpatiGallery.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 pt-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] sm:text-xs font-bold text-clay-500 uppercase tracking-widest block">Authentic Gallery</span>
            <h2 className="font-serif text-fluid-h2 font-bold text-clay-900">Ganpati Crafting & Details</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {ganpatiGallery.map((item) => (
              <div key={item.id} className="rounded-2xl overflow-hidden shadow-earth border border-clay-200 aspect-[4/3] bg-clay-100">
                <ImageWithFallback src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
