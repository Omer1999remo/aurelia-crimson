import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchWishlist();
    } else {
      const saved = localStorage.getItem('wishlist');
      setWishlist(saved ? JSON.parse(saved) : []);
    }
  }, [user]);

  const fetchWishlist = useCallback(async () => {
    const { data, error } = await supabase
      .from('wishlists')
      .select(`
        id,
        product_id,
        products (
          id,
          name,
          slug,
          category,
          price,
          original_price,
          image,
          badge
        )
      `)
      .eq('user_id', user.id);

    if (!error && data) {
      const items = data.map(item => ({
        wishlist_id: item.id,
        ...item.products
      }));
      setWishlist(items);
    }
  }, [user]);

  const addToWishlist = useCallback(async (product) => {
    if (!user) {
      setWishlist(prev => {
        const exists = prev.find(item => item.id === product.id);
        if (exists) return prev;
        const updated = [...prev, product];
        localStorage.setItem('wishlist', JSON.stringify(updated));
        return updated;
      });
      return;
    }

    const { data, error } = await supabase
      .from('wishlists')
      .insert([{ user_id: user.id, product_id: product.id }])
      .select();

    if (!error && data) {
      await fetchWishlist();
    }
  }, [user, fetchWishlist]);

  const removeFromWishlist = useCallback(async (productId) => {
    if (!user) {
      setWishlist(prev => {
        const updated = prev.filter(item => item.id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(updated));
        return updated;
      });
      return;
    }

    await supabase
      .from('wishlists')
      .delete()
      .eq('user_id', user.id)
      .eq('product_id', productId);

    await fetchWishlist();
  }, [user, fetchWishlist]);

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
