import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import QuickViewModal from '../components/QuickViewModal';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const category = searchParams.get('category') || 'all';
  const search = searchParams.get('q');
  const sort = searchParams.get('sort') || 'featured';
  const priceRange = searchParams.get('price') || 'all';

  useEffect(() => {
    fetchProducts();
  }, [category, search, sort, priceRange]);

  const fetchProducts = async () => {
    setLoading(true);
    let query = supabase.from('products').select('*');

    if (category && category !== 'all') {
      query = query.eq('category', category);
    }

    if (search) {
      query = query.ilike('name', `%${search}%`);
    }

    const { data } = await query;

    let filtered = data || [];

    // Price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => {
        if (max) {
          return p.price >= min && p.price <= max;
        }
        return p.price >= min;
      });
    }

    // Sort
    if (sort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === 'newest') {
      filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sort === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // Featured first
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setProducts(filtered);
    setLoading(false);
  };

  const handleSearch = (query) => {
    setSearchParams(prev => {
      if (query) {
        prev.set('q', query);
      } else {
        prev.delete('q');
      }
      return prev;
    });
  };

  const handleFilter = (key, value) => {
    setSearchParams(prev => {
      if (value && value !== 'all') {
        prev.set(key, value);
      } else {
        prev.delete(key);
      }
      return prev;
    });
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-ink pt-20">
      {/* Header */}
      <div className="border-b border-gold/35 py-12 px-[5%]">
        <h1 className="text-gold text-5xl font-serif mb-4 text-center">{search ? `Results for "${search}"` : 'Our Collection'}</h1>
        <p className="text-white/70 text-center mb-8">Handcrafted excellence for the discerning collector</p>
        <div className="max-w-xl mx-auto">
          <SearchBar onSearch={handleSearch} onClear={() => handleSearch('')} />
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-gold/35 py-6 px-[5%]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            {/* Category Filter */}
            <select
              value={category}
              onChange={(e) => handleFilter('category', e.target.value)}
              className="px-4 py-2 bg-white/5 border border-gold/35 rounded text-white text-sm outline-none"
            >
              <option value="all">All Categories</option>
              <option value="jewelry">Jewelry</option>
              <option value="watches">Watches</option>
              <option value="accessories">Accessories</option>
            </select>

            {/* Price Filter */}
            <select
              value={priceRange}
              onChange={(e) => handleFilter('price', e.target.value)}
              className="px-4 py-2 bg-white/5 border border-gold/35 rounded text-white text-sm outline-none"
            >
              <option value="all">All Prices</option>
              <option value="0-1000">Under $1,000</option>
              <option value="1000-2500">$1,000 - $2,500</option>
              <option value="2500-5000">$2,500 - $5,000</option>
              <option value="5000">$5,000+</option>
            </select>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => handleFilter('sort', e.target.value)}
              className="px-4 py-2 bg-white/5 border border-gold/35 rounded text-white text-sm outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="name">Name A-Z</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>

            {(category !== 'all' || priceRange !== 'all' || search) && (
              <button onClick={clearFilters} className="text-crimson-light hover:text-crimson text-sm underline">
                Clear All
              </button>
            )}
          </div>
          <div className="text-white/60 text-sm">{products.length} products</div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-12 px-[5%]">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-20">
              <LoadingSpinner size="lg" />
            </div>
          ) : products.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map(product => (
                <ProductCard key={product.id} product={product} showQuickView={setQuickViewProduct} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-white/60 text-xl mb-4">No products found</p>
              <p className="text-white/40">Try adjusting your filters or search term</p>
            </div>
          )}
        </div>
      </div>

      <QuickViewModal
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        product={quickViewProduct}
      />
    </div>
  );
}
