import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem } from '../types';
import { GalleryModal } from '../components/gallery/GalleryModal';
import { updateSeoMetaData } from '../utils/seo';
import { Eye, ShieldCheck, MapPin, ExternalLink, Video } from 'lucide-react';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { VideoViewer } from '../components/common/VideoViewer';
import { BUSINESS_CONFIG } from '../config/business';
import { OFFICIAL_GOOGLE_MAPS_LINK } from '../utils/mediaValidation';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    updateSeoMetaData({
      title: `Store Photos & Media Gallery | ${BUSINESS_CONFIG.brandName} Bhavnagar`,
      description: `View authentic store photography, tandoor manufacturing, and pottery products from ${BUSINESS_CONFIG.brandName} (${BUSINESS_CONFIG.listingName}).`,
      canonicalPath: "/gallery",
    });
  }, []);

  const categories = [
    { id: 'all', name: 'All Genuine Media' },
    { id: 'tandoor', name: 'Tandoors' },
    { id: 'matka', name: 'Matkas & Water Pots' },
    { id: 'workshop', name: 'Store & Workshop' },
    { id: 'products', name: 'Clay Pottery' },
    { id: 'ganpati', name: 'Ganpati Idols' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6 sm:space-y-8 pb-24 sm:pb-20">
      
      {/* Page Title */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-[11px] sm:text-xs font-bold text-clay-500 uppercase tracking-widest block">Authentic Store Media</span>
        <h1 className="font-serif text-fluid-h1 font-bold text-clay-900">Shree Matla Ghar & Tandoor Gallery</h1>
        <p className="text-clay-600 text-xs sm:text-sm">
          Genuine store photos and pottery media associated with our official Google Maps listing in Subhashnagar, Bhavnagar.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 text-[11px] sm:text-xs font-bold rounded-full border border-amber-300">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Strictly Genuine Business Media Only</span>
          </div>

          <a
            href={OFFICIAL_GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 bg-clay-900 text-white text-[11px] sm:text-xs font-bold rounded-full hover:bg-clay-800 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>View All Photos on Google Maps</span>
            <ExternalLink className="w-3 h-3 text-amber-300 ml-0.5" />
          </a>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all min-h-[40px] ${
              activeCategory === cat.id
                ? 'bg-clay-500 text-white shadow-sm'
                : 'bg-white text-clay-800 border border-clay-200 hover:bg-clay-100'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Workshop Video Section */}
      {(activeCategory === 'all' || activeCategory === 'workshop' || activeCategory === 'tandoor') && (
        <div className="bg-clay-900 text-white rounded-3xl p-5 sm:p-8 border border-clay-700 shadow-earth-lg space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-amber-400" />
              <h2 className="font-serif font-bold text-base sm:text-xl text-white">Genuine Workshop & Pottery Crafting Video</h2>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-amber-300 bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-800/50">
              Verified Business Video
            </span>
          </div>

          <VideoViewer
            src="/assets/shree-matla-ghar/store/tandoor-crafting-video.mp4"
            poster="/assets/shree-matla-ghar/tandoor/drum-tandoor-main.jpg"
            title="Tandoor Clay Lining & Handcrafting Craftsmanship"
          />
        </div>
      )}

      {/* Gallery Grid: Masonry Layout */}
      <div className="columns-2 lg:columns-3 gap-3 sm:gap-6 space-y-3 sm:space-y-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative rounded-2xl overflow-hidden bg-clay-100 border border-clay-200 shadow-earth cursor-pointer break-inside-avoid"
          >
            <ImageWithFallback
              src={item.image}
              alt={item.title}
              loading="lazy"
              categoryLabel={item.category}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-clay-950/90 via-clay-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-5 text-white">
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-amber-400 truncate">
                {item.source === 'google-maps-business-media' ? '📍 Google Maps' : item.category}
              </span>
              <h3 className="font-serif font-bold text-sm sm:text-lg line-clamp-1">{item.title}</h3>
              <p className="text-[11px] sm:text-xs text-clay-200 line-clamp-1 mt-0.5">{item.caption}</p>
              <span className="mt-2 sm:mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-amber-300">
                <Eye className="w-3.5 h-3.5" /> View Photo
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <GalleryModal
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />

    </div>
  );
};
