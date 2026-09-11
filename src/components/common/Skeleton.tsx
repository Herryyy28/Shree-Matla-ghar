import React from 'react';

// Card skeleton for product grids
export const ProductCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-2xl border border-clay-200 overflow-hidden animate-pulse">
    <div className="aspect-[4/3] bg-clay-200" />
    <div className="p-4 space-y-2.5">
      <div className="h-3 bg-clay-200 rounded-full w-1/3" />
      <div className="h-4 bg-clay-200 rounded-full w-4/5" />
      <div className="h-3 bg-clay-200 rounded-full w-3/5" />
      <div className="h-3 bg-clay-200 rounded-full w-2/3" />
      <div className="pt-2 flex gap-2">
        <div className="h-9 bg-clay-200 rounded-xl flex-1" />
        <div className="h-9 bg-clay-200 rounded-xl w-9" />
      </div>
    </div>
  </div>
);

// Inline text skeleton
export const TextSkeleton: React.FC<{ width?: string; className?: string }> = ({
  width = 'w-full',
  className = '',
}) => (
  <div className={`h-4 bg-clay-200 rounded-full animate-pulse ${width} ${className}`} />
);

// Full-width image skeleton
export const ImageSkeleton: React.FC<{ className?: string }> = ({
  className = 'w-full aspect-video',
}) => (
  <div className={`bg-clay-200 animate-pulse rounded-2xl ${className}`} />
);

// Gallery grid skeleton (2-col mobile, 3-col desktop)
export const GalleryGridSkeleton: React.FC<{ count?: number }> = ({ count = 6 }) => (
  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="aspect-[4/3] bg-clay-200 rounded-2xl animate-pulse" />
    ))}
  </div>
);
