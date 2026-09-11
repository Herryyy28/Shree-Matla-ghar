import React, { useState } from 'react';
import { Play, VideoOff, MapPin, ExternalLink } from 'lucide-react';
import { isValidBusinessMedia, OFFICIAL_GOOGLE_MAPS_LINK } from '../../utils/mediaValidation';

interface VideoViewerProps {
  src: string;
  poster?: string;
  title: string;
  className?: string;
}

export const VideoViewer: React.FC<VideoViewerProps> = ({
  src,
  poster,
  title,
  className = 'w-full aspect-video rounded-2xl overflow-hidden bg-clay-950 relative',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const isValidVideo = isValidBusinessMedia(src);

  if (hasError || !isValidVideo) {
    return (
      <div className={`${className} bg-gradient-to-br from-clay-900 via-clay-950 to-black border border-clay-800 flex flex-col items-center justify-center p-6 text-center space-y-3 text-white relative`}>
        <div className="w-12 h-12 rounded-full bg-clay-800/80 border border-clay-700 flex items-center justify-center text-amber-400">
          <VideoOff className="w-6 h-6" />
        </div>
        <div className="space-y-1 max-w-xs">
          <span className="block text-xs font-bold text-amber-400 uppercase tracking-wider">
            Genuine Video Pending
          </span>
          <p className="text-xs text-clay-300 font-medium">
            {title}
          </p>
          <p className="text-[11px] text-clay-400">
            Real workshop & pottery video associated with Shree Matla Ghar
          </p>
        </div>
        <a
          href={OFFICIAL_GOOGLE_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-clay-950 bg-amber-400 hover:bg-amber-300 px-3.5 py-2 rounded-lg transition-colors border border-amber-300 shadow-sm min-h-[40px]"
        >
          <MapPin className="w-3.5 h-3.5 text-clay-950" />
          <span>View Business Videos on Google Maps</span>
          <ExternalLink className="w-3 h-3 text-clay-950 ml-0.5" />
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      {!isPlaying ? (
        <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
          {poster && isValidBusinessMedia(poster) ? (
            <img src={poster} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-clay-900 to-clay-950 flex flex-col items-center justify-center p-4">
              <span className="text-xs text-amber-400 font-medium">Shree Matla Ghar & Tandoor</span>
              <span className="text-sm font-bold text-white mt-1">{title}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-amber-500 text-clay-950 flex items-center justify-center shadow-earth-lg group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-clay-950 ml-1" />
            </div>
          </div>
          <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg line-clamp-1 flex items-center justify-between">
            <span>🎬 {title}</span>
            <span className="text-[10px] text-amber-300 font-normal">Real Business Video</span>
          </div>
        </div>
      ) : (
        <video
          src={src}
          controls
          autoPlay={false}
          muted={false}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};
