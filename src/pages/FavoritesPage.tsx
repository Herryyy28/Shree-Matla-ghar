import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useFavorites } from '../hooks/useFavorites';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { updateSeoMetaData } from '../utils/seo';
import { clearAllSaved } from '../utils/favorites';
import { BUSINESS_CONFIG } from '../config/business';

export const FavoritesPage: React.FC = () => {
  const { savedIds, count } = useFavorites();

  useEffect(() => {
    updateSeoMetaData({
      title: `Saved Pottery | ${BUSINESS_CONFIG.brandName}`,
      description: `Your saved pottery products at ${BUSINESS_CONFIG.brandName}. Browse your saved list and enquire directly on WhatsApp.`,
      canonicalPath: '/saved',
    });
  }, []);

  const savedProducts = PRODUCTS.filter((p) => savedIds.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6 sm:space-y-8 pb-24 sm:pb-20">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            <h1 className="font-serif font-bold text-fluid-h2 text-clay-900">Saved Pottery</h1>
          </div>
          <p className="text-xs sm:text-sm text-clay-600">
            {count > 0
              ? `You have saved ${count} pottery ${count === 1 ? 'item' : 'items'}. Enquire directly on WhatsApp.`
              : 'Save pottery items while you browse to compare and enquire later.'}
          </p>
        </div>

        {count > 0 && (
          <button
            onClick={() => {
              if (window.confirm('Clear all saved pottery items?')) {
                clearAllSaved();
              }
            }}
            className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-clay-600 hover:text-red-600 bg-white border border-clay-200 hover:border-red-200 rounded-xl transition-colors touch-target self-start sm:self-auto"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear All Saved
          </button>
        )}
      </div>

      {/* Products grid or empty state */}
      {savedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {savedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-clay-200 p-10 sm:p-16 text-center space-y-5 max-w-md mx-auto">
          <div className="w-16 h-16 bg-clay-50 rounded-full flex items-center justify-center mx-auto">
            <Heart className="w-7 h-7 text-clay-300" />
          </div>
          <div className="space-y-1.5">
            <h2 className="font-serif font-bold text-xl text-clay-900">No Saved Items Yet</h2>
            <p className="text-xs text-clay-600 leading-relaxed">
              Tap the ♡ heart on any pottery product to save it here for later reference.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-clay-900 hover:bg-clay-800 text-white font-bold text-sm rounded-2xl transition-colors min-h-[44px]"
          >
            <ShoppingBag className="w-4 h-4" />
            Browse Pottery Catalog
          </Link>
        </div>
      )}
    </div>
  );
};
