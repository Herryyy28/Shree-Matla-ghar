import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageCode } from '../../data/translations';

interface LanguageSelectorProps {
  className?: string;
  variant?: 'header' | 'footer' | 'mobile';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  className = '',
  variant = 'header',
}) => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: LanguageCode; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'gu', label: 'ગુજરાતી' },
    { code: 'hi', label: 'हिन्दी' },
  ];

  if (variant === 'mobile') {
    return (
      <div className={`space-y-2 ${className}`}>
        <p className="text-[11px] font-bold text-clay-500 uppercase tracking-wider flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-clay-600" /> Select Language / ભાષા પસંદ કરો
        </p>
        <div className="grid grid-cols-3 gap-1.5">
          {languages.map((item) => (
            <button
              key={item.code}
              onClick={() => setLanguage(item.code)}
              className={`py-2 px-2.5 text-xs font-bold rounded-xl border transition-all min-h-[38px] ${
                language === item.code
                  ? 'bg-clay-500 text-white border-clay-500 shadow-xs'
                  : 'bg-white text-clay-800 border-clay-300 hover:bg-clay-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center bg-white/90 border border-clay-300 rounded-xl p-0.5 text-xs font-bold shadow-2xs ${className}`}>
      <Globe className="w-3.5 h-3.5 text-clay-600 ml-2 mr-1 shrink-0" />
      <div className="flex items-center gap-0.5">
        {languages.map((item) => (
          <button
            key={item.code}
            onClick={() => setLanguage(item.code)}
            className={`px-2 py-1 rounded-lg transition-colors text-[11px] ${
              language === item.code
                ? 'bg-clay-500 text-white shadow-2xs'
                : 'text-clay-700 hover:text-clay-900 hover:bg-clay-100'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};
