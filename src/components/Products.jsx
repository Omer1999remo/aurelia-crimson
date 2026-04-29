import { useState } from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import { products } from '../data';
import { useCart } from '../CartContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'jewelry', label: 'Jewelry' },
  { key: 'watches', label: 'Watches' },
  { key: 'accessories', label: 'Accessories' },
];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { addToCart } = useCart();
  const ref = useScrollReveal();

  const filtered = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

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
            <div
              key={product.id}
              className="reveal group bg-gradient-to-br from-[#111] to-[#1a1a1a] border-[1.5px] border-gold/35 rounded overflow-hidden transition-all duration-400 hover:-translate-y-2.5 hover:border-gold/70 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(212,175,55,0.15)]"
            >
              {/* Image */}
              <div className="relative h-[350px] overflow-hidden bg-[#0f0f0f] border-b-[1.5px] border-gold/35">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 bg-crimson-light text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 border border-white/20 rounded-sm">
                    {product.badge}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.08]"
                  loading="lazy"
                />
                {/* Actions */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 p-4 bg-gradient-to-t from-black/90 to-transparent translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-11 h-11 rounded-full bg-gold border-2 border-gold flex items-center justify-center text-ink transition-all hover:bg-crimson-light hover:text-white hover:border-crimson-light hover:scale-110"
                    title="Add to Cart"
                  >
                    <ShoppingCart size={18} />
                  </button>
                  <button
                    className="w-11 h-11 rounded-full bg-gold border-2 border-gold flex items-center justify-center text-ink transition-all hover:bg-crimson-light hover:text-white hover:border-crimson-light hover:scale-110"
                    title="Quick View"
                  >
                    <Eye size={18} />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="text-gold text-xs tracking-[2px] uppercase mb-2">{product.category}</div>
                <h3 className="text-white text-xl font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center gap-4 mt-3">
                  <span className="text-gold text-xl font-bold">${product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-white/40 line-through">${product.originalPrice.toLocaleString()}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
