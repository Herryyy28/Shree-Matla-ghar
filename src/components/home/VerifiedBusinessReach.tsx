import React, { useEffect, useState } from 'react';
import { Eye, Share2, MessageCircle, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { BusinessReachMetrics } from '../../types';
import { getBusinessReachMetrics, subscribeToActivityUpdates } from '../../utils/activityTracker';
import { SubtleCountUp } from '../common/SubtleCountUp';

export const VerifiedBusinessReach: React.FC = () => {
  const [metrics, setMetrics] = useState<BusinessReachMetrics>(() => getBusinessReachMetrics());

  useEffect(() => {
    setMetrics(getBusinessReachMetrics());
    const unsubscribe = subscribeToActivityUpdates(() => {
      setMetrics(getBusinessReachMetrics());
    });
    return unsubscribe;
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-clay-50/70 border-y border-clay-200/80 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-clay-200/60 text-clay-800 text-xs font-bold px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Verified Activity & Performance</span>
          </div>
          <h2 className="font-serif font-bold text-fluid-h2 text-clay-900">
            Shree Matla Ghar — Genuine Business Reach
          </h2>
          <p className="text-clay-600 text-xs sm:text-sm leading-relaxed">
            Transparent metrics tracking customer engagement across our clay pottery catalog, specialist Drum Tandoors, and verified store sales.
          </p>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-white rounded-2xl p-5 border border-clay-200 shadow-earth text-center space-y-2 relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-clay-100 flex items-center justify-center text-clay-700 mx-auto">
              <Eye className="w-5 h-5" />
            </div>
            <div className="font-serif font-extrabold text-2xl sm:text-3xl text-clay-900">
              <SubtleCountUp value={metrics.totalTrackedViews} />
            </div>
            <span className="text-xs font-bold text-clay-700 block">Catalog Product Views</span>
            <span className="text-[10px] text-clay-500 block">Real customer visits</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-clay-200 shadow-earth text-center space-y-2 relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-clay-100 flex items-center justify-center text-clay-700 mx-auto">
              <Share2 className="w-5 h-5" />
            </div>
            <div className="font-serif font-extrabold text-2xl sm:text-3xl text-clay-900">
              <SubtleCountUp value={metrics.totalTrackedShares} />
            </div>
            <span className="text-xs font-bold text-clay-700 block">Product Shares</span>
            <span className="text-[10px] text-clay-500 block">WhatsApp & link shares</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-clay-200 shadow-earth text-center space-y-2 relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200/60">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="font-serif font-extrabold text-2xl sm:text-3xl text-emerald-950">
              <SubtleCountUp value={metrics.totalTrackedEnquiries} />
            </div>
            <span className="text-xs font-bold text-emerald-900 block">Direct Enquiries</span>
            <span className="text-[10px] text-emerald-700 block">WhatsApp & phone quotes</span>
          </div>

          <div className="bg-emerald-600 text-white rounded-2xl p-5 border border-emerald-700 shadow-earth text-center space-y-2 relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white mx-auto">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="font-serif font-extrabold text-2xl sm:text-3xl text-white">
              <SubtleCountUp value={metrics.verifiedProductsSold || 0} />
            </div>
            <span className="text-xs font-extrabold block">Products Sold</span>
            <span className="text-[10px] text-emerald-100 block">Verified completed sales</span>
          </div>

        </div>

        {/* Verification Guarantee */}
        <div className="bg-white rounded-xl p-4 border border-clay-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-clay-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Integrity Guarantee:</strong> All numbers represent actual verified actions and store records. We never display fake or randomized counts.
            </span>
          </div>
          <span className="text-[11px] font-mono text-clay-500 shrink-0">Subhashnagar, Bhavnagar</span>
        </div>

      </div>
    </section>
  );
};
