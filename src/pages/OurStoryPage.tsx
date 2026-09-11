import React, { useEffect } from 'react';
import { Heart, ShieldCheck, Flame, Sparkles, MapPin, Award, Users } from 'lucide-react';
import { updateSeoMetaData } from '../utils/seo';
import { BUSINESS_CONFIG } from '../config/business';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';

export const OurStoryPage: React.FC = () => {
  useEffect(() => {
    updateSeoMetaData({
      title: `Our Story | ${BUSINESS_CONFIG.brandName} Bhavnagar`,
      description: `Learn about the traditional clay craft and tandoor heritage at ${BUSINESS_CONFIG.brandName} (${BUSINESS_CONFIG.listingName}) in Bhavnagar, Gujarat.`,
      canonicalPath: "/our-story",
    });
  }, []);


  return (
    <div className="space-y-12 sm:space-y-20 pb-24 sm:pb-20">

      {/* Hero Header */}
      <section className="bg-clay-900 text-white rounded-b-3xl sm:rounded-b-[2.5rem] py-12 sm:py-20 shadow-earth-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4 max-w-3xl text-center">
          <span className="bg-clay-800 text-clay-300 text-[10px] sm:text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider border border-clay-700 inline-block">
            Heritage & Craft
          </span>
          <h1 className="font-serif text-fluid-h1 font-bold tracking-tight">
            Preserving the Soul of <span className="text-amber-300 italic">Traditional Mitti.</span>
          </h1>
          <p className="text-clay-200 text-fluid-body leading-relaxed">
            Bringing authentic clay pottery, natural water matkas, and specialist commercial tandoors to Bhavnagar homes and food businesses.
          </p>
        </div>
      </section>

      {/* Main Story Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <span className="text-[11px] sm:text-xs font-bold text-clay-500 uppercase tracking-widest block">Pottery & Tandoor Specialist</span>
            <h2 className="font-serif text-fluid-h2 font-bold text-clay-900">
              About {BUSINESS_CONFIG.brandName}
            </h2>
            <p className="text-clay-700 text-xs sm:text-sm leading-relaxed">
              Located at Panchwati Chowk, Subhashnagar in Bhavnagar (listed as <strong>{BUSINESS_CONFIG.listingName}</strong>), our showroom connects traditional clay artisans with modern homes and catering establishments.
            </p>
            <p className="text-clay-700 text-xs sm:text-sm leading-relaxed">
              We specialize in custom-crafted <strong>Drum Tandoors</strong>, <strong>Trolly Tandoors</strong>, and <strong>Stainless Steel Tandoors</strong> built to withstand commercial restaurant heat while delivering rich smoked flavor.
            </p>
            <div className="p-4 bg-white rounded-2xl border-l-4 border-clay-500 shadow-earth">
              <p className="font-serif italic text-clay-900 text-xs sm:text-sm">
                "From Mitti to Memories — our commitment is to provide natural, non-toxic, handcrafted clay products for healthier living and authentic cooking."
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 mt-4 lg:mt-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-clay-300 aspect-[4/3]">
              <ImageWithFallback
                src="/assets/shree-matla-ghar/store/showroom-front.jpg"
                alt="Shree Matla Ghar Showroom Craftsmanship"
                categoryLabel="Showroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Brand Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-[11px] sm:text-xs font-bold text-clay-500 uppercase tracking-widest block">Our Commitments</span>
          <h2 className="font-serif text-fluid-h2 font-bold text-clay-900">Quality Principles</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-clay-200 shadow-earth space-y-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-clay-900">Refractory Heat Strength</h3>
            <p className="text-xs text-clay-600 leading-relaxed">
              Our Drum, Trolly, and SS tandoors feature dense, thermal-tested clay linings engineered for intense commercial baking.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-clay-200 shadow-earth space-y-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-clay-900">100% Pure Natural Clay</h3>
            <p className="text-xs text-clay-600 leading-relaxed">
              Zero chemical glazes or lead synthetic dyes. Sourced from natural clay beds for pure drinking water and healthy cooking.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-clay-200 shadow-earth space-y-3 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-clay-100 text-clay-700 flex items-center justify-center">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-clay-900">Local Bhavnagar Presence</h3>
            <p className="text-xs text-clay-600 leading-relaxed">
              Direct store pickup and personal consultation at Subhashnagar, Panchwati Chowk.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
