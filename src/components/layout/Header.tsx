import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Search, ChevronDown, Flame, MapPin, Heart, Package } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { CATEGORIES } from '../../data/categories';
import { getGeneralWhatsAppLink } from '../../utils/whatsapp';
import { useFavorites } from '../../hooks/useFavorites';
import { useEnquiry } from '../../context/EnquiryContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { count: favoritesCount } = useFavorites();
  const { totalItemsCount, openEnquiryDrawer } = useEnquiry();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCategoryOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pottery', path: '/pottery' },
    { name: 'Tandoors', path: '/tandoor', badge: 'Specialist' },
    { name: 'Ganpati', path: '/ganpati', badge: 'Eco' },
    { name: 'Wholesale', path: '/wholesale' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-clay-900 text-clay-100 py-2 px-4 text-[11px] sm:text-xs font-medium text-center flex items-center justify-center gap-2">
        <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
        <span className="truncate max-w-full">
          <strong>{BUSINESS_CONFIG.brandName}</strong> ({BUSINESS_CONFIG.listingName}) — Drum Tandoor, Trolly Tandoor & SS Tandoor Specialist, Bhavnagar
        </span>
        <a
          href={getGeneralWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white ml-2 hidden md:inline shrink-0"
        >
          WhatsApp →
        </a>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-clay-100/95 backdrop-blur-md shadow-earth border-b border-clay-200 py-2.5 sm:py-3'
            : 'bg-clay-100 py-3 sm:py-4 border-b border-clay-200/50'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-clay-500 text-white flex items-center justify-center font-serif font-bold text-lg sm:text-xl shadow-md group-hover:scale-105 transition-transform">
              🏺
            </div>
            <div>
              <span className="font-serif font-bold text-lg sm:text-2xl text-clay-900 tracking-tight block leading-none">
                {BUSINESS_CONFIG.brandName}
              </span>
              <span className="text-[9px] sm:text-xs text-clay-600 font-medium tracking-wide block mt-0.5 sm:mt-1 truncate max-w-[180px] sm:max-w-none">
                {BUSINESS_CONFIG.listingName} • {BUSINESS_CONFIG.city}
              </span>
            </div>
          </Link>

          {/* Desktop & Laptop Navigation (1024px+) */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 relative py-1.5 ${
                    isActive ? 'text-clay-500' : 'text-clay-800 hover:text-clay-500'
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="bg-amber-600 text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded-full uppercase">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-clay-500 rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="text-[11px] xl:text-xs font-bold uppercase tracking-wider text-clay-800 hover:text-clay-500 flex items-center gap-1 py-1.5"
              >
                Categories
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCategoryOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-earth-lg border border-clay-200 py-2 z-50 animate-fade-in"
                  onMouseLeave={() => setIsCategoryOpen(false)}
                >
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/products?category=${cat.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-clay-50 transition-colors text-sm text-clay-800"
                    >
                      <span className="text-lg">{cat.icon}</span>
                      <div>
                        <p className="font-semibold text-clay-900">{cat.name}</p>
                        <p className="text-[11px] text-clay-500 line-clamp-1">{cat.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2.5 text-clay-700 hover:text-clay-900 bg-white border border-clay-200 rounded-xl hover:bg-clay-50 transition-colors touch-target"
              aria-label="Search catalog"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={openEnquiryDrawer}
              className="relative p-2.5 text-clay-800 hover:text-amber-900 bg-amber-100 hover:bg-amber-200 border border-amber-300/60 rounded-xl transition-colors touch-target flex items-center gap-1.5"
              title="My Pottery Enquiry List"
            >
              <Package className="w-4 h-4 text-amber-900" />
              <span className="hidden md:inline text-xs font-bold text-amber-950">Enquiry</span>
              {totalItemsCount > 0 && (
                <span className="bg-amber-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full flex items-center justify-center shadow-sm">
                  {totalItemsCount}
                </span>
              )}
            </button>

            <Link
              to="/saved"
              className="relative p-2.5 text-clay-700 hover:text-red-500 bg-white border border-clay-200 rounded-xl hover:bg-red-50 transition-colors touch-target"
              aria-label="Saved products"
            >
              <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'fill-red-500 text-red-500' : ''}`} />
              {favoritesCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {favoritesCount}
                </span>
              )}
            </Link>

            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="hidden xl:flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-clay-800 hover:text-clay-900 bg-white border border-clay-200 rounded-xl hover:bg-clay-50 transition-colors touch-target"
            >
              <Phone className="w-3.5 h-3.5 text-clay-500" />
              <span>Call Store</span>
            </a>

            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all hover:scale-105 touch-target"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile & Tablet Navigation Trigger (<1024px) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2.5 text-clay-700 bg-white border border-clay-200 rounded-xl touch-target"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/saved"
              className="relative p-2.5 text-clay-700 hover:text-red-500 bg-white border border-clay-200 rounded-xl touch-target"
              aria-label="Saved products"
            >
              <Heart className={`w-5 h-5 ${favoritesCount > 0 ? 'fill-red-500 text-red-500' : ''}`} />
              {favoritesCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {favoritesCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-clay-900 bg-white border border-clay-200 rounded-xl touch-target"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Quick Search Drawer */}
        {isSearchOpen && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 animate-fade-in">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Drum Tandoor, Matka, Kulhad, Handi, Ganpati..."
                className="w-full bg-white text-clay-900 text-sm pl-11 pr-24 py-3 rounded-2xl border border-clay-300 focus:outline-none focus:ring-2 focus:ring-clay-500 shadow-sm min-h-[44px]"
                autoFocus
              />
              <Search className="w-5 h-5 text-clay-400 absolute left-4 top-3.5" />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-4 bg-clay-500 text-white text-xs font-semibold rounded-xl hover:bg-clay-600 transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden flex justify-end">
          <div className="w-[85vw] max-w-sm bg-clay-100 h-full p-6 flex flex-col justify-between overflow-y-auto animate-slide-left shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-clay-200">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏺</span>
                  <div>
                    <h3 className="font-serif font-bold text-clay-900 text-base">{BUSINESS_CONFIG.brandName}</h3>
                    <p className="text-[10px] text-clay-600">{BUSINESS_CONFIG.listingName}</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-clay-700 bg-clay-200/60 rounded-xl touch-target"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center justify-between text-sm sm:text-base font-semibold text-clay-900 hover:text-clay-500 py-3 border-b border-clay-200/50 touch-target"
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <p className="text-[11px] font-bold text-clay-500 uppercase tracking-wider mb-2">Categories</p>
                <div className="grid grid-cols-2 gap-2">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/products?category=${cat.slug}`}
                      className="p-2 bg-white rounded-xl border border-clay-200 flex items-center gap-2 text-xs font-semibold text-clay-800 hover:border-clay-400 min-h-[40px]"
                    >
                      <span>{cat.icon}</span>
                      <span className="truncate">{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Drawer Actions */}
            <div className="pt-4 border-t border-clay-200 space-y-2.5 pb-6">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm touch-target"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-white text-clay-900 border border-clay-300 rounded-xl text-xs sm:text-sm font-bold touch-target"
              >
                <Phone className="w-4 h-4 text-clay-600" />
                <span>Call Store ({BUSINESS_CONFIG.phone})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
