import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { products } from '../data';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'jewelry', label: 'Jewelry' },
  { key: 'watches', label: 'Watches' },
  { key: 'accessories', label: 'Accessories' },
];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const ref = useScrollReveal();

  const featured = useMemo(() => products.filter(p => p.featured), []);

  const filtered = activeFilter === 'all'
    ? featured
    : featured.filter(p => p.category === activeFilter);

  return (
    <section id="products" className="py-24 px-[5%] bg-ink">
      <div ref={ref}>
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gold mb-4 relative inline-block">
            Featured Pieces
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[60px] h-[3px] bg-crimson-light" />
          </h2>
          <p className="text-white/70 mt-6 text-lg">Handpicked selections from our master artisans</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-6 py-2.5 text-sm tracking-widest uppercase font-medium border-[1.5px] rounded-sm transition-all duration-300 ${
                activeFilter === f.key
                  ? 'bg-crimson-light border-crimson-light text-white'
                  : 'bg-transparent border-gold/35 text-white hover:bg-crimson-light hover:border-crimson-light'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {filtered.map(product => (
            <div key={product.id} className="reveal">
              <ProductCard product={product} showQuickView={setQuickViewProduct} />
            </div>
          ))}
        </div>
      </div>

      <QuickViewModal
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        product={quickViewProduct}
      />
    </section>
  );
}
