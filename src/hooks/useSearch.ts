import { useState, useMemo } from 'react';
import { Product } from '../types';

interface SearchFilters {
  category: string;
  availability: string;
  wholesaleOnly: boolean;
  sortBy: 'featured' | 'newest' | 'name-asc' | 'name-desc';
}

export function useProductSearch(products: Product[], initialQuery: string = '') {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filters, setFilters] = useState<SearchFilters>({
    category: 'all',
    availability: 'all',
    wholesaleOnly: false,
    sortBy: 'featured',
  });

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search Query (Name, Category, Description, Tags)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((p) => 
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }

    // Category Filter
    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    // Availability Filter
    if (filters.availability !== 'all') {
      result = result.filter((p) => p.availability === filters.availability);
    }

    // Wholesale Only
    if (filters.wholesaleOnly) {
      result = result.filter((p) => p.wholesaleAvailable);
    }

    // Sorting
    result.sort((a, b) => {
      switch (filters.sortBy) {
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'featured':
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

    return result;
  }, [products, searchQuery, filters]);

  const updateFilter = <K extends keyof SearchFilters>(key: K, value: SearchFilters[K]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      availability: 'all',
      wholesaleOnly: false,
      sortBy: 'featured',
    });
    setSearchQuery('');
  };

  return {
    searchQuery,
    setSearchQuery,
    filters,
    updateFilter,
    clearFilters,
    filteredProducts,
    resultsCount: filteredProducts.length,
  };
}
