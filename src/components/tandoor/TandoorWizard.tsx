import React, { useState } from 'react';
import { Check, Sparkles, MessageCircle, RefreshCw, ArrowRight } from 'lucide-react';
import { getTandoorWhatsAppLink } from '../../utils/whatsapp';
import { trackTandoorWizardRecommendation } from '../../utils/analytics';

type BusinessType = 'dhaba' | 'restaurant' | 'catering' | 'home';
type Portability = 'fixed' | 'mobile' | 'hygiene-first';

interface Recommendation {
  title: string;
  badge: string;
  type: string;
  description: string;
  highlights: string[];
  image: string;
}

export const TandoorWizard: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [businessType, setBusinessType] = useState<BusinessType>('restaurant');
  const [portability, setPortability] = useState<Portability>('fixed');

  const getRecommendation = (): Recommendation => {
    if (portability === 'mobile' || businessType === 'catering') {
      return {
        title: "Heavy-Duty Trolly Tandoor",
        badge: "Recommended for Caterers & Stalls",
        type: "Trolly Tandoor",
        description: "Mobile tandoor pot mounted on a heavy steel frame with castor wheels for easy setup at wedding venues and pop-up stalls.",
        highlights: [
          "Mounted on heavy castor wheels with brake locks",
          "Thick clay pot lining retains heat during transport",
          "Outer stainless/iron casing for extreme durability",
        ],
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      };
    } else if (portability === 'hygiene-first' || businessType === 'restaurant') {
      return {
        title: "SS Stainless Steel Commercial Tandoor",
        badge: "Recommended for Hotels & Fine Dining",
        type: "SS Tandoor",
        description: "Hygienic 304-grade stainless steel exterior wrapping a handcrafted clay pot. Easy to sanitize and approved for commercial kitchens.",
        highlights: [
          "Mirror/Matte Stainless Steel easy-clean exterior",
          "Superior heat insulation & outer touch safety",
          "Ideal for indoor restaurant & kitchen setups",
        ],
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      };
    } else {
      return {
        title: "Traditional Drum Tandoor",
        badge: "Best Seller for Dhabas & BBQ",
        type: "Drum Tandoor",
        description: "Heavy steel drum body with authentic refractory clay lining for intense charcoal heat, perfect for naans, roti, and tikka.",
        highlights: [
          "Maximum heat retention for continuous naan baking",
          "Cost-effective commercial solution",
          "Authentic charcoal smoky flavor enhancement",
        ],
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      };
    }
  };

  const handleComplete = () => {
    const rec = getRecommendation();
    trackTandoorWizardRecommendation(rec.type, businessType);
  };

  const recommendation = getRecommendation();

  return (
    <div className="bg-clay-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 text-white shadow-earth-lg relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-clay-800 pb-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-2xl border border-amber-500/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold">Interactive Tandoor Selector</h3>
            <p className="text-xs text-clay-300">Find the exact tandoor model for your kitchen or catering setup</p>
          </div>
        </div>
        <span className="text-xs font-mono font-semibold px-3 py-1 bg-clay-800 rounded-full text-amber-300 border border-clay-700">
          Step {step} of 3
        </span>
      </div>

      {/* Wizard Steps */}
      {step === 1 && (
        <div className="space-y-6">
          <h4 className="text-sm font-semibold text-clay-200">1. What is your primary business or usage requirement?</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'restaurant', label: 'Restaurant / Hotel', desc: 'Commercial indoor kitchen setup' },
              { id: 'catering', label: 'Catering & Events', desc: 'Outdoor weddings & food stalls' },
              { id: 'dhaba', label: 'Dhaba & Highway Eatery', desc: 'High-heat non-stop naan production' },
              { id: 'home', label: 'Home & Backyard BBQ', desc: 'Personal use & weekend parties' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setBusinessType(item.id as BusinessType)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  businessType === item.id
                    ? 'bg-amber-500/20 border-amber-400 text-white shadow-md'
                    : 'bg-clay-800/60 border-clay-700/80 text-clay-300 hover:border-clay-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-amber-200">{item.label}</span>
                  {businessType === item.id && <Check className="w-4 h-4 text-amber-400" />}
                </div>
                <p className="text-xs text-clay-400 mt-1">{item.desc}</p>
              </button>
            ))}
          </div>
          <div className="flex justify-end pt-2">
            <button
              onClick={() => setStep(2)}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-clay-950 font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 transition-all"
            >
              <span>Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <h4 className="text-sm font-semibold text-clay-200">2. Do you need mobility or strict stainless-steel hygiene?</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'fixed', label: 'Fixed Placement', desc: 'Stationary position in main kitchen' },
              { id: 'mobile', label: 'Mobile on Wheels', desc: 'Trolley with heavy castor wheels' },
              { id: 'hygiene-first', label: 'Stainless Steel (SS)', desc: 'Mirror finish 304 SS casing' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setPortability(item.id as Portability)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  portability === item.id
                    ? 'bg-amber-500/20 border-amber-400 text-white shadow-md'
                    : 'bg-clay-800/60 border-clay-700/80 text-clay-300 hover:border-clay-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-amber-200">{item.label}</span>
                  {portability === item.id && <Check className="w-4 h-4 text-amber-400" />}
                </div>
                <p className="text-xs text-clay-400 mt-1">{item.desc}</p>
              </button>
            ))}
          </div>
          <div className="flex justify-between pt-2">
            <button
              onClick={() => setStep(1)}
              className="px-4 py-2.5 text-clay-400 hover:text-white text-xs font-semibold"
            >
              ← Back
            </button>
            <button
              onClick={() => {
                setStep(3);
                handleComplete();
              }}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-clay-950 font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 transition-all"
            >
              <span>See Recommendation</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <div className="bg-clay-800/90 border border-amber-500/40 rounded-2xl p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
                {recommendation.badge}
              </span>
              <h4 className="text-lg sm:text-xl font-bold font-serif text-amber-200">{recommendation.title}</h4>
              <p className="text-xs sm:text-sm text-clay-300 leading-relaxed">{recommendation.description}</p>
              
              <div className="space-y-1.5 pt-2">
                {recommendation.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-clay-200">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col items-center">
              <img
                src={recommendation.image}
                alt={recommendation.title}
                className="w-full h-40 object-cover rounded-xl border border-amber-500/30 mb-4"
              />
              <a
                href={getTandoorWhatsAppLink({
                  tandoorType: recommendation.type,
                  usageType: businessType,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Instant Quote on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setStep(1)}
              className="text-xs text-clay-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset & Start Over</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
