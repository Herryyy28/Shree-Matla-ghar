import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, Flame, MapPin, Sparkles, Phone, Navigation, Camera } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { GALLERY_ITEMS } from '../data/gallery';
import { ProductCard } from '../components/product/ProductCard';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';
import { BUSINESS_CONFIG } from '../config/business';
import { updateSeoMetaData } from '../utils/seo';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

import { VerifiedBusinessReach } from '../components/home/VerifiedBusinessReach';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    updateSeoMetaData({
      title: `${BUSINESS_CONFIG.brandName} | ${BUSINESS_CONFIG.listingName} - Bhavnagar`,
      description: `Authentic traditional clay products, matkas, kulhads, biryani handis, and specialist Drum Tandoor, Trolly Tandoor, SS Tandoors at Shree Matla Ghar, Subhashnagar, Bhavnagar, Gujarat.`,
      canonicalPath: "/",
    });
  }, []);

  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 6);
  const newProducts = PRODUCTS.filter((p) => p.isNew).slice(0, 3);
  const ganpatiProduct = PRODUCTS.find((p) => p.category === 'ganpati');
  const tandoorProduct = PRODUCTS.find((p) => p.id === 'tandoor-drum-01');
  const showcaseGallery = GALLERY_ITEMS.slice(0, 6);

  const storySteps = [
    {
      num: "01",
      title: "Raw Riverbed Mitti",
      desc: "Selecting mineral-rich natural soil sourced from traditional riverbanks, free of synthetic chemical additives.",
    },
    {
      num: "02",
      title: "Hand Kneading & Sifting",
      desc: "Purifying clay with clean water, removing gravel, and aging soil for optimum elasticity.",
    },
    {
      num: "03",
      title: "Wheel & Mold Shaping",
      desc: "Artisans shape matkas and build high-heat refractory tandoor pots with precision hands.",
    },
    {
      num: "04",
      title: "Shade Air Drying",
      desc: "Slow curing under covered shade to prevent cracks before intense heat baking.",
    },
    {
      num: "05",
      title: "Organic Kiln Firing",
      desc: "Baking in traditional wood and straw fired bhattıs for structural strength.",
    },
    {
      num: "06",
      title: "Quality Finishing",
      desc: "Inspecting pot density, assembling drum/trolley steel frames, and fitting accessories.",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden bg-clay-950 text-clay-100 rounded-b-3xl sm:rounded-b-[2.5rem] shadow-earth-lg">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1920&q=80"
            alt="Shree Matla Ghar Showroom & Pottery Craft"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-clay-950 via-clay-950/95 to-clay-900/90" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Store Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-clay-800/80 border border-clay-700 text-clay-300 text-[11px] sm:text-xs font-semibold backdrop-blur-sm max-w-full">
              <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">{BUSINESS_CONFIG.brandName} • {BUSINESS_CONFIG.city}, Gujarat</span>
            </div>

            <h1 className="font-serif text-fluid-hero font-bold tracking-tight text-white leading-tight">
              From Mitti to <span className="italic font-normal text-amber-300">Memories.</span>
            </h1>

            <p className="text-clay-200 text-fluid-body max-w-2xl leading-relaxed">
              Traditional clay products crafted for homes, businesses, celebrations and everyday life. Specialist in <strong>Drum Tandoor</strong>, <strong>Trolly Tandoor</strong>, <strong>SS Tandoor</strong>, Matka, Kulhad, and Handis.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/pottery"
                className="px-6 py-3.5 sm:py-4 bg-clay-400 hover:bg-clay-500 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-earth transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 min-h-[44px]"
              >
                <span>{t.cta.exploreProducts}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 sm:py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-earth transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.cta.whatsappQuote}</span>
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="px-5 py-3.5 sm:py-4 bg-clay-800/80 hover:bg-clay-800 text-clay-200 font-semibold text-xs sm:text-sm rounded-2xl border border-clay-700 backdrop-blur-sm transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{t.cta.callStore}</span>
              </a>
            </div>

            {/* Factual Store Highlights */}
            <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-2 sm:gap-4 border-t border-clay-800 max-w-lg">
              <div>
                <span className="font-serif font-bold text-base sm:text-xl text-white block">Specialist</span>
                <span className="text-[10px] sm:text-xs text-clay-400">Drum / Trolly Tandoor</span>
              </div>
              <div>
                <span className="font-serif font-bold text-base sm:text-xl text-white block">Subhashnagar</span>
                <span className="text-[10px] sm:text-xs text-clay-400">Bhavnagar Store</span>
              </div>
              <div>
                <span className="font-serif font-bold text-base sm:text-xl text-white block">Retail & Bulk</span>
                <span className="text-[10px] sm:text-xs text-clay-400">WhatsApp Enquiry</span>
              </div>
            </div>
          </div>

          {/* Featured Specialist Tandoor Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-clay-700 bg-clay-800">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                alt="Specialist Commercial Drum Tandoor"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="p-4 sm:p-6 bg-gradient-to-t from-clay-950 via-clay-900 to-transparent space-y-2">
                <span className="bg-amber-500/20 text-amber-300 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md uppercase inline-block">
                  Verified Store Specialty
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">Drum, Trolly & SS Tandoors</h3>
                <p className="text-xs text-clay-300">Commercial & domestic clay tandoors for restaurants, caterers & dhabas.</p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="font-serif font-bold text-xs sm:text-sm text-clay-200">{t.product.priceOnRequest}</span>
                  <Link
                    to="/tandoor"
                    className="text-xs font-bold text-amber-300 underline hover:text-white"
                  >
                    View Tandoors →
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2 — BUSINESS INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-clay-200 shadow-earth text-center space-y-3 sm:space-y-4 max-w-4xl mx-auto">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-clay-500">Welcome to</span>
          <h2 className="font-serif text-fluid-h2 font-bold text-clay-900">{BUSINESS_CONFIG.brandName}</h2>
          <p className="text-clay-600 text-fluid-body leading-relaxed">
            Located in <strong>Subhashnagar, Bhavnagar</strong> (Google Maps listing: <strong>{BUSINESS_CONFIG.listingName}</strong>), we offer an authentic range of traditional clay products for everyday home living, restaurants, catering businesses, and festive celebrations.
          </p>
        </div>
      </section>

      {/* SECTION 3 — CATEGORY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-[11px] sm:text-xs font-bold text-clay-500 uppercase tracking-widest block">Showroom Catalog</span>
            <h2 className="font-serif text-fluid-h2 font-bold text-clay-900 mt-0.5">{t.nav.pottery} Categories</h2>
          </div>
          <Link
            to="/pottery"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-clay-600 hover:text-clay-900 transition-colors"
          >
            <span>{t.cta.exploreProducts}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {CATEGORIES.map((cat) => {
            const catName = (t.nav.categoryList as Record<string, string>)?.[cat.slug] || cat.name;

            return (
              <Link
                key={cat.slug}
                to={cat.slug === 'tandoor' ? '/tandoor' : `/pottery?category=${cat.slug}`}
                className="group bg-white rounded-2xl border border-clay-200 p-3.5 sm:p-4 shadow-earth hover:shadow-earth-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-clay-100 mb-2.5 sm:mb-3 relative">
                  <ImageWithFallback
                    src={cat.image}
                    alt={catName}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-sm sm:text-base shadow-sm">
                    {cat.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-clay-900 group-hover:text-clay-500 transition-colors">
                    {catName}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-clay-500 line-clamp-1 mt-0.5">{cat.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SECTION 4 — FEATURED PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="bg-clay-200 text-clay-800 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            {t.badge.popular}
          </span>
          <h2 className="font-serif text-fluid-h2 font-bold text-clay-900">Featured Clay Products</h2>
          <p className="text-clay-600 text-xs sm:text-sm">
            Handcrafted earthenware for kitchen cooking, natural water cooling, tandoor roasting, and festive rituals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center pt-2 sm:pt-4">
          <Link
            to="/pottery"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-clay-900 hover:bg-clay-800 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-earth transition-all w-full sm:w-auto min-h-[44px]"
          >
            <span>{t.cta.exploreProducts} ({PRODUCTS.length}+ Items)</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </section>

      {/* NEW ARRIVALS SECTION */}
      {newProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="bg-emerald-100 text-emerald-800 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              {t.badge.new}
            </span>
            <h2 className="font-serif text-fluid-h2 font-bold text-clay-900">New Arrivals</h2>
            <p className="text-clay-600 text-xs sm:text-sm">
              Discover the latest additions to our authentic pottery collection.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* OUR WORK (REAL MEDIA GALLERY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 pt-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-200">
              <Camera className="w-3.5 h-3.5" /> Authentic Media
            </span>
            <h2 className="font-serif text-fluid-h2 font-bold text-clay-900">Our Work & Showroom</h2>
            <p className="text-clay-600 text-xs sm:text-sm max-w-lg">
              Take a visual tour of our genuine craft, completed tandoors, and real products at our Bhavnagar store.
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-clay-700 hover:text-clay-900 transition-colors bg-white border border-clay-200 px-4 py-2.5 rounded-xl min-h-[44px]"
          >
            <span>{t.nav.gallery}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {showcaseGallery.map((item) => (
            <Link key={item.id} to="/gallery" className="group rounded-2xl overflow-hidden shadow-earth border border-clay-200 relative aspect-square">
              <ImageWithFallback 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-clay-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-bold text-xs sm:text-sm truncate">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 5 — SEASONAL GANPATI HIGHLIGHT */}
      {ganpatiProduct && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-clay-900 via-clay-800 to-clay-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-clay-700 shadow-earth-lg grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative overflow-hidden">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 relative z-10">
              <span className="bg-amber-500 text-clay-950 text-[10px] sm:text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Seasonal Eco Collection
              </span>
              <h2 className="font-serif text-fluid-h2 font-bold text-white">
                100% Eco-Friendly Shadu Mati Ganpati Idols
              </h2>
              <p className="text-clay-200 text-xs sm:text-sm leading-relaxed max-w-xl">
                Celebrate Ganesh Chaturthi with pure devotion and green Visarjan in Bhavnagar. Crafted from natural riverbed Shadu Mati clay that dissolves completely in water without harming marine life.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  to="/ganpati"
                  className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-clay-950 font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md text-center min-h-[44px] flex items-center justify-center"
                >
                  Book / Explore Ganpati Idols →
                </Link>
                <a
                  href={getGeneralWhatsAppLink('Ganpati booking catalog')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Catalog</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative z-10">
              <div className="rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl aspect-[4/3] sm:aspect-auto">
                <ImageWithFallback
                  src={ganpatiProduct.images[0]}
                  alt="Eco-Friendly Ganpati Idol"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 6 — FROM MITTI TO PRODUCT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] sm:text-xs font-bold text-clay-500 uppercase tracking-widest block">Artisan Craftsmanship</span>
          <h2 className="font-serif text-fluid-h2 font-bold text-clay-900">From Mitti to Finished Product</h2>
          <p className="text-clay-600 text-xs sm:text-sm">
            Communicating traditional Indian pottery wisdom, prepared by hand with natural soil.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {storySteps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-2xl border border-clay-200/80 p-5 sm:p-6 shadow-earth hover:shadow-earth-lg transition-all space-y-2 sm:space-y-3 relative"
            >
              <span className="font-serif font-bold text-3xl sm:text-4xl text-clay-200 block">{step.num}</span>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-clay-900">{step.title}</h3>
              <p className="text-xs text-clay-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VERIFIED BUSINESS REACH COUNTERS */}
      <VerifiedBusinessReach />

      {/* SECTION 7 — GOOGLE MAPS STORE LOCATION & TRUST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-clay-100 rounded-3xl border border-clay-300 p-6 sm:p-10 lg:p-12 shadow-earth grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] sm:text-xs font-bold text-clay-600 uppercase tracking-widest">Visit Our Showroom</span>
            <h2 className="font-serif text-fluid-h2 font-bold text-clay-900">Visit {BUSINESS_CONFIG.brandName}</h2>
            <p className="text-clay-700 text-xs sm:text-sm leading-relaxed">
              We welcome local customers, restaurant managers, caterers, and pottery lovers to visit our store in Subhashnagar, Bhavnagar.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-clay-800">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-clay-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-clay-900">{BUSINESS_CONFIG.listingName}</strong>
                  <span className="text-xs text-clay-600">{BUSINESS_CONFIG.address}, {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state} - {BUSINESS_CONFIG.pincode}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-clay-500 shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="font-bold text-clay-900 hover:underline">
                  {BUSINESS_CONFIG.phone}
                </a>
              </div>
            </div>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-clay-900 hover:bg-clay-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Navigation className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.cta.storeLocation}</span>
              </a>
              <Link
                to="/contact"
                className="px-5 py-3 bg-white hover:bg-clay-50 text-clay-900 font-bold text-xs sm:text-sm rounded-xl border border-clay-300 transition-colors text-center min-h-[44px] flex items-center justify-center"
              >
                {t.nav.contactStore}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-clay-300 min-h-[250px] sm:min-h-[280px]">
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
      </section>

    </div>
  );
};
