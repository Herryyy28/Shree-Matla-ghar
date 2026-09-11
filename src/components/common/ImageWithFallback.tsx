import React, { useState } from 'react';
import { Camera, ExternalLink, MapPin } from 'lucide-react';
import { isValidBusinessMedia, OFFICIAL_GOOGLE_MAPS_LINK } from '../../utils/mediaValidation';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  categoryLabel?: string;
  showGoogleMapsButton?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  loading = 'lazy',
  categoryLabel,
  showGoogleMapsButton = true
}) => {
  const [hasError, setHasError] = useState(false);
  const isValidSource = isValidBusinessMedia(src);

  // If source is invalid or failed loading, show clean genuine photo pending state
  if (hasError || !isValidSource) {
    return (
      <div className="w-full h-full min-h-[180px] bg-gradient-to-br from-clay-100 via-clay-200 to-clay-300 border border-clay-300 rounded-xl p-4 flex flex-col items-center justify-center text-center space-y-2 select-none relative overflow-hidden group">
        <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-600/30 flex items-center justify-center text-amber-800 shadow-sm">
          <Camera className="w-5 h-5" />
        </div>

        <div className="space-y-0.5 max-w-[220px]">
          <span className="block text-xs font-bold text-clay-900 uppercase tracking-wide">
            Photo Coming Soon
          </span>
          <span className="block text-[11px] font-medium text-clay-700">
            {categoryLabel ? `${categoryLabel} • ` : ''}Shree Matla Ghar
          </span>
        </div>

        <p className="text-[10px] text-clay-600 max-w-[200px] leading-tight line-clamp-2">
          Genuine pottery photo directly from our Bhavnagar store
        </p>

        {showGoogleMapsButton && (
          <a
            href={OFFICIAL_GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-900 bg-amber-200 hover:bg-amber-300 px-2.5 py-1 rounded-md transition-colors border border-amber-400/50 mt-1 min-h-[36px]"
          >
            <MapPin className="w-3 h-3 text-amber-800" />
            <span>View on Google Maps</span>
            <ExternalLink className="w-2.5 h-2.5 text-amber-800 ml-0.5" />
          </a>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
