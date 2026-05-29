import { ShoppingCart, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ product, showQuickView }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="block bg-gradient-to-br from-[#111] to-[#1a1a1a] border-[1.5px] border-gold/35 rounded overflow-hidden transition-all duration-400 hover:-translate-y-2.5 hover:border-gold/70 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(212,175,55,0.15)]"
    >
      <div className="relative h-[350px] overflow-hidden bg-[#0f0f0f] border-b-[1.5px] border-gold/35">
        {product.badge && (
          <span className="absolute top-4 left-4 z-10 bg-crimson-light text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 border border-white/20 rounded-sm">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleToggleWishlist}
          className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all ${inWishlist ? 'bg-crimson-light text-white border-2 border-crimson-light' : 'bg-white/10 text-white border-2 border-gold/35 hover:text-crimson-light hover:border-crimson-light'}`}
        >
          <Heart size={16} fill={inWishlist ? 'currentColor' : 'none'} />
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-600 hover:scale-[1.08]"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 p-4 bg-gradient-to-t from-black/90 to-transparent translate-y-full transition-transform duration-300 group-hover:translate-y-0 hover-parent:translate-y-0">
          <button
            onClick={handleAddToCart}
            className="w-11 h-11 rounded-full bg-gold border-2 border-gold flex items-center justify-center text-ink transition-all hover:bg-crimson-light hover:text-white hover:border-crimson-light hover:scale-110"
            title="Add to Cart"
          >
            <ShoppingCart size={18} />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              showQuickView?.(product);
            }}
            className="w-11 h-11 rounded-full bg-gold border-2 border-gold flex items-center justify-center text-ink transition-all hover:bg-crimson-light hover:text-white hover:border-crimson-light hover:scale-110"
            title="Quick View"
          >
            <Eye size={18} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="text-gold text-xs tracking-[2px] uppercase mb-2">{product.category}</div>
        <h3 className="text-white text-xl font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center gap-4 mt-3">
          <span className="text-gold text-xl font-bold">${product.price?.toLocaleString()}</span>
          {product.original_price && (
            <span className="text-white/40 line-through">${product.original_price.toLocaleString()}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
