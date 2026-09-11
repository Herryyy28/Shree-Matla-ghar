import React from 'react';
import { Heart } from 'lucide-react';
import { useFavorite } from '../../hooks/useFavorites';

interface FavoriteButtonProps {
  productId: string;
  size?: 'sm' | 'md';
  className?: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  productId,
  size = 'md',
  className = '',
}) => {
  const { saved, toggle } = useFavorite(productId);

  const sizeClasses = size === 'sm'
    ? 'w-7 h-7 text-xs'
    : 'w-9 h-9 text-sm';

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle();
      }}
      aria-label={saved ? 'Remove from saved' : 'Save pottery'}
      title={saved ? 'Remove from saved' : 'Save pottery'}
      className={`
        ${sizeClasses}
        flex items-center justify-center rounded-full transition-all duration-200
        ${saved
          ? 'bg-red-50 text-red-500 border border-red-200 hover:bg-red-100 scale-105'
          : 'bg-white/90 text-clay-400 border border-clay-200 hover:text-red-400 hover:bg-red-50 backdrop-blur-sm'
        }
        ${className}
      `}
    >
      <Heart
        className={`w-4 h-4 transition-all ${saved ? 'fill-red-500 text-red-500' : ''}`}
      />
    </button>
  );
};
