import React from 'react';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center py-16 px-4 space-y-4 ${className}`}>
      {icon ? (
        <div className="w-16 h-16 rounded-3xl bg-clay-100 border border-clay-200 flex items-center justify-center text-3xl">
          {icon}
        </div>
      ) : (
        <div className="w-16 h-16 rounded-3xl bg-clay-100 border border-clay-200 flex items-center justify-center text-3xl">
          🏺
        </div>
      )}

      <div className="space-y-1.5 max-w-md">
        <h3 className="font-serif font-bold text-lg sm:text-xl text-clay-900">{title}</h3>
        {description && (
          <p className="text-xs sm:text-sm text-clay-600 leading-relaxed">{description}</p>
        )}
      </div>

      {action && (
        <div className="pt-2">{action}</div>
      )}
    </div>
  );
};
