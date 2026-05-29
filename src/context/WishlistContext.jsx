import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const WishlistContext = createContext(null);

const WISHLIST_KEY = 'wishlist';

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem(WISHLIST_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const persist = (items) => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
  };

  const addToWishlist = useCallback((product) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) return prev;
      const updated = [...prev, product];
      persist(updated);
      return updated;
    });
  }, []);

  const removeFromWishlist = useCallback((productId) => {
    setWishlist(prev => {
      const updated = prev.filter(item => item.id !== productId);
      persist(updated);
      return updated;
    });
  }, []);

  const isInWishlist = useCallback((productId) => {
    return wishlist.some(item => item.id === productId);
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{
      wishlist,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
    }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within WishlistProvider');
  return context;
}
