import React from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { GalleryItem } from '../../types';
import { getGeneralWhatsAppLink } from '../../utils/whatsapp';
import { trackEvent } from '../../utils/analytics';

interface GalleryModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ item, items, onClose, onSelect }) => {
  React.useEffect(() => {
    if (item) {
      document.body.classList.add('no-scroll');
      trackEvent({ event: 'gallery_item_view', label: item.title, category: item.category });
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [item]);

  const [touchStart, setTouchStart] = React.useState<number | null>(null);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    }
    if (distance < -minSwipeDistance) {
      handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-8 animate-fade-in"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-20 touch-target"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Navigation Desktop */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors hidden sm:block z-20 touch-target"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Navigation Desktop */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors hidden sm:block z-20 touch-target"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image Content Container */}
      <div className="max-w-4xl w-full flex flex-col items-center max-h-[90vh] overflow-y-auto px-2">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 max-h-[65vh] sm:max-h-[75vh]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[65vh] sm:max-h-[75vh]"
          />
        </div>

        <div className="mt-3 sm:mt-4 text-center text-white max-w-lg space-y-1.5 sm:space-y-2">
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-clay-400 font-semibold">
            {item.category.toUpperCase()}
          </span>
          <h3 className="font-serif font-bold text-lg sm:text-2xl">{item.title}</h3>
          <p className="text-xs sm:text-sm text-clay-300 line-clamp-2">{item.caption}</p>

          {/* Mobile Prev / Next Controls */}
          <div className="flex items-center justify-between sm:hidden pt-2 gap-4">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-white/10 text-white rounded-xl text-xs font-bold flex items-center gap-1 touch-target"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            <span className="text-xs text-clay-400">{currentIndex + 1} / {items.length}</span>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-white/10 text-white rounded-xl text-xs font-bold flex items-center gap-1 touch-target"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-2 sm:pt-3">
            <a
              href={getGeneralWhatsAppLink(`photo "${item.title}" in gallery`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all w-full sm:w-auto min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Enquire About This Pottery Work</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
