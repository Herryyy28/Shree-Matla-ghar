import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
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
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages: { code: LanguageCode; shortLabel: string; fullLabel: string }[] = [
    { code: 'en', shortLabel: 'EN', fullLabel: 'English' },
    { code: 'gu', shortLabel: 'GU', fullLabel: 'ગુજરાતી' },
    { code: 'hi', shortLabel: 'HI', fullLabel: 'हिन्दी' },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
              className={`py-2 px-2.5 text-xs font-bold rounded-xl border transition-all min-h-[38px] flex items-center justify-center gap-1.5 ${
                language === item.code
                  ? 'bg-clay-500 text-white border-clay-500 shadow-xs'
                  : 'bg-white text-clay-800 border-clay-300 hover:bg-clay-50'
              }`}
            >
              <span>{item.fullLabel}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {/* Compact Header Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-clay-300 hover:border-clay-400 rounded-xl text-xs font-bold text-clay-800 shadow-2xs hover:bg-clay-50 transition-all touch-target"
        title="Change Language"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 text-clay-600 shrink-0" />
        <span className="font-bold text-clay-900 tracking-wide">{currentLang.shortLabel}</span>
        <ChevronDown className={`w-3 h-3 text-clay-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Floating Popover Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-36 bg-white rounded-2xl shadow-earth-lg border border-clay-200 py-1.5 z-50 animate-fade-in">
          <div className="px-3 py-1 border-b border-clay-100 mb-1">
            <span className="text-[10px] font-bold text-clay-400 uppercase tracking-wider block">Language</span>
          </div>
          {languages.map((item) => (
            <button
              key={item.code}
              onClick={() => {
                setLanguage(item.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold transition-colors text-left ${
                language === item.code
                  ? 'bg-amber-50 text-clay-950 font-bold'
                  : 'text-clay-700 hover:bg-clay-50 hover:text-clay-900'
              }`}
            >
              <span>{item.fullLabel}</span>
              {language === item.code && <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
