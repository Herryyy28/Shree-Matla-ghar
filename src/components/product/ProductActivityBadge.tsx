import React, { useEffect, useState } from 'react';
import { Eye, Share2, MessageCircle, ShieldCheck } from 'lucide-react';
import { ProductMetrics } from '../../types';
import { getProductMetrics, subscribeToActivityUpdates } from '../../utils/activityTracker';
import { SubtleCountUp } from '../common/SubtleCountUp';

interface ProductActivityBadgeProps {
  productId: string;
  className?: string;
  variant?: 'subtle' | 'compact' | 'detailed';
}

export const ProductActivityBadge: React.FC<ProductActivityBadgeProps> = ({
  productId,
  className = '',
  variant = 'subtle',
}) => {
  const [metrics, setMetrics] = useState<ProductMetrics>(() => getProductMetrics(productId));

  useEffect(() => {
    setMetrics(getProductMetrics(productId));
    const unsubscribe = subscribeToActivityUpdates(() => {
      setMetrics(getProductMetrics(productId));
    });
    return unsubscribe;
  }, [productId]);

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 text-[11px] text-clay-600 font-medium flex-wrap ${className}`}>
        <span className="flex items-center gap-1 shrink-0" title="Real visitor views">
          <Eye className="w-3.5 h-3.5 text-clay-400" />
          <SubtleCountUp value={metrics.views} /> views
        </span>
        <span className="flex items-center gap-1 shrink-0" title="Direct product shares">
          <Share2 className="w-3.5 h-3.5 text-clay-400" />
          <SubtleCountUp value={metrics.shares} /> shares
        </span>
        {metrics.verifiedSales !== undefined && metrics.verifiedSales > 0 && (
          <span className="flex items-center gap-1 text-emerald-700 font-bold shrink-0" title="Verified completed store sales">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <SubtleCountUp value={metrics.verifiedSales} /> verified sales
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`bg-clay-50/90 rounded-2xl p-4 border border-clay-200/90 space-y-2.5 ${className}`}>
      <div className="flex items-center justify-between gap-2 flex-wrap border-b border-clay-200/60 pb-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-clay-700 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Verified Product Activity
        </span>
        <span className="text-[10px] text-clay-500">Real-time tracked stats</span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 text-center">
        <div className="bg-white p-2.5 rounded-xl border border-clay-100 shadow-2xs">
          <Eye className="w-4 h-4 text-clay-500 mx-auto mb-1" />
          <strong className="block text-sm font-bold text-clay-900">
            <SubtleCountUp value={metrics.views} />
          </strong>
          <span className="text-[10px] text-clay-600 font-medium block">Views</span>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-clay-100 shadow-2xs">
          <Share2 className="w-4 h-4 text-clay-500 mx-auto mb-1" />
          <strong className="block text-sm font-bold text-clay-900">
            <SubtleCountUp value={metrics.shares} />
          </strong>
          <span className="text-[10px] text-clay-600 font-medium block">Shares</span>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-clay-100 shadow-2xs">
          <MessageCircle className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
          <strong className="block text-sm font-bold text-clay-900">
            <SubtleCountUp value={metrics.whatsappClicks} />
          </strong>
          <span className="text-[10px] text-clay-600 font-medium block">Enquiries</span>
        </div>

        {metrics.verifiedSales !== undefined ? (
          <div className="bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-200/80 shadow-2xs col-span-3 sm:col-span-1">
            <ShieldCheck className="w-4 h-4 text-emerald-700 mx-auto mb-1" />
            <strong className="block text-sm font-extrabold text-emerald-900">
              <SubtleCountUp value={metrics.verifiedSales} />
            </strong>
            <span className="text-[10px] text-emerald-800 font-bold block">Verified Sales</span>
          </div>
        ) : null}
      </div>

      <p className="text-[10px] text-clay-500 leading-snug">
        * Activity stats represent real customer views, shares, and store enquiries. Verified sales are recorded directly from store receipts.
      </p>
    </div>
  );
};
