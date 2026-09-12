import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastProvider } from './components/common/Toast';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileBottomBar } from './components/layout/MobileBottomBar';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { TandoorPage } from './pages/TandoorPage';
import { GanpatiPage } from './pages/GanpatiPage';
import { WholesalePage } from './pages/WholesalePage';
import { GalleryPage } from './pages/GalleryPage';
import { OurStoryPage } from './pages/OurStoryPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ShippingPage } from './pages/ShippingPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { FavoritesPage } from './pages/FavoritesPage';

import { EnquiryProvider } from './context/EnquiryContext';
import { LanguageProvider } from './context/LanguageContext';
import { MultiEnquiryDrawer } from './components/enquiry/MultiEnquiryDrawer';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ToastProvider>
        <EnquiryProvider>
          <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen overflow-x-hidden">
              <Header />
              <main className="flex-grow overflow-x-hidden">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/pottery" element={<ProductsPage />} />
                <Route path="/search" element={<ProductsPage />} />
                <Route path="/pottery/tandoor" element={<TandoorPage />} />
                <Route path="/products/tandoor" element={<TandoorPage />} />
                <Route path="/pottery/:category/:slug" element={<ProductDetailPage />} />
                <Route path="/product/:category/:slug" element={<ProductDetailPage />} />
                <Route path="/pottery/:slug" element={<ProductDetailPage />} />
                <Route path="/product/:slug" element={<ProductDetailPage />} />
                <Route path="/tandoor" element={<TandoorPage />} />
                <Route path="/ganpati" element={<GanpatiPage />} />
                <Route path="/wholesale" element={<WholesalePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/our-story" element={<OurStoryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/shipping" element={<ShippingPage />} />
                <Route path="/saved" element={<FavoritesPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
            <MobileBottomBar />
            <MultiEnquiryDrawer />
          </div>
        </Router>
      </EnquiryProvider>
    </ToastProvider>
    </LanguageProvider>
  );
};

export default App;
