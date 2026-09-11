import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, RotateCcw, Tag } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/product/ProductCard';
import { updateSeoMetaData } from '../utils/seo';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedSize, setSelectedSize] = useState('all');
  const [wholesaleOnly, setWholesaleOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');

  useEffect(() => {
    updateSeoMetaData({
      title: "All Pottery Products & Showroom Catalog | Shree Matla Ghar",
      description: "Browse our complete range of handmade natural clay matkas, surahi, handi, tandoors, kulhads, garden planters, and eco-friendly Ganpati idols.",
      canonicalPath: "/products",
    });
  }, []);

  // Synchronize initial query string from URL search params
  useEffect(() => {
    if (searchParams.get('search') !== null) {
      setSearchQuery(searchParams.get('search') || '');
    }
  }, [searchParams]);

  // Extract all unique sizes across products
  const allSizes = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => p.sizes.forEach((s) => set.add(s)));
    return Array.from(set);
  }, []);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category Filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Keyword Search Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesDesc = p.shortDescription.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
        const matchesCategory = p.category.toLowerCase().includes(q);
        const matchesTags = p.tags.some((t) => t.toLowerCase().includes(q));

        if (!matchesName && !matchesDesc && !matchesCategory && !matchesTags) {
          return false;
        }
      }

      // Size Filter
      if (selectedSize !== 'all' && !p.sizes.includes(selectedSize)) {
        return false;
      }

      // Wholesale Filter
      if (wholesaleOnly && !p.wholesaleAvailable) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return (a.price || 0) - (b.price || 0);
      if (sortBy === 'price-desc') return (b.price || 0) - (a.price || 0);
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, selectedSize, wholesaleOnly, sortBy]);

  const handleCategorySelect = (categorySlug: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (categorySlug === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', categorySlug);
    }
    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedSize('all');
    setWholesaleOnly(false);
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6 sm:space-y-8 pb-24 sm:pb-20">

      {/* Header Banner */}
      <div className="bg-clay-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-earth relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-2.5 sm:space-y-3">
          <span className="bg-clay-700 text-clay-200 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            Digital Showroom Catalog
          </span>
          <h1 className="font-serif text-fluid-h1 font-bold">Traditional Pottery Products</h1>
          <p className="text-clay-300 text-xs sm:text-sm leading-relaxed">
            Direct artisan prices for natural clay matkas, cookware, planters, kulhads, and eco-friendly Ganpati idols.
          </p>
        </div>
      </div>

      {/* Category Pills Slider */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => handleCategorySelect('all')}
          className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 min-h-[40px] ${selectedCategory === 'all'
            ? 'bg-clay-500 text-white shadow-sm'
            : 'bg-white text-clay-800 border border-clay-200 hover:bg-clay-100'
            }`}
        >
          <span>🏺 All Products</span>
          <span className="text-[10px] opacity-75">({PRODUCTS.length})</span>
        </button>

        {CATEGORIES.map((cat) => {
          const count = PRODUCTS.filter((p) => p.category === cat.slug).length;
          const isSelected = selectedCategory === cat.slug;

          return (
            <button
              key={cat.slug}
              onClick={() => handleCategorySelect(cat.slug)}
              className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 min-h-[40px] ${isSelected
                ? 'bg-clay-500 text-white shadow-sm'
                : 'bg-white text-clay-800 border border-clay-200 hover:bg-clay-100'
                }`}
            >
              <span>{cat.icon} {cat.name}</span>
              <span className="text-[10px] opacity-75">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-clay-200 shadow-earth flex flex-col md:flex-row gap-3 sm:gap-4 justify-between items-stretch">

        {/* Search Input */}
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by product name, category, or keyword..."
            className="w-full bg-clay-50/70 text-clay-900 text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-clay-300 focus:outline-none focus:ring-2 focus:ring-clay-500 min-h-[44px]"
          />
          <Search className="w-4 h-4 text-clay-400 absolute left-3.5 top-3.5" />
        </div>

        {/* Filters Controls */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">

          {/* Wholesale Filter Toggle */}
          <label className="flex items-center gap-2 text-xs font-semibold text-clay-800 bg-clay-50 px-3 py-2.5 rounded-xl border border-clay-200 cursor-pointer min-h-[44px]">
            <input
              type="checkbox"
              checked={wholesaleOnly}
              onChange={(e) => setWholesaleOnly(e.target.checked)}
              className="rounded text-clay-500 focus:ring-clay-500 w-4 h-4"
            />
            <span>Bulk Orders Only</span>
          </label>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-clay-800 bg-clay-50 px-3 py-2.5 rounded-xl border border-clay-200 min-h-[44px]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-clay-500 shrink-0" />
            <select
              value={sortBy}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value as 'featured' | 'price-asc' | 'price-desc' | 'name')}
              className="bg-transparent text-xs font-semibold text-clay-900 focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>

          {/* Reset Filters */}
          {(searchQuery || selectedCategory !== 'all' || selectedSize !== 'all' || wholesaleOnly) && (
            <button
              onClick={handleResetFilters}
              className="p-2.5 text-clay-600 hover:text-clay-900 bg-clay-100 rounded-xl transition-colors min-h-[44px] flex items-center justify-center"
              title="Reset Filters"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

        </div>
      </div>

      {/* Results Count Summary */}
      <div className="flex items-center justify-between text-xs text-clay-600 font-medium px-1">
        <span>Showing <strong>{filteredProducts.length}</strong> pottery products</span>
        {selectedCategory !== 'all' && (
          <span className="uppercase font-bold text-clay-500 text-[10px] sm:text-xs">Category: {selectedCategory}</span>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl border border-clay-200 p-8 sm:p-12 text-center max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 bg-clay-100 text-clay-500 rounded-full flex items-center justify-center mx-auto text-2xl">
            🔍
          </div>
          <h3 className="font-serif font-bold text-lg sm:text-xl text-clay-900">No Matching Pottery Found</h3>
          <p className="text-xs text-clay-600">
            We couldn't find any products matching your current search filters. Try adjusting your query or resetting filters.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-6 py-3 bg-clay-500 text-white font-bold text-xs rounded-xl hover:bg-clay-600 transition-colors min-h-[44px]"
          >
            Reset All Search Filters
          </button>
        </div>
      )}

    </div>
  );
};
