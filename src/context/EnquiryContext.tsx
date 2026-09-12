import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';
import { BUSINESS_CONFIG } from '../config/business';
import { PRODUCTS } from '../data/products';
import { getMultiProductWhatsAppLink, getGeneralWhatsAppLink } from '../utils/whatsapp';

import { recordActivityEvent } from '../utils/activityTracker';

export interface EnquiryItem {
  product: Product;
  quantity: number;
}

interface EnquiryContextType {
  items: EnquiryItem[];
  isOpen: boolean;
  addToEnquiry: (product: Product, quantity?: number) => void;
  removeFromEnquiry: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearEnquiry: () => void;
  openEnquiryDrawer: () => void;
  closeEnquiryDrawer: () => void;
  isInEnquiry: (productId: string) => boolean;
  totalItemsCount: number;
  generateWhatsAppUrl: (name?: string, location?: string, note?: string) => string;
}

const STORAGE_KEY = 'shree_matla_ghar_enquiry_cart_v1';

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export const EnquiryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<EnquiryItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return [];
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed)) return [];

      // Validate items against active product catalog
      const productMap = new Map(PRODUCTS.map((p) => [p.id, p]));
      return parsed
        .filter((item): item is EnquiryItem => item && typeof item.quantity === 'number' && item.product && productMap.has(item.product.id))
        .map((item) => ({
          ...item,
          product: productMap.get(item.product.id)!, // Sync latest product metadata
        }));
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
      console.warn('Unable to save enquiry list to localStorage:', err);
    }
  }, [items]);

  const addToEnquiry = (product: Product, quantity = 1) => {
    recordActivityEvent('enquiry_add', product.id, { quantity });
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsOpen(true);
  };

  const removeFromEnquiry = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromEnquiry(productId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity } : i))
    );
  };

  const clearEnquiry = () => {
    setItems([]);
  };

  const isInEnquiry = (productId: string) => {
    return items.some((i) => i.product.id === productId);
  };

  const openEnquiryDrawer = () => setIsOpen(true);
  const closeEnquiryDrawer = () => setIsOpen(false);

  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const generateWhatsAppUrl = (name?: string, location?: string, note?: string) => {
    if (items.length === 0) {
      return getGeneralWhatsAppLink();
    }

    return getMultiProductWhatsAppLink({
      items: items.map((i) => ({
        name: i.product.name,
        quantity: i.quantity,
        category: i.product.category,
        size: i.product.sizes?.[0],
      })),
      customerName: name,
      location,
      note,
    });
  };

  return (
    <EnquiryContext.Provider
      value={{
        items,
        isOpen,
        addToEnquiry,
        removeFromEnquiry,
        updateQuantity,
        clearEnquiry,
        openEnquiryDrawer,
        closeEnquiryDrawer,
        isInEnquiry,
        totalItemsCount,
        generateWhatsAppUrl,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = (): EnquiryContextType => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
};
